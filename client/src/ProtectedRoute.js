import React from 'react'
import {
    Redirect,
    Route
} from 'react-router-dom'

// import {UserContext} from './context/UserContext'

const ProtectedRoute = (props) => {
    const {children, ...rest} = props
    // const {UserReducer, initialUser} = useContext(UserContext)
    // const [userState, dispatch] = useReducer(UserReducer, initialUser)
    // const {userState, dispatch} = useContext(UserContext)
    // const {isAuthenticated} = userState
    const isAuthenticated = localStorage.getItem("userAuthenticated")
    return(
        <Route
            {...rest}
            render = {
                () => {
                    return isAuthenticated === "true" ? children : 
                            <Redirect to={
                                {
                                    pathname: "/"
                                }
                            } />
                }
            }

        />
    )
}

export default ProtectedRoute