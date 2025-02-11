
const missing_parameters = "Required parameters are missing in your api payload"
var moment = require('moment');
const { signup } = require('../database/auth');


// console.error(moment().unix())
// console.error(moment.unix(1739293789).toDate())


// Response codes
// 200 OK
// 400 Bad Request
// 500 Internal Server Error

module.exports.signup = async function (req, res) {

  // Verifying if all the required fields exist
  if (!req
    || !req.body
    || !req.body.username
    || !req.body.password
    || !req.body.email
  ) {
    return res.json({
      success: true,
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
      success: true,
      code:500,
      data: "Failed to save data",
    });
  }






};

module.exports.signin = async function (req, res) {


  return res.json({
    success: true,
    data: "Response from Auth Controller singin- " + req.body.username,
  });


};