const express = require("express")
const generateToken = require("../middlewares/jwt-token/generate")
const validateToken = require("../middlewares/jwt-token/validate")
const createUser = require("../middlewares/register/createUser")
const validateRegisterCredentials = require("../middlewares/register/validateRegister")
const {
    isAValidLogin
} = require("../middlewares/utils/validateLogin")
const router = express.Router()


router.post('/create-user', validateRegisterCredentials, generateToken , createUser )

router.post('/validate-token', validateToken)

router.post('/generate-token', generateToken)

//router.post('/login', validateLogin, generateToken)

module.exports = router