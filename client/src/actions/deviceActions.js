
import axios from 'axios'

export const getDevices = ({dispatch, id}) => {
    axios.get(`/device/${id}`).then((data) => {
        dispatch({
            type: "get",
            payload: data.data
        })
        // console.log(data)
    })
}

export const addDevice = ({device, dispatch}) => {
    axios.post('/device', device).then(res => {
        dispatch({
            type: "create",
            payload: res.data.payload
        })
        console.log("from device action", res)
    })
}

export const deleteDevice = (id, dispatch) => {
    axios.delete(`/device/${id}`).then((res) => {
        dispatch({
            type:"delete",
            payload: id
        })
        // console.log(res)
    })
}
export const toggleState = ({id, state}, dispatch) => {
    dispatch({
        type: "update",
        payload: {id, state}
    })
}

