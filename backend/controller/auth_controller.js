
const missing_parameters = "Required parameters are missing in your api payload"
var moment = require('moment');
const { signup, signin } = require('../database/auth');


// console.error(moment().unix())
// console.error(moment.unix(1739293789).toDate())


// Response codes
// 200 OK
// 400 Bad Request
// 500 Internal Server Error






/***************************************************************/
/***************************************************************/
/****************** SIGNUP / CREATE USER ***********************/
/***************************************************************/
/***************************************************************/

module.exports.signup = async function (req, res) {

  // Verifying if all the required fields exist
  if (
    !req?.body?.username
    || !req?.body?.password
    || !req?.body?.email
  ) {
    return res.json({
      success: false,
      code: 400,
      data: missing_parameters,
    });
  }


  //Save the data in database.

  let currentUnixTimestamp = moment().unix();
  let payload = req.body;

  let results = await signup(payload, currentUnixTimestamp);

  //Once we get the results from database, respond the frontend with results.

  if (results) {
    return res.json({
      success: true,
      code:200,
      data: "User Signed Up Successfully",
    });
  }else{
    return res.json({
      success: false,
      code:500,
      data: "Failed to save data",
    });
  }
};





/***************************************************************/
/***************************************************************/
/********************* LOGIN / GET USER ************************/
/***************************************************************/
/***************************************************************/

module.exports.signin = async function (req, res) {

  // Verifying if all the required fields exist
  if (
    !req?.body?.username
    || !req?.body?.password
  ) {
    return res.json({
      success: false,
      code: 400,
      data: missing_parameters,
    });
  }


  let payload = req.body;
  let results = await signin(payload);

  console.log(results);


    //Once we get the results from database, respond the frontend with results.

    if (results?.length > 0 && results[0]?.email) {
      return res.json({
        success: true,
        code:200,
        data: `User Signed in Successfully`,
        email: results.email
      });
    }else{
      return res.json({
        success: false,
        code:500,
        data: "Username or Password does not match",
      });
    }


};


// Expected response from Database is like:

// [
//   {
//     id: 1,
//     username: 'billyringrx',
//     email: 'billyringrx@gmail.com',
//     password: 'billyringrx',
//     created_date: 1739887447,
//     modified_date: null,
//     is_active: 1
//   }
// ]
