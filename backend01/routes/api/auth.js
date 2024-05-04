const express = require('express')
const route = express.Router()
const registrationcontroller = require("../../controllers/registrationcontroller")
const loginController = require("../../controllers/loginController")
const otpController = require("../../controllers/otpController")
const linkController = require('../../controllers/linkController')
const resetController = require('../../controllers/resetController')
const forgotcontroller = require('../../controllers/forgotController')
const newpasscontroller = require('../../controllers/newpasscontroller')
const newemailcontroller = require('../../controllers/newemailcontroller')


route.post('/registration' , registrationcontroller);
route.post('/login' , loginController);
route.post('/otpVerification', otpController);
route.post('/linkverification', linkController);
route.post('/resetemail', resetController);
route.post('/forgotpass', forgotcontroller);
route.post('/newpassword', newpasscontroller);
route.post('/newresetemail', newemailcontroller);




module.exports = route;