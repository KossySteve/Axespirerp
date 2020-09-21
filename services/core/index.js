const db = require("../../db/sequelize");
const db_perm = require("../../db/sequelize-perm");
const notificationService = require("../notification");

let models = {};

// start the core service (i.e the service related to sending data to db )
module.exports.start = async () => {
  await (async () => {
    await db.connectDB();
  })()
    .then(() => {
      console.log("Temporary DB successfully connected");

      const sequelizeInstance = db.getDB();
      (async () => await sequelizeInstance.sync())()
        .then(() => {
          // temporary models
          const { item_model } = require("../../models/temp")(
            sequelizeInstance
          );
          console.log(item_model)

          models.Item = item_model;

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
    })
    .catch((err) => {
      console.log("An error occured while connecting to Temporary db");
    });

  // startup permanent db
  await (async () => {
    console.log("tried to connect to permanent db ");
    await db_perm.connectDB();
  })()
    .then(() => {
      console.log("Permanent db successfully connected");

      const sequelizeInstance_perm = db_perm.getDB();
      (async () => await sequelizeInstance_perm.sync())()
        .then(() => {
          // permanent models
          const { item_model_perm } = require("../../models/perm")(
            sequelizeInstance_perm
          );
          console.log("Deliberate");
          console.log(item_model_perm);
          console.log("Deliberate2");

          models.ItemPerm = item_model_perm;
          notificationService.notify("Permanent db successfully connected", {
            keyword: "db_connected",
            error: false,
          });
        })
        .catch((err) => {
          console.log(err);
          notificationService.notify("Permanent db connection error", {
            keyword: "db_connection_error",
            error: true,
          });
        });
    })
    .catch((err) => {
      console.log("An error occured while trying connect to permanent db");
      console.log(err);
    });

  console.log(models);

  return models;
};

module.exports.stop = () => {
  // cleanly shut down db on demand
};
