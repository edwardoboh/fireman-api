const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config({path: "config/db.env"})

const path = require('path')
const app = express()
const device = require('./routes/api/devices')
const user = require('./routes/api/users')
const auth = require('./routes/api/auth')

app.use(express.json())

app.use("/device", device)
app.use("/user", user)
app.use("/auth", auth)

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true , useUnifiedTopology: true })
.then(() => {
    return console.log("Connection to database was successful")
})
.catch((e) => {
    return console.log("Unable to connect to Database")
})



app.get("/", (req, res) => {
    res.status(200).send("Hello World")
})

if(process.env.NODE_ENV === "production"){
    app.use("/home", express.static("client/public"))

    app.get("*", (request, response) => {
        response.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
    })
}

const port = process.env.PORT || 5500
app.listen(port, () => {
    console.log("Server Started on port: ", port)
})