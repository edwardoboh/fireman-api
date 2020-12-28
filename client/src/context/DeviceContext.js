import React, {createContext, useReducer} from 'react'
import DeviceReducer from '../reducers/DeviceReducer'

export const DeviceContext = createContext()

const initialState = []

export const DeviceProvider = ({children}) => {
    return (
        <DeviceContext.Provider value={useReducer(DeviceReducer, initialState)}>
            {children}
        </DeviceContext.Provider>
    )
}