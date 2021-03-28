const mysqlConnection = require("../config/conection");
const dataModels = require("../models/category.model");

function showAllCategories(req, res) {
  if (!mysqlConnection) {
    res.json({ message: "category controller no have conection to BD" });
  } else {
    dataModels.getAllCategories((data, err) => {
      if (err) throw err;
      data ? res.json(data) : res.json({ message: "query mistake" });
    });
  }
}

function showOneCategory(req, res) {
  if (!mysqlConnection) {
    res.json({ message: "category controller no have conection to BD" });
  }
  //console.log("id :", req.params.id );
  var categoryId = req.params.id;

  dataModels.getOneCategory(categoryId, (data, err) => {
    if(err) throw err;
    data ? res.json(data) : res.json({ message: "query mistake" });
  });
}

function showSpecificCategory(req, res) {
  if (!mysqlConnection) {
    res.json({ message: "category controller no have conection to BD" });
  }
  //console.log("inputText :", req.params.inputText );
  var inputText = req.params.inputText;

  dataModels.getSpecificCategory(inputText, (data, err) => {
    if(err) throw err;
    data ? res.json(data) : res.json({ message: "query mistake" });
  });

}

module.exports = {
  showAllCategories,
  showOneCategory,
  showSpecificCategory
};
