var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "vvfv20el7sb2enn3.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "xbgm3ff9560etok1",
  password: "lzstidu88a5uwh4y",
  database: "zbuvfx2sxef4nadu	"
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
