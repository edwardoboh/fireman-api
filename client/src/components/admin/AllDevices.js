import React, {useState} from 'react'

import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    FormGroup,
    Form,
    Input,
    Label,
    Col,
    Row,
    Alert
} from 'reactstrap'

import SingleDevice from '../SingleDevice'
import {addDevice} from '../../actions/deviceActions'

const AllDevices = (props) => {
    // Modal States and event functions
    const [modal, setModal] = useState(false)
    const toggle = () => setModal(!modal)

    // Form value states
    const [name, setName] = useState("")
    const [address, setAddress] = useState("")
    const [longitude, setLongitude] = useState("")
    const [latitude, setLatitude] = useState("")
    const [fire, setFire] = useState(false)

    const clearAllStates = () => {
        setName("")
        setAddress("")
        setLongitude("")
        setLatitude("")
        setFire(false)
    }

    const {allDevices, dispatch, user} = props
    
    const addNewDevice = () => {
        if(name && address && longitude && latitude ){
            // dispatch({
            //     type: "create",
            //     payload: {
            //         deviceName: name,
            //         longitude: longitude,
            //         latitude: latitude,
            //         address: address,
            //         deviceState: state,
            //         ownerId: "212343221"
            //     }
            // })
            const newDevice = {
                        deviceName: name,
                        longitude: longitude,
                        latitude: latitude,
                        address: address,
                        deviceState: fire,
                        ownerId: user._id,
                        ownerName: user.fullName,
                        ownerPhone: user.phone
                    }
            // console.log(newDevice)
            addDevice({device: newDevice, dispatch})
            clearAllStates()
            toggle()
        }
    }
    // console.log(allDevices)
    return (
        <div className="container jumbo">
            <Button color="primary" onClick={toggle} className="mb-3">
            {/* <span className="material-icons">add</span> */}
            Add Device
            </Button>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>
                    Add a new Device
                </ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup>
                            <Label for="name">Name</Label>
                            <Input type="text" name="name" placeholder="Enter a name for device" id="name" value={name} onChange={(e)=>setName(e.target.value)}/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="address">Address</Label>
                            <Input type="text" name="address" placeholder="Location address of device" id="address" value={address} onChange={(e)=>setAddress(e.target.value)}/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="longitude">Longitude</Label>
                            <Input type="text" name="longitude" id="longitude" placeholder="Logitude of location" value={longitude} onChange={(e)=>setLongitude(e.target.value)}/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="latitude">Latitude</Label>
                            <Input type="text" name="latitude" id="latitutde" placeholder="Latitude of location" value={latitude} onChange={(e)=>setLatitude(e.target.value)}/>
                        </FormGroup>
                        <FormGroup className="">
                            <Label for="state">state</Label>
                            <Input type="select" name="select" id="state" onChange={(e) => {setFire(e.target.value === "1" ? true : false)}}>
                                <option value="0">0</option>
                                <option value="1">1</option>
                            </Input>
                        </FormGroup>
                        <Button className="" block onClick={addNewDevice}>Add</Button>
                    </Form>
                </ModalBody>
            </Modal>

            <div>
                <Row>
                    {
                        allDevices.length ? allDevices.map(device => {
                        return <Col key={device._id} sm="4" className="mt-2 mb-2">
                            <SingleDevice device={device} dispatch={dispatch} />
                        </Col>
                        })
                        : <Alert color="primary">No Device Added Yet</Alert>
                    }
                </Row>
            </div>
        </div>
    )
}

export default AllDevices;