//Importing Database (mysql) Connector
const database = require("./index");


/***************************************************************/
/***************************************************************/
/****************** SIGNUP / CREATE USER ***********************/
/***************************************************************/
/***************************************************************/

// users TABLE FIELDS
// username	varchar(255)
// email	varchar(255)
// password	varchar(255)
// created_date	bigint
// is_active	tinyint(1)




module.exports.signup = async function (payload, currentUnixTimestamp) {

    const sql = `INSERT INTO users (username, email, password, created_date, is_active) VALUES ('${payload.username}', '${payload.email}', '${payload.password}', ${currentUnixTimestamp}, 1)`;

    console.log(sql);

    const queryResult = await database.runQuery(sql);

    if (queryResult && queryResult.affectedRows > 0) {
        return true;
    }

    return false;
};






/***************************************************************/
/***************************************************************/
/********************* LOGIN / GET USER ************************/
/***************************************************************/
/***************************************************************/

module.exports.signin = async function (payload) {

    const sql = `SELECT * FROM users WHERE users.username='${payload.username}' AND users.password='${payload.password}'`;

    const queryResult = await database.runQuery(sql);

    return queryResult;
};
