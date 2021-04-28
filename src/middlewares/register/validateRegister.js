const {validateLogin } = require("../utils/validateLogin")

const validateRegisterCredentials = async (req, res, next) => {
    try {

        const {login, password} = req.body

        const vLogin = await validateLogin(login)
        let errorsArray = []
        
        if(!vLogin.status){
            errorsArray.push(vLogin.message)

            return res.status(401).json({
                status: vLogin.status,
                error: errorsArray
            })
        }

        res.locals.userData = {
            login, 
            password
        }

        next()
        
    } catch (error) {
        console.log(error);
        res.status(409).json({
            error: "Invalid credentials."
        })
    }
}


module.exports = validateRegisterCredentials