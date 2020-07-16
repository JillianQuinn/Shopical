var ibmdb = require('ibm_db');

const DATABASE = "BLUDB";
const HOSTNAME = "dashdb-txn-sbox-yp-dal09-11.services.dal.bluemix.net";
const UID = process.env.BLUDB_UID;
const PWD = process.env.BLUDB_PWD;
const PORT = "50000";
const PROTOCOL = "TCPIP";

const connStr = "DATABASE=" + DATABASE + ";HOSTNAME=" + HOSTNAME + ";UID=" + UID + ";PWD=" + PWD + ";PORT=" + PORT + ";PROTOCOL=" + PROTOCOL + ";";

var conn;

module.exports = {
  open: function () {
    conn = ibmdb.open(connStr);
  },

  select_ingred: async function (ingred) {
    return conn.then(
      conn => {
        return conn.query("select " + ingred + " from KGV36166.INGREDIENTS").then(data => {
          conn.closeSync();
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
