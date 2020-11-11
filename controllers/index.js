const notificationService = require("../services/notification");
const {notifications} = require('../constants/notifications.js');
const {Op} = require('sequelize');

module.exports.add = async (model, data) => {
    console.log("******DATA ADD START*******");
    await model.sync()
    .then((data) => {
        console.log("model sync successful");
    })
    .catch((error) => {
        console.log("model syc error");
    });

    // console.log({data: data});

    //check if the data exists
    await model.findOne({
        where : {
            code: data.code
        }
    }).then((result) => {
        console.log("******THEN EXECUTED*******");
        if(result){
            console.log("it exists", result.name);
           
            for(let key in data){
                result[key] = data[key];
            }
            (async () => {
                await result.save();
            })().then(() => {
                notificationService.notify("Data Updated Successfully", {
                    keyword: notifications.DATA_CREATION_SUCCESSFUL,
                    error: false});
            })
        
        } else{
            console.log("******DATA DOES NOT EXIST CREATING NEW*******");
            //if model does not exists create a new one
            model.create(data)
            .then((data) => {
                console.log("******MODEL.CREATE THEN BLOCK*******");
                notificationService.notify("Data Successfully added to db", {
                    keyword: notifications.DATA_CREATION_SUCCESSFUL,
                    error: false});
            })
            .catch((error) => {
                console.log("******MODEL.CREATE CATCH BLOCK*******", error.message);
                // err.message.replaceAll('Validation error:', '')
                notificationService.notify(error.message.replaceAll('Validation error:', ''), {
                    keyword: notifications.DATA_CREATION_ERROR, 
                    error: true,
                   });
            })
            //   if data addition is successful
            
        }
    }).catch((error) => {
        console.log("******CATCH BLOCK*******");
        console.log(`DATA ADDITION ERROR: ${error}`);
      notificationService.notify(error.message.replaceAll('Validation error:', ''), {
        keyword: notifications.DATA_CREATION_ERROR, 
        error: true,
       });
    });
};

module.exports.delete = async (model, data) => {
    try{
        await model.findOne({where:{...data}});

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
                [Op.or]:[
                    {
                        [data["fields"][0]]: {
                            [Op.like]: `%${data["value"]}%`
                        }
                    },
                    {
                        [data["fields"][1]]: {
                            [Op.like]: `%${data["code"]}%`
                        }
                    }  
                ]
                
            }
        });

        console.log("stored data below")
        console.log(data_from_db);

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

        console.log(err);
    }
}