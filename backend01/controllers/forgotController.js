const User = require("../model/userModel")
const bcrypt = require('bcrypt');
const nodemailer = require("nodemailer");
const jwt = require('jsonwebtoken');

let forgotcontroller = async (req , res) => {
  
   const { email } = req.body;

   let existingUser = await User.find({ email: email });
   console.log(existingUser);

   if(existingUser.length > 0 ){
   
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
             subject: "this is your change password link", 
             html: `<a href="http://localhost:5173/newpassword/${token}">Click here</a>`, 
           });
      })   
    }else{
    res.send({error: "User not found"})
   }
   
};

module.exports = forgotcontroller;