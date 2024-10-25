var DataTypes = require("sequelize").DataTypes;
var _pis_responsable = require("./pis_responsable");

function initModels(sequelize) {
  var pis_responsable = _pis_responsable(sequelize, DataTypes);


  return {
    pis_responsable,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
