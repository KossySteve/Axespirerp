const item_model = require("./item_model");
const item_kit_model = require("./item_kit_model");
const item_group_model = require("./itemGroup");
const item_price_model = require("./itemPrices");
const item_setting_model = require("./itemSettings");
const location_model = require("./location");
const stock_adjustment_model = require("./stockAdjustment");
const stock_confirmation_model = require("./stockConfirmation");
const stock_count_model = require("./stockCount");
const stock_opening_model = require("./stockOpening");
const stock_transfer_inward_model = require("./stockTransferInward");
const stock_transfer_outward_model = require("./stockTransferOutward");
const variant_model = require("./variant");

module.exports = (sequelize) => {
  return {
    item_model: item_model(sequelize),
    item_kit_model: item_kit_model(sequelize),
    item_group_model: item_group_model(sequelize),
    item_price_model: item_price_model(sequelize),
    item_setting_model: item_setting_model(sequelize),
    location_model: location_model(sequelize),
    stock_adjustment_model: stock_adjustment_model(sequelize),
    stock_confirmation_model: stock_confirmation_model(sequelize),
    stock_count_model: stock_count_model(sequelize),
    stock_opening_model: stock_opening_model(sequelize),
    stock_transfer_inward_model: stock_transfer_inward_model(sequelize),
    stock_transfer_outward_model: stock_transfer_outward_model(sequelize),
    variant_model: variant_model(sequelize),
  };
};
