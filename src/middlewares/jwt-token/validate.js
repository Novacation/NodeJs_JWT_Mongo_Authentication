require('dotenv').config()
const jwt = require("jsonwebtoken")


module.exports = (req, res, next) => {
    try {
        const auth = req.headers['authorization']

        if(!auth){
            return res.status(401).json({
                auth: false,
                error: "No token provided."
            })
        } else {
            const jwtToken = auth.split(' ')[1]
            return res.status(200).json({
                response: jwt.verify(jwtToken, process.env.JWT_SECRET)
            })
        }
    } catch (error) {
        return res.status(500).json({
            error
        })
    }
}
