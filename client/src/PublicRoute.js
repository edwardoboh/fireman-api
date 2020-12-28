import React from 'react'
import {
    Route,
    Redirect
} from 'react-router-dom'

import {UserContext} from './context/UserContext'

const PublicRoute = (props) => {
    const {children, ...rest} = props

    // const {initialUser, UserReducer} = useContext(UserContext)
    // const [userState, dispatch] = useReducer(UserReducer, initialUser)
    // const [userState, dispatch] = useContext(UserContext)
    // const {isAuthenticated} = userState.user

    const isAuthenticated = localStorage.getItem("userAuthenticated")

    return(
        <Route 
            {...rest}
            render={
                () => {
                    return isAuthenticated !== "true" ? children : <Redirect 
                        to={{pathname: "/dashboard"}}    
                    />
                }
            }
        />
    )
}

export default PublicRoute