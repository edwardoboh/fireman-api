// export const initialState = {
//     Devices: [
    //     {
    //         deviceName: "Meter:01",
    //         longitude: "3243",
    //         latitude: "1224",
    //         address: "simply dummy text of the printing and typesetting industry.",
    //         deviceState: true,
    //         ownerId: "212343221"
    //     },
    //     {
    //         deviceName: "Motion:31",
    //         longitude: "3243",
    //         latitude: "1224",
    //         address: "simply dummy text of the printing and typesetting industry.",
    //         deviceState: false,
    //         ownerId: "212343221"
    //     },
    //     {
    //         deviceName: "temp:35",
    //         longitude: "3243",
    //         latitude: "1224",
    //         address: "simply dummy text of the printing and typesetting industry.",
    //         deviceState: false,
    //         ownerId: "212343221"
    //     },
    //     {
    //         deviceName: "smoke:24",
    //         longitude: "3243",
    //         latitude: "1224",
    //         address: "simply dummy text of the printing and typesetting industry.",
    //         deviceState: true,
    //         ownerId: "212343221"
    //     },
    //     {
    //         deviceName: "water:11",
    //         longitude: "3243",
    //         latitude: "1224",
    //         address: "simply dummy text of the printing and typesetting industry.",
    //         deviceState: false,
    //         ownerId: "212343221"
    //     },
//     ],
//     isLoading: false
// }

export const initialError = {
    message: "",
    status: "",
    id: ""
}


export async function localData(){
    const jsonData = await localStorage.getItem("userData")
    const theData = await JSON.parse(jsonData)
    return theData
}