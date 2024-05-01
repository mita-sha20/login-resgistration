const User = require("../model/userModel")
const jwt = require('jsonwebtoken');
const nodemailer = require("nodemailer");

let resetController = async(req,res)=>{
  const { email } = req.body;

  let existingUser = await User.find({ email: email });


  if(existingUser.emailVerified !== 0 ){

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
            subject: "this is your reset email link", 
            html: `<a href="http://localhost:5173/newresetemail/${token}">Click here</a>`, 
          });
     })   
   }else{
   res.send({error: "Email not send"})
  }
  
};

module.exports = resetController;