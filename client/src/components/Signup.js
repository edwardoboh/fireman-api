import React, { useState, useContext, useEffect } from 'react'
import {
    Form,
    FormGroup,
    Label,
    Input,
    Button
} from 'reactstrap'

import {useHistory} from 'react-router-dom'
import {UserContext} from '../context/UserContext'
import {registerUser} from '../actions/userActions'


const Signup = (props) => {

        const history = useHistory()
        // const {initialUser, UserReducer} = useContext(UserContext)
        // const [state, dispatch] = useReducer(UserReducer, initialUser)
        const {userState, dispatch} = useContext(UserContext)

        // Form States and Actions
        const [fullName, setFullName] = useState("")
        const [email, setEmail] = useState("")
        const [phone, setPhone] = useState("")
        const [password, setPassword] = useState("")

        const {toggleModal} = props
        const signup = (e) => {
            e.preventDefault()
            registerUser({fullName, email, phone, password}, dispatch)
        }

        useEffect(() => {
            if(userState.isAuthenticated){
                history.push("/dashboard")
                toggleModal()
                // console.log("SignUp Successful")
            }else{
                // console.log("SignUp Failed")
            }
        })

    return(
        <div>
            <Form onSubmit={signup}>
                <FormGroup>
                    <Label for="name">Full Name</Label>
                    <Input type="text" name="name" placeholder="Enter your full name" id="name" value={fullName} onChange={(e)=>setFullName(e.target.value)}/>
                </FormGroup>
                <FormGroup>
                    <Label for="email">Email</Label>
                    <Input type="email" name="email" placeholder="Enter a valid Email Address" id="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                </FormGroup>
                <FormGroup>
                    <Label for="phone">Phone No.</Label>
                    <Input type="phone" name="phone" id="phone" placeholder="Mobile number" value={phone} onChange={(e)=>setPhone(e.target.value)}/>
                </FormGroup>
                <FormGroup>
                    <Label for="password">Password</Label>
                    <Input type="password" name="password" id="password" placeholder="Enter a user Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                </FormGroup>
                <Button className="" block>Signup</Button>
            </Form>
        </div>
    )
}

export default Signup