require("../config/conection");
const cors = require('cors');
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

//config
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//servidor escuchando
app.listen(port, () => {
  console.log(`Servidor corriendo de pana en http://localhost:${port}`);
});

app.use(require('../routes/category.route'));
app.use(require('../routes/product.route'));

module.exports = app;
