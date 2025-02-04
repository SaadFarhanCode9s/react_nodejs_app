module.exports.signup = async function (req, res) {


  return res.json({
    success: true,
    data: "Response from Auth Controller - "+req.body.username,
  });

  //Verifying if all the required fields exist
  // if (!req || !req.body || !req.body.username) {
  //   return res.json({
  //     success: true,
  //     data: "Response from Auth Controller",
  //   });
  // }




};