const mysqlConnection = require("../config/conection");
const dataModels = require("../models/product.model");

//funcion que muestra todos los productos según query del modelo

function showAllProducts(req, res) {
  if (!mysqlConnection) {
    res.json({ message: "product controller no have conection to BD" });
  } else {
    dataModels.getAllProducts((data, err) => {
      if (err) throw err;
      data ? res.json(data) : res.json({ message: "query mistake" });
    });
  }
}

//muestra un producto según id según query del modelo

function showOneProduct(req, res) {
  if (!mysqlConnection) {
    res.json({ message: "product controller no have conection to BD" });
  }
  //console.log("id :", req.params.id );
  var productId = req.params.id;

  dataModels.getOneProduct(productId, (data, err) => {
    if (err) throw err;
    data ? res.json(data) : res.json({ message: "query mistake" });
  });
}

//muestra un producto según parámetro de busqueda según query del modelo
 
function searchProduct(req, res) {
  if (!mysqlConnection) {
    res.json({ message: "product controller no have conection to BD" });
  }
  //console.log("inputText :", req.params.inputText );
  var inputText = req.params.inputText;

  dataModels.getSpecificProduct(inputText, (data, err) => {
    if (err) throw err;
    data ? res.json(data) : res.json({ message: "query mistake" });
  });
}

module.exports = {
  showAllProducts,
  showOneProduct,
  searchProduct,
};
