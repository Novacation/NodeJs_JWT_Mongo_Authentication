require('dotenv').config()
const jsonwebtoken = require('jsonwebtoken')



const generateToken = (req, res, next) => {
    try {

        const {login, password} = res.locals.userInfo

        const jwtSecret = process.env.JWT_SECRET
        
        const token = jsonwebtoken.sign({login, password}, jwtSecret, {
            expiresIn: "24h"
        })

        res.json({
            token
        })
    } catch (error) {
        console.log(error)
    }
}


module.exports = generateToken