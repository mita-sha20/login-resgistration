const User = require("../model/userModel")
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

let newpasscontroller = async(req,res)=>{
   const { password,token } = req.body;

   var decoded = jwt.verify(token, 'shhhhh');
   console.log(decoded.email);
   bcrypt.hash(password, 10, async function(err, hash) {
    await User.findOneAndUpdate({email:decoded.email},{password: hash});
    res.send({ success : "password changed"});
   });
  
}

module.exports = newpasscontroller;