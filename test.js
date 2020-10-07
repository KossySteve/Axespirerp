const { DataTypes, Sequelize, where } = require('sequelize');

const db = new Sequelize({
      dialect: "sqlite",
      storage: `C:/Users/Tochukwu Ojinaka/AppData/Roaming/app/database.sqlite3`,
      logging: true,
});

const user = db.define('User', {
    first_name: {
        type: DataTypes.STRING
    },
    last_name: {
        type: DataTypes.STRING
    },
});

const jane = user.build({
    first_name: "namae",
    last_name: "hello world",
});

user.findOne({
    where: {
        first_name: "namaeknsad"
    }
}).then((data) => {
    if(data){
        console.log(data);
    } else {
        console.log("no result from db");
    }
});

