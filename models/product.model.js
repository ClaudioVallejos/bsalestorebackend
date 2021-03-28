const connection = require('../config/conection');

const dataModels = {
  getAllProducts: (callback) => {
    if (connection) {
      let sql = "SELECT * FROM product";
      connection.query(sql, (err, res) => {
        if (err) throw err;
        callback(res);
      });
    }
  },
  getOneProduct: (productId ,callback) => {
    if (connection) {
      let sql = `SELECT * FROM product WHERE id = ${connection.escape(productId)}`;
      connection.query(sql, (err, res) => {
        if (err) throw err;
        callback(res);
      });
    }
  },
  getSpecificProduct: ( inputText, callback ) => {
    if (connection){
      let sql = `SELECT * FROM product WHERE name LIKE "%${inputText}%" `;
      connection.query(sql, (err, res) => {
        if(err) throw err;
        callback(res);
      });
    }
  }
  
};

module.exports = dataModels;
