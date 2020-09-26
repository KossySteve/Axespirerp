const cron = require("node-cron");

let x = 1;
const task = cron.schedule("*/10 * * * * *", function () {
  x++;
  if (x >= 5) task.destroy();
});
