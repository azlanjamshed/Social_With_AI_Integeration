require("dotenv").config()
const app = require("./src/app")
const connectDB = require("./src/db/db")
const router = require("./src/routes/auth.routes")



connectDB()




app.listen(3000, () => {
    console.log("server started at 3000");

})
