import React from 'react'
import {
    Row,
    Col,
    Alert
} from 'reactstrap'

import SingleDevice from '../SingleDevice'
// import AllDevices from './AllDevices'

function AllAlerts(props){
    const {alertDevices, dispatch} = props
    return(
        <div className="container mt-4">
                <Row>
                    { alertDevices.length ? alertDevices.map(device => (
                            <Col sm="4" key={device._id} className="mt-2 mb-2">
                                    <SingleDevice device={device} dispatch={dispatch} />
                            </Col>
                        )) : <Alert color="primary">No Alerts Devices</Alert>
                    }
                </Row>
        </div>
    )
}

export default AllAlerts