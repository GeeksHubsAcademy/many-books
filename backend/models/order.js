'use strict';
module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    status: DataTypes.STRING,
    fechaEntrega: DataTypes.STRING
  }, {});
  Order.associate = function(models) {
    // associations can be defined here
    Order.belongsToMany(models.Book, {
      through: models.BookOrder
    })
  };
  return Order;
};