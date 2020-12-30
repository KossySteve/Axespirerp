const db_config = require('../db/sequelize'); 
const notification_service = require('./notification');
let models = {}


module.exports.start = async (winInstance)=> {
    try{
        // start notification service
        notification_service.start(winInstance)
         // connect to db and get instance from db
        const sequelizeInstance = await db_config.connectDB();
        
        // get models
        const {
            item_model,
            itemkit_model
        } = await require('../models/temp/inventory/index')(sequelizeInstance)

        models.Item = item_model
        models.ItemKit = itemkit_model
        console.log("*********CHeck models******")
        console.log(models)
        console.log("*********CHeck models******")
    }
    catch(err){
        console.log(err);
    }

    return models;
}
