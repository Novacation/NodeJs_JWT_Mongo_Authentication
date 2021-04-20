const express = require("express")
const generateToken = require("../middlewares/jwt-token/generate")
const validateToken = require("../middlewares/jwt-token/validate")
const router = express.Router()


//router.post('/create-user', validateRegister, generateToken, createUser)

router.post('/validate-token', validateToken)

router.post('/generate-token', generateToken)

//router.post('/login', validateLogin, generateToken)

module.exports = router