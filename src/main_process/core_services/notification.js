let win;

module.exports.start = (winInstance) => {
  win = winInstance;
};

module.exports.notify = (detail, type) => {
    console.log(detail, type);
    win.webContents.send(type.keyword, detail);
//   if(type.error){
//     win.webContents.send(type.keyword, detail);
//   }
//   else {
//     // notify user of the success using ipc
//     // console.log(detail, " -succes operation")
//     win.webContents.send(type.keyword, detail);
//     // console.log(`sent notification with keyword: ${type.keyword} and ${detail}`);
//   }
};
