import React, {createContext, useReducer} from 'react'
import UserReducer from '../reducers/UserReducer'

export const UserContext = createContext()

const initialUser = {
    user: {},
    isAuthenticated: false
}

function UserProvider({children}) {
    const [userState, dispatch] = useReducer(UserReducer, initialUser)
    return(
        <UserContext.Provider value={{userState, dispatch}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider

