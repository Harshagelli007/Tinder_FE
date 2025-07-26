import { useState } from "react";
import axios from "axios";
import { setUser } from "../../Utils/userSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { baseUrl } from "../../environment/DEV";
import toast from "react-hot-toast";

const Login = ()=>{
   const [userName, setUserName] = useState("");
   const [password, setPassword] = useState("");
   const dispatch = useDispatch();
   const navigate = useNavigate();

   const handleLogin = async ()=>{
     try{
        const response = await axios.post(`${baseUrl}/login`,{
            emailId: userName,
            password: password
        },
    {withCredentials: true});
        dispatch(setUser(response.data));
        toast.success("Welecome "+response.data.firstName);
        navigate("/feed")
     }catch(err){
        toast.error('Login Failed, please provide valid credentials')
     }
   }
    return (
        <div className="flex flex-col items-center justify-center h-screen gap-4">
            <div className="flex justify-center items-center h-screen">
                <h1>User Name :</h1>
                <input type="text" value={userName} onChange={(e)=>{setUserName(e.target.value)}} placeholder="test@gmail.com"></input>
            </div>
            <div className="flex justify-center items-center h-screen">
                <h1>Password :</h1>
                <input type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder="type your password"/>
            </div>
            <div className="flex justify-center items-center h-screen">
                <button onClick={handleLogin}>Login</button>
                <button>SignUp</button>
            </div>
        </div>
    )
}

export default Login;