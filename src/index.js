const express = require("express")
const app = express()
const bodyParse = require("body-parser")
const path = require("path")


//Server config
app.use(express.static(path.join(__dirname, '/src')))
app.use(bodyParse.urlencoded({extended: false}))
app.use(bodyParse.json())


// Routes




const PORT = 8000
app.listen(PORT, () => {
    console.log("Server up!")
})
