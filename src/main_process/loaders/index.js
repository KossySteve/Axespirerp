// this module loads all necessary \
const core_service = require('../core_services');
const listeners = require("../listeners")
module.exports.start= async function(ipcMain, winInstance){
    // start coreservice;
    try {
        const models = await core_service.start(winInstance);
        // start listeners
        listeners.start(models, ipcMain);
    }
    catch(err){
        console.log(err);
    }
}