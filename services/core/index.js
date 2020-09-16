const db = require("../../db/sequelize");
const notificationService = require("../notification");
const item_model = require("../../models/item_model");

// start the core service (i.e that related to sending to db )
module.exports.start = () => {
  (async () => {
    await db.connectDB();
  })()
    .then(() => {
      console.log("DB successfully connected");
    })
    .catch((err) => {
      console.log("An error occured while connecting to db");
    });

  const sequelizeInstance = db.getDB();
  (async () => await sequelizeInstance.sync())()
    .then(() => {
      notificationService.notify("db successfully connected", {
        keyword: "db_connected",
        error: false,
      });
    })
    .catch((err) => {
      notificationService.notify("db connection error", {
        keyword: "db_connection_error",
        error: true,
      });
    });

  // initialize the models
  const Item = item_model(sequelizeInstance);
  // const Item_kit = item_kit_model(sequelizeInstance);
  return{
    Item,
    // ItemKit
  }
};

module.exports.stop = () => {
  // cleanly shut down db on demand
};
