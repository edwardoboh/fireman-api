import React, { useState } from 'react'
import {
    Button,
    Jumbotron,
    Modal,
    ModalHeader,
    ModalBody,
} from 'reactstrap'

// import {
//     BrowserRouter as Router,
//     Route,
//     Switch,
//     Link
// } from 'react-router-dom'

import Login from './Login'
import Signup from './Signup'

// import {UserContext} from '../context/UserContext'
// import {types} from '../actions/actionTypes'

const Index = () => {
    const [LoginIsOpen, setLoginOpen] = useState(false)
    const [SignupIsOpen, setSignupOpen] = useState(false)
    const toggleLogin = () => setLoginOpen(!LoginIsOpen)
    const toggleSignup = () => setSignupOpen(!SignupIsOpen)

    // const {initialUser, UserReducer} = useContext(UserContext)
    // const [userState, dispatch] = useReducer(UserReducer, initialUser)
    
    //

    return(
        <div className="container jumbo">

            <Modal isOpen={LoginIsOpen} toggle={toggleLogin}>
                <ModalHeader toggle={toggleLogin}>Login</ModalHeader>
                <ModalBody>
                    <Login toggleModal={toggleLogin} />
                </ModalBody>
            </Modal>

            <Modal isOpen={SignupIsOpen} toggle={toggleSignup}>
                <ModalHeader toggle={toggleSignup}>Signup</ModalHeader>
                <ModalBody>
                    <Signup toggleModal={toggleSignup}/>
                </ModalBody>
            </Modal>

            <Jumbotron className="container">
                <h1 className="display-3">FireMan</h1>
                <p className="lead">Welcome to the FireMan Console for both Admin and Device Users</p>
                <hr className="my-2" />
                <p>Click the button below to login to your account to manage your devices or login to the Admin Console</p>
                <p className="lead">
                <Button color="primary" onClick={toggleLogin}>Login</Button>
                <Button color="info" className="ml-3" onClick={toggleSignup}>Signup</Button>
                </p>
            </Jumbotron>
        </div>
    )
}

export default Index