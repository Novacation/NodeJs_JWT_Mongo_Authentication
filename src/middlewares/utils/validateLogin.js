const {
    getUsersModel
} = require("../../database/models/users")



const validateLoginLength = (login) => {
    if (!(login.length > 6 && login.length < 15)) {
        return {
            status: false,
            message: "Invalid login length."
        }
    }


    return {
        status: true
    }
}



const isAValidLogin = async (login) => {
    try {

        const usersModel = await getUsersModel()
        const result = await usersModel.model.findOne({
            login: login
        }).exec()

        usersModel.connection.close()

        if (result) {
            return {
                status: false,
                message: "Invalid login, please try another one."
            }
        }

        return {
            status: true
        }

    } catch (error) {
        console.log(error)
        return {
            status: false,
            message: "Internal server error. Please, try again later."
        }
    }
}



const validateLogin = async (login) => {
    try {
        const vLL = validateLoginLength(login)
        const iAVL = await isAValidLogin(login)

        if (!vLL.status) {
            return {
                status: vLL.status,
                message: vLL.message
            }
        }

        if(!iAVL.status){
            return {
                status: iAVL.status,
                message: iAVL.message
            }
        }

        return {
            status: true
        }
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    validateLogin
}