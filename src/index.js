const express = require("express")
const app = express()
const bodyParse = require("body-parser")
const path = require("path")
const getConnection = require("./database/connection")
const authRouter = require("./routes/authentication")

//Server config
app.use(express.static(path.join(__dirname, '/src')))
app.use(bodyParse.urlencoded({
    extended: false
}))
app.use(bodyParse.json())


// Routes

app.use('/auth', authRouter)


const PORT = 8000
app.listen(PORT, async () => {
    if ((await getConnection()).readyState == 1){
        console.log("Database connected.")
    } else{
        console.log("Database connection error.")
    }   
})