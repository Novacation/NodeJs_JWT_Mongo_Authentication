const mongoose = require('mongoose')
const getConnection = require("../connection")


const usersSchema = new mongoose.Schema({
    login: {
        type: 'string',
        unique: true,
        required: true,
        maxlength: 16
    },
    password: {
        type: 'string',
        unique: false,
        required: true,
        maxlength: 16
    }
})



class User {

    constructor(login, password) {
        this._setLogin = login
        this._setPassword = password
    }

    static async createUser(user) {
        let conn
        try {
            conn = await getConnection()

            const usersModel = await this.getUsersModel()

            const newUser = new usersModel.model({
                login: user.getLogin,
                password: user.getPassword
            })

            const res = await newUser.save()
            console.log(res)
                
        } catch (error) {
            console.log(error)
        } finally{
            conn.close()
        }
    }

    get getLogin() {
        return this._login
    }

    get getPassword() {
        return this._password
    }

    static async getUsersModel() {
        let conn
        try {
            conn = await getConnection()
            return {
                model: conn.model('users', usersSchema),
                connection: conn
            }

        } catch (error) {
            console.log(error)
        }
    }

    set _setLogin(login) {
        this._login = login
    }

    set _setPassword(password) {
        this._password = password
    }
}


module.exports = User