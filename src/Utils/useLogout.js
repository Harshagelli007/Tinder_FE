import axios from "axios"
import { baseUrl } from "../environment/DEV"; 
import { removeUser } from "./userSlice"; 
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const useLogout = ()=>{
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const logout = async()=>{
        try{
            await axios.get(baseUrl+"/logout",{withCredentials:true})
            dispatch(removeUser());
        }catch(err){
        }
     }
    return logout;
     
}

export default useLogout;