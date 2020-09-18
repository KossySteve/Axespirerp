const { Sequelize } = require("sequelize");

let db;

//create database instance
module.exports.connectDB = async () => {
  const db = new Sequelize({
    dialect: "sqlite",
    storage: `${app.getPath("userData")}/database_perm.sqlite`,
    logging: true,
  });

  // check if properly connected to database, if not  throw error message
  try {
    await db.authenticate();
  } catch (e) {
    throw new Error("An error occured while trying to connect to database");
  }
};

module.exports.getDB = () => {
  return db;
};
