const {notifications} = require('../constants')
module.exports.start = (models, ipcMain) => {
    // listen for save event
    ipcMain.on(notifications.MODEL_SAVE, (evt, data)=> {
        console.log("**Data save test**"); 
            // const model = models[data.model];
            console.log(data)
            console.log("Data save test")
    })
}