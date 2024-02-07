const express = require("express")
const { connection } = require("./Config/db")
const { doctorRouter } = require("./Route/doctorRoute")
require("dotenv").config()
const cors = require("cors");
const { contactRouter } = require("./Route/contactRoute");
const app = express()

app.use(cors())
app.use("/doctor", doctorRouter)
app.use("/contact", contactRouter)

app.listen(process.env.PORT, async () => {
    try {
        await connection
        console.log(`Server is running at port ${process.env.PORT}`);
        console.log("Connected to Server");
    } catch (error) {
        console.log(error.message);
        console.log("Something Went Wrong....!");
    }
})