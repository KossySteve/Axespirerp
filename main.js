const electron = require("electron");
const url = require("url");
const path = require("path");
const coreService = require("./services/core");
const notification = require("./services/notification");
const worker = require("./worker");

const { app, BrowserWindow, screen } = electron;

let win;
// create initial window
const startApp = () => {
  // connect to db
  const tables = coreService.start();

  const { Item } = tables;

  // simple test
  (async () => {
    await Item.create({
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

  // TODO
  // 1. start the worker
  worker.start(tables);

  win = new BrowserWindow({
    webPreferences: {
      nodeIntegration: true,
    },
    width: width,
    height: height,
  });

  win.loadFile("./ui_modules/inventory/item.html");

  // start notification service
  notification.start(win);

  console.log(process.env.DB_NAME);

  // url.format({
  //     pathname: path.join(__dirname, "ui", "modules", "item", "index.html"),
  //     protocol: "file",
  //     slashes: true,
  //   })

  // win.loadURL("http://omine.herokuapp.com/");
};

app.whenReady().then(startApp);

app.on("window-all-closed", () => {
  if (process.platform === "darwin") {
    app.quit();
  }
});
