const cron = require("node-cron");
const tasks = require("./tasks/update_perm");
// module.exports.
module.exports.start = (Tables, perm_db) => {
  // const { Item } = Tables;
  cron.schedule("*/10 * * * * *", async () => {
    // console.log("This is it");
    await tasks.updateItem(Item);
  });
};
