let win;

module.exports.start = (win) => {
  win = win;
};

module.exports.notify = (detail, type) => {
  if(type.error){
    // notify user of the error using ipc
    console.log(detail, "- failed operation")
  }
  else {
    // notify user of the success using ipc
    console.log(detail, " -succes operation")
  }
};
