require('dotenv').config()
const jwt = require('jsonwebtoken')



module.exports = (req, res) => {
    try {

        const {login, password} = req.body

        const jwtSecret = process.env.JWT_SECRET
        
        const token = jwt.sign({login, password}, jwtSecret, {
            expiresIn: "24h"
        })

        res.json({
            token
        })
    } catch (error) {
        console.log(error)
        return false
    }
}