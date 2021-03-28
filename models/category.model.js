const connection = require('../config/conection');

const dataModels = {
  getAllCategories: (callback) => {
    if (connection) {
      let sql = "SELECT * FROM category";
      connection.query(sql, (err, res) => {
        if (err) throw err;
        callback(res);
      });
    }
  },
  getOneCategory: (categoryId ,callback) => {
    if (connection) {
      let sql = `SELECT * FROM category WHERE id = ${connection.escape(categoryId)}`;
      connection.query(sql, (err, res) => {
        if (err) throw err;
        callback(res);
      });
    }
  },
  getSpecificCategory: ( inputText, callback ) => {
    if (connection){
      let sql = `SELECT * FROM category WHERE name LIKE "%${inputText}%" `;
      connection.query(sql, (err, res) => {
        if(err) throw err;
        callback(res);
      });
    }
  }
};

module.exports = dataModels;
