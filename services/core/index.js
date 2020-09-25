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
          const {
            item_model,
            item_kit_model,
            item_group_model,
            item_price_model,
            item_setting_model,
            location_model,
            stock_adjustment_model,
            stock_confirmation_model,
            stock_count_model,
            stock_opening_model,
            stock_transfer_inward_model,
            stock_transfer_outward_model,
            variant_model,
            batch,
          } = require("../../models/temp")(sequelizeInstance);
          // console.log(item_model);

          models.Item = item_model;
          models.ItemKit = item_kit_model;
          models.ItemGroup = item_group_model;
          models.ItemPrice = item_price_model;
          models.ItemSettings = item_setting_model;
          models.Location = location_model;
          models.StockAdjustment = stock_adjustment_model;
          models.StockConfirmation = stock_confirmation_model;
          models.StockCount = stock_count_model;
          models.StockOpening = stock_opening_model;
          models.StockTransferInward = stock_transfer_inward_model;
          models.StockTransferOutward = stock_transfer_outward_model;
          models.Variant = variant_model;
          models.Batch = batch;

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
          const {
            item_model_perm,
            item_kit_model_perm,
            item_group_model_perm,
            item_price_model_perm,
            item_setting_model_perm,
            location_model_perm,
            stock_adjustment_model_perm,
            stock_confirmation_model_perm,
            stock_count_model_perm,
            stock_opening_model_perm,
            stock_transfer_inward_model_perm,
            stock_transfer_outward_model_perm,
            variant_model_perm,
          } = require("../../models/perm")(sequelizeInstance_perm);

          models.ItemPerm = item_model_perm;
          models.ItemKitPerm = item_kit_model_perm;
          models.ItemGroupPerm = item_group_model_perm;
          models.ItemPricePerm = item_price_model_perm;
          models.ItemSettingPerm = item_setting_model_perm;
          models.LocationPerm = location_model_perm;
          models.StockAdjustmentPerm = stock_adjustment_model_perm;
          models.StockConfirmationPerm = stock_confirmation_model_perm;
          models.StockCountPerm = stock_count_model_perm;
          models.StockOpeningPerm = stock_opening_model_perm;
          models.StockTransferInwardPerm = stock_transfer_inward_model_perm;
          models.StockTransferOutwardPerm = stock_transfer_outward_model_perm;
          models.VariantPerm = variant_model_perm;

          console.log(models);

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

  // console.log(models);

  return models;
};

module.exports.stop = () => {
  // cleanly shut down db on demand
};
