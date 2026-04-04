(function () {
  fetch('/updates/data.json')
    .then(function (r) { return r.json(); })
    .then(function (data) {
      var latest = data
        .filter(function (d) { return d.status === 'completed' && d.date; })
        .sort(function (a, b) { return b.date.localeCompare(a.date); })[0];
      if (latest) {
        var el = document.getElementById('last-updated');
        if (el) el.textContent = 'Last updated: ' + latest.date.replace(/-/g, '.');
      }
    });
})();
