import NavBar from "./NavBar";
import { Outlet, useNavigate } from "react-router-dom";
import Footer from "./Footer";
// import appStore from "../Utils/appStore";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { baseUrl } from "../environment/DEV";
import { setUser } from "../Utils/userSlice";
import toast from "react-hot-toast";
import { useEffect } from "react";

const Body = ()=>{
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector((state)=> state.user);
    const getUserDetails = async ()=>{
        try{
        const response = await axios.get(baseUrl+"/getUser",{withCredentials:true});
        if(response.data){
            dispatch(setUser(response.data));
        }
        }catch(err){
            if(err.response && err.response.status === 401){
                navigate('/login');
                toast.error('please login to continue');
                return;
            }
            toast.error("failed to fetch user details, please try again");
        }
    }

    useEffect(()=>{
        if(!user){
            getUserDetails();
        }
    },[])
    return (
        <div className="flex flex-col min-h-screen ">
        <NavBar></NavBar>
        <div className="flex-grow my-8">
            <Outlet></Outlet>
        </div>
        <Footer></Footer>
        </div>
    )
}


export default Body;