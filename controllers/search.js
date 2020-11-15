module.exports = async(model, data) => {
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
                            [Op.like]: `%${data["value"]}%`
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