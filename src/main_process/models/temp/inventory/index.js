 

module.exports = async (sequelize) => {
    const item_model = await require('./item')(sequelize);
    const itemkit_model = await require('./itemkit')(sequelize);
    
    return {
        item_model,
        itemkit_model
    }
}