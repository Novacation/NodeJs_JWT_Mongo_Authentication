const mongoose = require("mongoose")

const getConnection = async () => {
    try {
         const connection = await mongoose.createConnection('mongodb://localhost/auth', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        })

        return connection
    } catch (error) {
        console.log(error)
        return null
    }
}


module.exports = getConnection