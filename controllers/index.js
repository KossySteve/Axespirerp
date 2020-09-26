const notificationService = require("../services/notification");



module.exports.add = async (model, data, win) => {
  try {
    await model.sync();
    await model.create(data);

    //   if data addition is successful
    notificationService.notify("Data Successfully updpated to db", {
      keyword: "data_creation_successful",
      error: false,
      window: win
    });
  }
  catch(err){
      notificationService.notify("Data Creation Error", {
          keyword: "data_creation_error", 
          error: true,
          window: win
      })
  }
};

module.exports.delete = async (model, data) => {
    try{
        await model.findOne({where:{...data}})
        notificationService.notify("Data deletion successful", {
            keyword: "data_deletion_successful", 
            error: false
        })
    }
    catch(err){
        notificationService.notify("Data deletion error", {
            keyword: "data_deletion_error",
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
            keyword: "data_updata_successful", 
            error: false 
        })
    }
    catch(err){
        notificationService.notify("Data updata error", {
            keyword: "data_update_error" , 
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
                keyword: "data_not_found",
                error: false 
            })
            return null
        }else{
            return data_from_db ;
        }
       
    }
    catch(err){
        notificationService.notify("Error while trying to get data", {
            keyword: "data_fetching_error", 
            error: true 
        })
    }
}