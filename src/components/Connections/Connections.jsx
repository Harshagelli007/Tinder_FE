import axios from "axios";
import { useEffect, useState } from "react";
import { baseUrl } from "../../environment/DEV";
import { setConnections } from "../../Utils/connections";
import { useDispatch, useSelector } from "react-redux";
import ConnectionCard from "./ConnectionsCard";




const Connections = ()=>{
    // const [connectionList,setConnectionList] = useEffect([]);
    const connectionList = useSelector((state)=>state.connections);
    const dispatch = useDispatch();
    const getConnections = async ()=>{
     const response =   await axios.get(baseUrl+'/myConnections',{withCredentials:true});
    //  setConnectionList(response);
     dispatch(setConnections(response.data));
    }

    useEffect(()=>{
        getConnections();
    },[])
    if(connectionList.length == 0) return <div>No Connections,Build your connection list</div>
    return (
       <div>
  <ul className="list bg-base-50 rounded-box shadow-md max-w-md mx-auto p-4 ">
    <li className="pb-2 text-xs opacity-60 tracking-wide">My Connections</li>
    {connectionList.map((item) => (
      <ConnectionCard key={item._id} data={item.user} showButton={false} />
    ))}
  </ul>
</div>
    )
};

export default Connections;