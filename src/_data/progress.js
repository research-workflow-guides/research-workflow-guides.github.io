const progressItems = require("../../updates/data.json");

const completedItems = progressItems
  .filter((item) => item.status === "completed")
  .map((item) => ({
    ...item,
    url: item.url ? item.url.replace(/^\.\.\//, "/") : null
  }));

const groupedCompleted = Object.entries(
  completedItems.reduce((groups, item) => {
    const key = item.date || "Undated";
    if (!groups[key]) {
      groups[key] = [];
    }
    groups[key].push(item);
    return groups;
  }, {})
)
  .sort(([left], [right]) => right.localeCompare(left))
  .map(([date, items]) => ({
    date,
    items
  }));

module.exports = {
  completed: groupedCompleted,
  inProgress: progressItems.filter((item) => item.status === "in-progress"),
  planned: progressItems.filter((item) => item.status === "planned")
};
