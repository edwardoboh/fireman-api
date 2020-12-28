const mongoose = require('mongoose')
const Schema = mongoose.Schema

const DeviceSchema = new Schema({
    deviceName: {
        type: String,
        required: true
    },
    longitude: {
        type: String,
        require: true
    },
    latitude : {
        type: String,
        required: true
    },
    address: {
        type: String
    },
    deviceState: {
        type: Boolean
    },
    ownerId: {
        type: String,
        required: true
    },
    ownerName: {
        type: String,
        required: true
    },
    dateAdded: {
        type: Date,
        default: Date.now()
    }
})

module.exports = Device = mongoose.model("device", DeviceSchema)