import API from "./API"
let {host,path} = API
let createHost = async (Task) =>{
    // let Task = {
    //     ID:"",
    //     userID:"",
    //     Canteen:"",
    //     Store:"",
    //     MaxTasks:"",
    //     CurrentTasks:"",
    //     Available:"",
    //     TotalPrice:"",
    // }

    
    let req = await fetch(host.concat(path.createHost),{
        method: "POST",
        headers:{
            "Content-Type": "application/json"
        },
        body:Task
    })
    if (req.ok){
        //do something
    }
}
let closeHost = async (TaskID) => {
    let req = await fetch(host.concat(path.closeHost),{
        method: "POST",
        headers:{
            "Content-Type": "application/json"
        },
        body:TaskID
    })
    if (req.ok){
        //do something
    }
}

let acceptMenu = async (TaskID,MenuID) => {
    let req = await fetch(host.concat(path.acceptMenu),{
        method: "POST",
        headers:{
            "Content-Type": "application/json"
        },
        body:{TaskID,MenuID}
    })
    if (req.ok){
        //do something
    }
}

export {
    createHost,
    closeHost,
    acceptMenu
}
