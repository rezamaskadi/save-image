"use strict";

module.exports = function(args) {
  var seq = args.MODULES.SEQUELIZE;
  var dt = args.MODULES.DATATYPES;

  var Image = seq.define(
    "image",
    {
      id: {
        type: dt.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        unique: true
      },

      hashtag: {
        type: dt.STRING(100),
        allowNull: false,
        unique: true
      },

      image_src: {
        type: dt.TEXT,
        allowNull: false
      }
    },
    {
      freezeTableName: true,
      paranoid: true
    }
  );

  return Image;
};
