import axios from "axios";
import { setNewConnections } from "../../Utils/newConnections";
import { baseUrl } from "../../environment/DEV";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import ConnectionCard from "./ConnectionsCard";
import toast from "react-hot-toast";



const Connectionsreceived = ()=>{
    const dispatch = useDispatch();
    const newRequestsList = useSelector((state)=> state.newConnections);
    const getNewConnectionList = async ()=>{
        try{
            const response = await axios.get(baseUrl+'/newConnections',{withCredentials:true});
            dispatch(setNewConnections(response.data));
        }catch(err){
            toast.error(err);
        }
    }

    useEffect(()=>{
        getNewConnectionList();
    },[]);
    if(newRequestsList.length === 0) return <div>No new connections,Great things will take time</div>
    return (
        <div>
            <ul className="list bg-base-50 rounded-box shadow-md max-w-md mx-auto p-4 ">
                <li className="pb-2 text-xs opacity-60 tracking-wide">New Connections</li>
                {newRequestsList.map((item) => (
                    <ConnectionCard key={item._id} data={item.formUserId} showButton={true} />
                ))}
            </ul>
        </div>
    )
}


export default Connectionsreceived;