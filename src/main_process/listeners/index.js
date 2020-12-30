const {notifications} = require('../constants');
const notification_service = require('../core_services/notification');

module.exports.start = (models, ipcMain) => {
    // listen for save event
    ipcMain.on(notifications.MODEL_SAVE, async (evt, data)=> {
        console.log("**Data save test**"); 
            // const model = models[data.model];
            // console.log(data);
            // console.log(models);
            try{
                const model = models[data.model_name];
                await model.create(data.field_data);
                notification_service.notify("Data Entry Successful",{
                    keyword: 'DATA_ENTRY_SUCCESS',
                    error: false
                })
            }
            catch(err){
                notification_service.notify("Data Entry Failed",{
                    keyword: 'DATA_ENTRY_FAILED',
                    error: true
                })
            }
            // console.log(data)
            console.log("Data save test")
    })
}