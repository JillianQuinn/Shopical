var ibmdb = require('ibm_db');

const DATABASE = "BLUDB";
const HOSTNAME = "dashdb-txn-sbox-yp-dal09-11.services.dal.bluemix.net";
const UID = process.env.BLUDB_UID;
const PWD = process.env.BLUDB_PWD;
const PORT = "50000";
const PROTOCOL = "TCPIP";

var connStr = "DATABASE=" + DATABASE + ";HOSTNAME=" + HOSTNAME + ";UID=" + UID + ";PWD=" + PWD + ";PORT=" + PORT + ";PROTOCOL=" + PROTOCOL + ";";
console.log(connStr);

// sample SQL SELECT statement
ibmdb.open(connStr).then(
    conn => {
      conn.query("select * from KGV36166.INGREDIENTS").then(data => {
        console.log(data);
        conn.closeSync();
      }, err => {
        console.log(err);
      });
    }, err => {
      console.log(err)
    }
);
