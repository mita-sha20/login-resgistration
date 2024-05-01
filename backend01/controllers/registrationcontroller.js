const User = require("../model/userModel")
const bcrypt = require('bcrypt');
const nodemailer = require("nodemailer");
const otpGenerator = require('otp-generator');
const jwt = require('jsonwebtoken');

let registrationcontroller = async (req , res) => {
  
   const { name, email, password } = req.body;

   if(!name || !email || !password){
    return res.send({error:"please fill all field"})
   }
 
   
   if(password && password.length <6){
    return res.send({error:"password is too small"})
   }

   let existingUser = await User.find({ email:email });
   console.log(existingUser);

   
   if(existingUser.length > 0){
      return res.send({error:`${email} already in use`})
   }else{
    let otp = otpGenerator.generate(6, { upperCaseAlphabets: false, specialChars: false });
    console.log(otp)
    bcrypt.hash(password, 10,async function(err, hash) {
 
         let user = new User({
            name:name,
            email:email,
            password:hash,
            otp: otp
         });
      
         user.save();
         jwt.sign({ email: email }, "shhhhh",async function(err, token) {
            const transporter = nodemailer.createTransport({
               service: "gmail", 
               auth: {
                 user: "ummetaieba306@gmail.com",
                 pass: "yodn opnr uddi foge",
               },
             });
               
               const info = await transporter.sendMail({
                 from: 'SAMIHA', 
                 to: email, 
                 subject: "this is your verification", 
                 html: `<a href="http://localhost:5173/emailverification/${token}">Click here</a>`, 
               });
          })

         //  setTimeout(async ()=>{
         //    await User.findOneAndUpdate({ email : email },{ otp: "" });
         //  },10000)

  res.send({
            name:user.name,
            email:user.email,
            role:user.role
         }); 
  });
   }
};

module.exports = registrationcontroller;