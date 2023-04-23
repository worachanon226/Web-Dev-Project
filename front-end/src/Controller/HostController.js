import API from "./API"
let {endpoint,path} = API
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
let getTasks = async () =>{
    let res = await fetch(endpoint.concat(path.getTasks), {
        method: "GET",
      }).then(response =>response.json())
    return res.
    }

let handleTask = async (data, callback) => {
    let res = await fetch(endpoint.concat(path.createTask), {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      //TODO:เปลี่ยน UserId ให้เอาจาก Context
      body: { id:data.id, userId:"1",canteen:data.canteen },
    }).then(response =>response.json())
    if (res.statusCode === 200){
      let resForTask = await fetch(endpoint.concat(path.getTasks), {
        method: "GET",
      }).then(response =>response.json())
    setTask(resForTask);
    }
  };

export {
    createHost,
    closeHost,
    acceptMenu
}
