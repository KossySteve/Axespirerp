const notificationService = require("../services/notification");
const {notifications} = require('../constants/notifications.js');
const seq = require('sequelize');


module.exports.add = async (model, data) => {
  try {
    await model.sync();
    await model.create(data);
    //   if data addition is successful
    notificationService.notify("Data Successfully added to db", {
      keyword: notifications.DATA_CREATION_SUCCESSFUL,
      error: false,
    });
  }
  catch(err){
      console.log(`DATA ADDITION ERROR: ${err}`);
      notificationService.notify(err.message.replaceAll('Validation error:', ''), {
        keyword: notifications.DATA_CREATION_ERROR, 
        error: true,
    });
  }
};

module.exports.delete = async (model, data) => {
    try{
        await model.findOne({where:{...data}})
        notificationService.notify("Data deletion successful", {
            keyword: notifications.DATA_DELETION_SUCCESSFUL, 
            error: false
        })
    }
    catch(err){
        notificationService.notify("Data deletion error", {
            keyword: notifications.DATA_DELETION_ERROR,
            error: true
        })
    }
}


module.exports.update = async(model,data, attributes) => {
    try{
        await model.update(data, {
            where: attributes
        })

        notificationService.notify("Data update successful", {
            keyword: notifications.DATA_UPDATED_SUCCESSFULLY, 
            error: false 
        })
    }
    catch(err){
        notificationService.notify("Data update error", {
            keyword: notifications.DATA_UPDATE_ERROR , 
            error: true
        })
    }
}

module.exports.get = async(model, data) => {
    try{
        const data_from_db = await model.findOne({
            where: data
        })

        if(!data_from_db){
            notificationService.notify("No match found", {
                keyword: notifications.DATA_NOT_FOUND,
                error: false 
            })
            return null
        }else{
            return data_from_db ;
        }
       
    }
    catch(err){
        notificationService.notify("Error while trying to get data", {
            keyword: notifications.DATA_FETCH_ERROR, 
            error: true 
        })
    }
}

module.exports.search = async(model, data) => {
    console.log({data: data});
    const field = Object.keys(data)[0];
    // const query = {};
    
    // query[Object.keys(data)[0]] = { [seq] };
    // console.log({query: JSON.stringify(query)});
    // return;

    try{
        const data_from_db = await model.findAll({
            where : {
                [Object.keys(data)[0]]: {
                    [seq.Op.like]: `%${data[Object.keys(data)[0]]}%`
                }
            }
        });

        if(!data_from_db){
            notificationService.notify("No match found", {
                keyword: notifications.DATA_NOT_FOUND,
                error: false 
            })
            return null
        }else{
            return data_from_db ;
        }
       
    }
    catch(err){
        notificationService.notify("Error while trying to get data", {
            keyword: notifications.DATA_FETCH_ERROR, 
            error: true 
        })
    }
}