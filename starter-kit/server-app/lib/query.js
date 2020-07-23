const ibmdb = require('ibm_db');

const DATABASE = "BLUDB";
const HOSTNAME = "dashdb-txn-sbox-yp-dal09-11.services.dal.bluemix.net";
const UID = "kgv36166";
const PWD = "8pdsmx1x+qqzfkmb";
const PORT = "50000";
const PROTOCOL = "TCPIP";

const connStr = "DATABASE=" + DATABASE + ";HOSTNAME=" + HOSTNAME + ";UID=" + UID + ";PWD=" + PWD + ";PORT=" + PORT + ";PROTOCOL=" + PROTOCOL + ";";

var conn;

module.exports = {
  open: function () {
    conn = ibmdb.open(connStr);
    console.log("connection opened");
  },

  close: function () {
    ibmdb.close(conn);
    console.log("connection closed");
  },

  select_ingred: async function (ingred) {
    return conn.then(
      conn => {
        return conn.query("SELECT * FROM KGV36166.INGREDIENT_LIST WHERE ING_NAME LIKE '" + ingred + "'").then(data => {
          return data;
        }, err => {
          console.log(err);
        });
      }, err => {
        console.log(err)
      }
  );
  }
}
