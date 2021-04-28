const express = require("express")
const app = express()
const bodyParse = require("body-parser")
const path = require("path")

const authRouter = require("./routes/authentication")

//Server config
app.use(express.static(path.join(__dirname, '/src')))
app.use(bodyParse.urlencoded({
    extended: false
}))
app.use(bodyParse.json())


// Routes

app.use('/auth', authRouter)

module.exports = app