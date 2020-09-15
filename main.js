const electron = require("electron");
const url = require("url");
const path = require("path");
const coreService = require('services/core');

const { app, BrowserWindow } = electron;

let win;
// create initial window
const startApp = () => {

  // connect to db 
  coreService.connectDB();

  // TODO
  // 1. start the worker
  

  win = new BrowserWindow({
    webPreferences: {
      nodeIntegration: true,
    },
  });
  console.log(process.env.DB_NAME)

  

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
