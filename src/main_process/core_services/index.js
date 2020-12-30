const db_config = require('../db/sequelize'); 
let models = {}


module.exports.start = async ()=> {
    // connect to db and get instance from db;
    try{
        const sequelizeInstance = await db_config.connectDB();
        
        // get models
        const {
            item_model
        } = await require('../models/temp/inventory/index')(sequelizeInstance)

        models.Item = item_model
        console.log("*********CHeck models******")
        console.log(models)
        console.log("*********CHeck models******")
    }
    catch(err){
        console.log(err);
    }

    return models;
}
