import {types} from '../actions/actionTypes'

const {
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    REGISTER_SUCCESS, 
    REGISTER_FAIL,
    AUTH_ERROR,
    USER_LOADED,
    LOGOUT_SUCCESS
} = types

const UserReducer = (state, action) => {
    switch(action.type){
        case LOGIN_SUCCESS:
        case REGISTER_SUCCESS:
        case USER_LOADED:
            localStorage.setItem("userAuthenticated", "true")
            localStorage.setItem("userData", JSON.stringify(action.payload))
            return {
                user: action.payload,
                isAuthenticated: true
            }
        case LOGIN_FAIL:
        case REGISTER_FAIL:
        case AUTH_ERROR:
        case LOGOUT_SUCCESS:
            localStorage.clear()
            return {
                user : {},
                isAuthenticated: false
            }            
        default:
            return {
                ...state
            }
    }
}

export default UserReducer