 

module.exports = async (sequelize) => {
    const item_model = await require('./item')(sequelize);
    
    return {
        item_model,
    }
}