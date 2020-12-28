const express = require('express')
const route = express.Router()

const User = require('../../modals/Users')

route.post("/add", (request, response) => {
    const {fullName, email, phone, password} = request.body
    // console.log("from user backend: ", request.body)
    if(!fullName || !email || !phone || !password) return response.status(400).json({message: "Enter all fields"})
    User.findOne({email: email}).then(user => {
        if(user) return response.status(200).json({message: "User already exists"})
    })
    const newUser = new User({
        fullName: fullName,
        email: email,
        phone: phone,
        password: password
    })

    // INSTALL BCRYPTJS TO HASH THE PASSWORD

    // GENERATE A TOKEN WITH JWT TO SEND BACK WITH RESPONSE OBJECT

    newUser.save().then((user) => {
        response.status(200).json(user)
    })
})


module.exports = route