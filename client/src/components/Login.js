import React, { useContext, useEffect, useState } from 'react'
import {
    Form,
    FormGroup,
    Label,
    Input,
    Button
} from 'reactstrap'
import {UserContext} from '../context/UserContext'
import {loginUser} from '../actions/userActions'

import {useHistory} from 'react-router-dom'

const Login = (props) => {
    const history = useHistory()
    
    // const {initialUser, UserReducer} = useContext(UserContext)
    // const [state, dispatch] = useReducer(UserReducer, initialUser)
    const {userState, dispatch} = useContext(UserContext)
    // Form States and Actions
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const {toggleModal} = props
    const login = (e) => {
        e.preventDefault()
        loginUser({email, password}, dispatch)
        // return (
            //     <Redirect to="/admin" />
            // )
    }

    useEffect(()=>{
        if(userState.isAuthenticated){
            history.push("/dashboard")
            toggleModal()
            // console.log(userState)
        }else{
            console.log("Authentication Failed")
        }
    })

    return(
        <div>
            <Form onSubmit={login}>
                <FormGroup>
                    <Label for="email">Email</Label>
                    <Input type="email" name="email" placeholder="Enter Email Address" id="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                </FormGroup>
                <FormGroup>
                    <Label for="password">Password</Label>
                    <Input type="password" name="password" id="password" placeholder="Enter Your Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                </FormGroup>
                <Button className="" block>Login</Button>
            </Form>
        </div>
    )
}

export default Login