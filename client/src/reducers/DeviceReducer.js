import {types} from '../actions/actionTypes'

// const defaultState = [{}]
const {ADD, REMOVE, GET} = types

const DeviceReducer = (state, action) => {
    switch(action.type){
        case ADD:
            return [
                ...state, action.payload
            ]
        case REMOVE:
                // const newArray = state.filter((device) => device.deviceName !== action.payload)
                // console.log(newArray)
            return [
                // ...newArray
                ...state.filter((device) => device.deviceName !== action.payload)
            ]
        case GET:
            return [
                ...action.payload
            ]
        default:
            return [
                ...state
            ]
    }
}

export default DeviceReducer;