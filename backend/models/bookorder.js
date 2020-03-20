'use strict';
module.exports = (sequelize, DataTypes) => {
  const BookOrder = sequelize.define('BookOrder', {
    BookId: DataTypes.INTEGER,
    OrderId: DataTypes.INTEGER,
    units: DataTypes.INTEGER
  }, {});
  BookOrder.associate = function(models) {
    // associations can be defined here
  };
  return BookOrder;
};