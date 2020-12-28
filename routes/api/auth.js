const express = require('express')
const route = express.Router()
const User = require('../../modals/Users')

route.post("/login", (request, response) => {
    const {email, password} = request.body
    const enteredPassword = password

    if( !email || !password) return response.status(400).json({message: "Enter all fields"})

    User.findOne({email: email}).then(user => {
        console.log(user)
        // if(!user) return response.status(400).json({message: "User does not exist"})
        const {password} = user
        const userPassword = password

        // DECRYPT USER PASSWORD

        // COMPARE ENTERED PASSWORD WITH USER PASSWORD

        // IF CORRECT, GENERATE TOKEN AND SEND BACK WITH RESPONSE OBJECT
        if(enteredPassword === userPassword) return response.status(200).json(user)
        response.status(401).json({message: "Incorrect User credential"})
    })


})

// VERIFY A USER USING THE USER TOKEN IN THE REQUEST HEADER
route.get("/get", (request, response) => {
    response.status(200).json({user: request.user})
})

// GET A USER DATA USING THE USER ID
route.get("/load/:id", (request, response) => {
    User.findById(request.params.id, (err, user)=>{
        if(err) return response.status(400).json({message: "No such user exists"})
        response.status(200).json(user)
    })
})

module.exports = route