const mongoose = require("mongoose")

const usersSchema = new mongoose.Schema({
    login: {
        type: 'string',
        unique: true,
        required: true
    },
    password: {
        type: 'string',
        unique: false,
        required: true
    }
})

const userModel = mongoose.model('users', usersSchema)



class User {
    #login; 
    #password;

    constructor(login, password) {
        this.#setLogin(login)
        this.#setPassword(password)
    }

    static createUser(user) {
        const newUser = new userModel({
            login: user.getLogin,
            password: user.getPassword
        })

        newUser.save()
            .then(res =>{
                console.log(res)
            })
    }

    get getLogin() {
        return this.#login
    }

    get getPassword() {
        return this.#password
    }

    set #setLogin(login) {
        this.#login = login
    }

    set #setPassword(password) {
        this.#password = password
    }
}


module.exports = User