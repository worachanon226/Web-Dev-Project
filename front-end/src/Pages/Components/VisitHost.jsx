import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Task from "../../Controller/test/Task.json";
const VisitHost = () => {
  let [menu, setMenu] = useState(Task.menus);
  let { hostId } = useParams();
  // let res = fetch(endpoint.concat(path.getTask), {
  //   method: "GET",
  //   body: {id:hostId}
  // }).then((response) => response.json()).then(res => setMenu(res.menus))
  
  return (
    <div>
      {menu.map((e) => (
        <div>{e.Name}+{e.Price}</div>
      ))}
    </div>
  );
};

export default VisitHost;
