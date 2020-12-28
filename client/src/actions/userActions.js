import axios from 'axios'
import {types} from './actionTypes'

const {
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    REGISTER_SUCCESS, 
    REGISTER_FAIL,
    AUTH_ERROR,
    USER_LOADED
} = types

export const loginUser = ({email, password}, dispatch) => {
    const body = {email, password}
    axios.post("/auth/login", body).then((user) => {
        // console.log(user.data)
        const userData = {
            _id: user.data._id,
            fullName: user.data.fullName,
            phone: user.data.phone,
            email: user.data.email
        }
        dispatch({
            type: LOGIN_SUCCESS,
            payload: userData
        })
        // console.log("login success")
    }).catch((err) => {
        dispatch({
            type: LOGIN_FAIL
        })
        // console.log("login fail")
    })
}

export const registerUser = ({fullName, email, password, phone}, dispatch) => {
    const body = {fullName, email, password, phone}
    axios.post("/user/add", body).then((user) => {
        const userData = {
            _id: user.data._id,
            fullName: user.data.fullName,
            phone: user.data.phone,
            email: user.data.email
        }
        // console.log("register action: ", userData)
        dispatch({
            type: REGISTER_SUCCESS,
            payload: userData
        })
        // console.log("register success")
    }).catch((err) => {
        dispatch({
            type: REGISTER_FAIL
        })
        // console.log("register fail")
    })
}

export const loadUser = (id, dispatch) => {
    axios.get(`/auth/load/${id}`).then((user) => {
        const userData = {
            _id: user.data._id,
            fullName: user.data.fullName,
            phone: user.data.phone,
            email: user.data.email
        }
        dispatch({
            type: USER_LOADED,
            payload: userData
        })
        // console.log("load success")
    }).catch((err) => {
        dispatch({
            type: AUTH_ERROR
        })
        // console.log("login fail")
    })
}

export const verifyUser = (dispatch) => {
    axios.get("/auth/get").then((id) => {
        dispatch({
            type: USER_LOADED,
            payload: id
        })
        // console.log("load success")
    }).catch((err) => {
        dispatch({
            type: AUTH_ERROR
        })
        // console.log("login fail")
    })
}