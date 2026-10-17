const { parse } = require("node-html-parser");

function isPath(value) {
  return /^(?:[a-z]:[\\/]|%\w+%[\\/]|\.{0,2}\/|~[\\/]|\\\\[a-z0-9][\w.-]*[\\/])/i.test(value)
    || (!/\s/.test(value) && /^[^\\/<>{}]+[\\/][^<>{}]+$/.test(value));
}

function escapeHtml(value) {
  return value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

module.exports = function enhanceInlineCode(html) {
  const document = parse(html);
  let changed = false;

  for (const code of document.querySelectorAll("code")) {
    if (code.closest("pre") || code.children.length) continue;
    const value = code.textContent;
    if (!isPath(value)) continue;

    // A folder separator is a better line break than the middle of a filename.
    code.innerHTML = escapeHtml(value).replace(/([\\/]+)(?=.)/g, "$1<wbr>");
    changed = true;
  }

  return changed ? document.toString() : html;
};
