'use strict';
module.exports = (sequelize, DataTypes) => {
  const BookGenre = sequelize.define('BookGenre', {
    GenreId: DataTypes.INTEGER,
    BookId: DataTypes.INTEGER
  }, {});
  BookGenre.associate = function(models) {
    // associations can be defined here
  };
  return BookGenre;
};