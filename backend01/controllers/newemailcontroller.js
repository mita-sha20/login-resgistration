const User = require("../model/userModel")
const jwt = require('jsonwebtoken');


let newemailcontroller = async(req,res)=>{
   const { token } = req.body;

   var decoded = jwt.verify(token, 'shhhhh');
   console.log(decoded.email);
 
    await User.findOneAndUpdate({email:decoded.email});
    res.send({ success : "email resended"});
   
}

module.exports = newemailcontroller;