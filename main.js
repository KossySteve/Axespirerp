const electron = require("electron");
const url = require("url");
const path = require("path");
const coreService = require("./services/core");
const notification = require("./services/notification");
const worker = require("./worker");
const controllers = require("./controllers");

const { app, BrowserWindow, screen } = electron;

let win;
// create initial window
const startApp = () => {
  // connect to db

  (async () => {
    const tables = await coreService.start();

    const { Item, ItemPerm } = tables;
    console.log(ItemPerm);

    // 1. start the worker
    // worker.start(tables);

    // simple
    controllers.add(Item, {
      code: 123456789,
      description: "Best product",
      type: "Shoe",
      group: "FootWare",
      isGroup: true,
      company: "Finnacle",
      brand: "Nike",
      model: "N567",
      standardCost: 465742.67,
      saleRate: 26447112,
      purchaseRate: 64465127,
      minRate: 623752,
      maxRate: 642641,
    });
  })();

  win = new BrowserWindow({
    webPreferences: {
      nodeIntegration: true,
    },
    // width: width,
    // height: height,
  });

  console.log("Tried running main.js");

  win.loadFile("./ui_modules/inventory/item.html");

  // start notification service
  notification.start(win);

  console.log(process.env.DB_NAME);
};

app.whenReady().then(startApp);

app.on("window-all-closed", () => {
  // TO-DO: cleanly kill all services

  if (process.platform === "darwin") {
    app.quit();
  }
});
