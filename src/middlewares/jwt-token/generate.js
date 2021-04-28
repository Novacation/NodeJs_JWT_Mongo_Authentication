require('dotenv').config()
const jwt = require('jsonwebtoken')



module.exports = (req, res, next) => {
    try {

        const {login, password} = res.locals.userData

        const jwtSecret = process.env.JWT_SECRET
        
        const token = jwt.sign({login, password}, jwtSecret, {
            expiresIn: "24h"
        })


        res.locals.userData = {
            login,
            password,
            token
        }

        next()
    } catch (error) {
        console.log(error)
        return false
    }
}