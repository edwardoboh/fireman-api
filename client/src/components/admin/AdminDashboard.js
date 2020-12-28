import React, {useContext, useEffect} from 'react'
// import {
//     TabContent,
//     TabPane,
//     Nav,
//     NavItem,
//     NavLink,
//     Row,
//     Col
// } from 'reactstrap'

import {Tabs, Tab} from 'react-bootstrap'
// import classnames from 'classnames'

import AllDevices from './AllDevices'
import AllAlerts from './AllAlerts'

import {DeviceContext} from '../../context/DeviceContext'
import {getDevices} from '../../actions/deviceActions'

// import { UserContext } from '../../context/UserContext'

// import {localData} from '../../store'

function AdminDashboard(){

    // DEVICE DATA
    // const {DeviceReducer, initialState} = useContext(DeviceContext)
    // const [allDevices, dispatch] = useReducer(DeviceReducer, initialState.Devices)
    const [allDevices, dispatch] = useContext(DeviceContext)

    // USER DATA
    // const {UserReducer, initialUser} = useContext(UserContext)
    // const [userState, userDispatch] = useReducer(UserReducer, initialUser)
    
    // const userData = useContext(UserContext)
    // const userState = userData.userState
    // const userDispatch = userData.dispatch

    // const {user} = userState
    // console.log("user in Admin Dashboard", userState)

    const jsonData = localStorage.getItem("userData")
    const localData = JSON.parse(jsonData)

    const user = localData


    useEffect(() => {
        // if(user.isAuthenticated){
            getDevices({dispatch: dispatch, id: user._id })
        // }
    })
    
    // Tab State and Event
    // const [activeTab, setActiveTab] = useState("1")
    // const toggle = (tab) => {
    //     if (activeTab !== tab) setActiveTab(tab)
    // }
    return(
        <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
            <Tab eventKey="profile" title="Devices">
                <AllDevices allDevices={allDevices} dispatch={dispatch} user={user} />
            </Tab>
            <Tab eventKey="home" title="Alerts">
                <AllAlerts alertDevices={allDevices.length ? allDevices.filter(device => device.deviceState) : []} dispatch={dispatch} />
            </Tab>
        </Tabs>
    )       
}

export default AdminDashboard;