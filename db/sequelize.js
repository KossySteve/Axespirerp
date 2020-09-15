const {Sequelize} = require('sequelize') ; 

let db ;

//create database instance 
module.exports.connectDB = async () => {
    db = new Sequelize(process.env.DB_NAME,process.env.DB_USERNAME, process.env.DB_PASSWORD, {
        host: process.env.DB_HOST, 
        dialect: 'mysql',
        logging: true
    })

    // check if properly connected to database, if not  throw error message 
    try {
        await db.authenticate() ; 
    }
    catch(e){
        throw new Error('An error occured while trying to connect to database');
    }
}

module.exports.getDB = () => {
    return db; 
}







