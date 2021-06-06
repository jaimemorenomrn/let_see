const { DataTypes } = require("sequelize");
const dbConnection = require("../config/db");

const File = dbConnection.define("File", {
  url: {
    type: DataTypes.STRING,
  },
  name: {
    type: DataTypes.STRING,
  },
  // relation: {
  //     type: DataTypes.relation,
  // },
});

module.exports = File;
