module.exports.updateItem = async (Table, ItemPerm) => {
  const items = await Table.findAll();
  if (items && items.count > 0) {
    items.forEach(async (item) => {
      // console.log(item.dataValues);
      ItemPerm.create(item.dataValues);
    });
  }
};
