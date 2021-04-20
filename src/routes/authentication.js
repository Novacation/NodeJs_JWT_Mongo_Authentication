const express = require("express")
const generateToken = require("../middlewares/jwt-token/generate")
const validateToken = require("../middlewares/jwt-token/validate")
const router = express.Router()


//router.post('/create-user', validateRegisterCredentials, generateToken, createUser)

router.post('/validate-token', validateToken)

router.post('/generate-token', generateToken)

//router.post('/login', validateLoginCredentials, generateToken)

module.exports = router