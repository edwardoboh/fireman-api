const express = require('express')
const router = express.Router()

// Import Device Database Modal
const Device = require('../../modals/Devices')

// **************************************HARDWARE DEVICE API

// Get request to get Alerted Devices
router.get('/fire', (request, response) => {
    Device.find({deviceState: true}).then((devices) => {
        response.json(devices)
    })
})

// GET Request to change the state of a device
// EXAMPLE URL FORMAT:      http://localhost:5500/device/update/?id=5fe6660acaf82f246c0ed1b3&state=true
router.get('/update', (request, response) => {
    // Device.findById(request.query.idVal).then(
        Device.findOneAndUpdate({_id:request.query.id}, {deviceState: request.query.state})
        // .then(dataUpdate => response.json({dataUpdate}))
        .then((data) => {
            // console.log(data)
            response.json({message: "Update Successful"})
        })
    // )
})


// **************************************APPLICATION API

// Get request to get all devices
router.get('/:id', (request, response) => {
    const admin = "5fea475885ec7135da54d411"
    if(request.params.id === admin){
        Device.find().then(devices => response.json(devices))
        .catch(e => console.log("No devices found"))
    }else{
        Device.find({ownerId: request.params.id}).then(devices => response.json(devices))
        .catch(e => console.log("No devices found"))
    }
})

// Post Request to Create new device
router.post('/', (request, response) => {
    const newDevice = new Device({
        deviceName: request.body.deviceName,
        ownerId: request.body.ownerId, //GET the user id and enter it here.
        ownerName: request.body.ownerName,
        ownerPhone: request.body.ownerPhone,
        longitude: request.body.longitude,
        latitude: request.body.latitude,
        address: request.body.address,
        deviceState: request.body.deviceState
    })

    newDevice.save().then((data) => {
        // console.log("New Device Added to database")
        response.json({payload:data, message: "New Device Successfully Added"})
    }).catch(e => console.log("Unable to add new device"))
})

router.delete('/:id', (request, response) => {
    Device.deleteOne({_id: request.params.id}).then(
        () => {
            // console.log("Delete Succesful")
            response.json({message: "Delete Successful"})
        }
    ).catch(e => console.log("Unable to delete device"))
})


module.exports = router