const cron = require("node-cron");

let x = 1;
const task = cron.schedule("*/10 * * * * *", function () {
  x++;
  console.log(x);
  if (x >= 5) task.destroy();
});
