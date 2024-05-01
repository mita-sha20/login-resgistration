const User = require("../model/userModel")
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');


let loginController = async(req,res)=>{
   const{ email,password } = req.body;
   
   let findUser = await User.findOne({ email : email });


   if(findUser){
    bcrypt.compare(password, findUser.password, function(err, result) {
     console.log(result);
     console.log(findUser);
     var token = jwt.sign({ id: findUser._id , email: findUser.email}, 'shhhhh' , { expiresIn: "24h" });
        if(result){
           res.send({success:"Login Successful", token:token , email: findUser.email, name: findUser.name, role:findUser.role})
        }else{
           res.send({error:"Credential not matched"})
        }
    });
   }else{
     res.send({error:"User not found"})
   }
   

}

module.exports = loginController;