const mysql = require("mysql");
const bd = require("./env.json");

const objConnection = {
  host: bd.mysql.host,
  port: bd.mysql.port,
  password: bd.mysql.password,
  user: bd.mysql.user,
  database: bd.mysql.database,
};

const myConnection = mysql.createConnection(objConnection);

function handleDiscconect() {
  myConnection.connect((err) => {
    if (err) {
      console.log(`Ops! there was a mistake: ${err}`);
      setTimeout(handleDiscconect, 2000); //tiempo de retraso antes de volver a conectar
    } else {
      console.log("bd connected!");
    }
  });

  //manejo de error de desconexión
  myConnection.on("error", (err) => {
    console.log("db error", err);
    if (err.code === "PROTOCOL_CONNECTION_LOST") {
      handleDiscconect();
    } else {
      throw err;
    }
  });
  
  module.exports = myConnection;
  
}

handleDiscconect();
