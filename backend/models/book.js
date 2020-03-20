'use strict';
module.exports = (sequelize, DataTypes) => {
  const Book = sequelize.define('Book', {
    name: DataTypes.STRING,
    price: DataTypes.FLOAT,
    author: DataTypes.STRING
  }, {});
  Book.associate = function (models) {
    // associations can be defined here
    Book.belongsToMany(models.Genre, {
      through: models.BookGenre
    })
  };
  return Book;
};