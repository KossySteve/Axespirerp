const electron = require("electron");
const url = require("url");
const path = require("path");
const coreService = require("./services/core");
const notification = require("./services/notification");
const worker = require("./worker");
const controllers = require("./controllers");
const { table } = require("console");
const util =require('util');
const { webContents } = require("electron");
const { notifications } = require('./constants/notifications.js');

const { app, BrowserWindow, screen, ipcMain, globalShortcut } = electron;

let win;
// create initial window
const startApp = () => {
  // connect to db


  const {width, height} = screen.getPrimaryDisplay().size;
  win = new BrowserWindow({
    webPreferences: {
      nodeIntegration: true,
    },
    width: width,
    height: height,
  });


  win.loadFile("./ui_modules/inventory/item.html");
  //open dev tools
  win.webContents.openDevTools();
  // start notification service
  notification.start(win);

  (async () => {
    const tables = await coreService.start();
     
    // when a model is trying to save
    ipcMain.on(notifications.MODEL_SAVE, (event, data) => {
      console.log("*****MODEL SAVE TRIGGERED*****")
      const model = tables[data.model];
      console.log(`model-save received ${model} ${JSON.stringify(tables)} ${data.model}`);
      controllers.add(model, data.data);
    });
  
    // search by name
    ipcMain.on(notifications.MODEL_SEARCH_NAME, (event, data) => {
      const { searchKey } = data;
      const model = tables[data.model];
      controllers.search(model, searchKey).then((data) => {
        if(data !== null){
          win.webContents.send(notifications.MODEL_SEARCH_NAME_SUCCESSFUL, data);
        }
      })
    });

    // search by code
    ipcMain.on(notifications.MODEL_SEARCH_CODE, (event, data) => {
      const { searchKey } = data;
      const model = tables[data.model];
      controllers.search(model, searchKey).then((data) => {
        if(data !== null){
          console.log(`******** SEARCH BY CODE: DATA FOUND*********`)
          win.webContents.send(notifications.MODEL_SEARCH_CODE_SUCCESSFUL, data);
        }
      })
    });

  })();


};

app.whenReady().then(startApp);

app.on("window-all-closed", () => {
  // TO-DO: cleanly kill all services

  if (process.platform === "darwin") {
    app.quit();
  }
});
