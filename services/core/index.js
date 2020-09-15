const db = require('../../db/sequelize')


const connectToDB = () => {
    (
        async  ()=>{
            await db.connectDB()
        } 
    )().then(()=> {
        console.log("DB successfully connected")
    }).catch(err => {
        console.log("An error occured while connecting to db")
    })
}
