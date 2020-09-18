const db = require("../../db/sequelize");
const db_perm = require("../../db/sequelize-perm");
const notificationService = require("../notification");

// start the core service (i.e the service related to sending data to db )
module.exports.start = () => {
  (async () => {
    await db.connectDB();
  })()
    .then(() => {
      console.log("Temporary DB successfully connected");
    })
    .catch((err) => {
      console.log("An error occured while connecting to Temporary db");
    });

  const sequelizeInstance = db.getDB();

  (async () => await sequelizeInstance.sync())()
    .then(() => {
      notificationService.notify("Temporary db successfully connected", {
        keyword: "db_connected",
        error: false,
      });
    })
    .catch((err) => {
      notificationService.notify("Temporary db connection error", {
        keyword: "db_connection_error",
        error: true,
      });
    });

  // startup permanent db
  (async () => {
    await db_perm.connectDB();
  })()
    .then(() => {
      console.log("Permanent db successfully connected");
    })
    .catch(() => {
      console.log("An error occured while trying connect to db");
    });

  const sequelizeInstance_perm = db_perm
    .getDB()(async () => await sequelizeInstance_perm.sync())()
    .then(() => {
      notificationService.notify("Permanent db successfully connected", {
        keyword: "db_connected",
        error: false,
      });
    })
    .catch((err) => {
      notificationService.notify("Permanent db connection error", {
        keyword: "db_connection_error",
        error: true,
      });
    });
  const { item_model } = require("../../models/temp")(sequelizeInstance);
  // const Item_kit = item_kit_model(sequelizeInstance);
  return {
    Item: item_model,
    ItemPerm: item_perm_model,
    // ItemKit
  };
};

module.exports.stop = () => {
  // cleanly shut down db on demand
};
