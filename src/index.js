const app = require("./server")
const getConnection = require("./database/connection")

const PORT = 8000
app.listen(PORT, async () => {
    if ((await getConnection()).readyState == 1){
        console.log("Database connected.")
    } else{
        console.log("Database connection error.")
    }   
})