const { Sequelize } = require("sequelize");
const { app } = require("electron");
let db;

//create database instance
module.exports.connectDB = async () => {  
  db = new Sequelize({
    dialect: "sqlite",
    storage: `${app.getPath("userData")}/database.sqlite3`,
    logging: false,
  });

  // check if properly connected to database, if not  throw error message
  try {
    await db.authenticate().then((data) => {
      console.log("sequelize authentication successful");
    });
  } catch (e) {
    throw new Error("An error occured while trying to connect to database");
  }
};

module.exports.getDB = () => {
  return db;
};
