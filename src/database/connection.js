const mongoose = require("mongoose")


const getConnection = async () => {
    try {
        return await mongoose.createConnection('mongodb://localhost/JWT_Auth', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        })
    } catch (error) {
        console.log(error)
        return null
    }
}




module.exports = getConnection