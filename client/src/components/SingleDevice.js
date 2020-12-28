import React from 'react'
import {
    Card,
    CardLink,
    CardTitle,
    CardText,
    Badge,
    Button
} from 'reactstrap'

// import {
//     Switch,
//     BrowserRouter as Router,
//     Route,
//     useRouteMatch
// } from 'react-router-dom'

import {deleteDevice} from '../actions/deviceActions'
// import {loadUser} from '../actions/userActions'

import MoreDetails from './MoreDetails'

function SingleDevice(props) {
    const {deviceName, longitude, latitude, ownerId, deviceState, _id, address, ownerName} = props.device
    
    // const {initialUser, UserReducer} = useContext(UserContext)
    // const [userState, userDispatch] = useReducer(UserReducer, initialUser)

    // useEffect(() => {
    //     loadUser(ownerId, userDispatch)
    // }, [])

    const jsonData = localStorage.getItem("userData")
    const localData = JSON.parse(jsonData)
    const {fullName, email, phone} = localData


    const {dispatch} = props

    const deleteItem = () => {
        // dispatch({
        //     type: "delete",
        //     payload: deviceName
        // })
        deleteDevice(_id, dispatch)
    }

    // const {path, url} = useRouteMatch()

    const setMoreDetails = () => {
        const moreDetails = {deviceName, longitude, latitude, ownerId, deviceState, _id, address, ownerName}
        const moreDetalsJson = JSON.stringify(moreDetails)
        localStorage.setItem("moreDetails", moreDetalsJson)
    }

    return (       
        
        <Card body>
            <Button color="secondary" className="ml-auto" onClick={deleteItem} pill>X</Button>
            <CardTitle tag="h5">
                {deviceName}
                <Badge color={ deviceState? "danger" : "success"} className="ml-2">{deviceState ? 1 : 0}</Badge>
            </CardTitle>
            <span><CardText>Owner: {ownerName}</CardText></span>
            <span><CardText>Phone: {phone}</CardText></span>
            <span><CardText>Address: {address}</CardText></span>
            <CardLink href={`/more`} className="ml-auto" onClick={setMoreDetails}>Show More</CardLink>
        </Card>
    )
}

export default SingleDevice