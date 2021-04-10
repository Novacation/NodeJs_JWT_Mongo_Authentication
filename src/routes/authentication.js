const express = require("express")
const generateToken = require("../middlewares/jwt-token/generateToken")
const router = express.Router()


//router.post('/create-user', validateRegisterCredentials, generateToken, createUser)

//router.post('/validate-token', validateToken)

router.get('/generate-token', generateToken)

//router.post('/login', validateLoginCredentials, generateToken)

module.exports = router