let win;

module.exports.start = (win) => {
  win = win;
};

module.exports.notify = (detail, type) => {
  if(type.error){
    // notify user of the error using ipc
    console.log(detail, "- failed operation", type)
  }
  else {
    // notify user of the success using ipc
    console.log(detail, " -succes operation", type)
    if(type.window){
      type.window.webContents.send('data-added');
    } else{
      console.log("it does not have window notification oh");
    }
  }
};
