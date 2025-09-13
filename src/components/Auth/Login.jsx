import { useState } from "react";
import axios from "axios";
import { setUser } from "../../Utils/userSlice";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { baseUrl } from "../../environment/DEV";
import toast from "react-hot-toast";

const Login = () => {
  const [emailId, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoginPage, setIsloginPage] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [photoUrl, setPhotoUrl] = useState('');
  const [age, setAge] = useState('');
  const [discription, setDiscription] = useState('');


  const handleLogin = async () => {
    try {
      const response = await axios.post(`${baseUrl}/login`, {
        emailId: emailId,
        password: password
      },
        { withCredentials: true });
      dispatch(setUser(response.data));
      toast.success("Welecome " + response.data.firstName);
      navigate("/feed")
    } catch (err) {
      toast.error('Login Failed, please provide valid credentials')
    }
  }

  const handleRegistration = ()=>{
    setIsloginPage(false);
    setEmail('');
    setPassword('');
  }

  const registerUser = async()=>{
    if(!firstName && !emailId && !password){
      toast.error('Please provide required feilds');
    }
    const data = {
      firstName,
      lastName,
      emailId,
      discription,
      age,
      photoUrl,
      password
    }
    
    try{
     const response = await axios.post(baseUrl+'/signup',data,{withCredentials:true});
     if(response.data){
      toast.success(response.data);
      setIsloginPage(true);
      setEmail('');
    setPassword('');
     }
    }catch{
      toast.error('Something went wrong please try again');
    }
     

  }
 
  return (
    <>
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            alt="Your Company"
            src="/assets/logo.png"
            className="mx-auto h-20 w-auto"
          />
          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
            {isLoginPage ? 'Sign in to your account' : 'Your new friends are waiting please register to meet them with meetup'}
          </h2>
        </div>


        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm space-y-6">

          {!isLoginPage && (
            <>
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="firstName" className="block text-sm/6 font-medium text-gray-900">
                    First Name
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    id="firstName"
                    name="firstName"
                    type="firstName"
                    required
                    autoComplete="first-name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="lastName" className="block text-sm/6 font-medium text-gray-900">
                    last Name
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    id="lastName"
                    name="lastName"
                    type="lastName"
                    required
                    autoComplete="last-name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  />
                </div>
              </div>
            </>
          )}

          <div>
            <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                value={emailId}
                onChange={(e) => setEmail(e.target.value)}
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
                Password
              </label>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                required
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              />
            </div>
          </div>

          {isLoginPage ?
          (
            <>
            <div>
            <button
              onClick={handleLogin}
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              LOGIN
            </button>
          </div>

          <p className="mt-10 text-center text-sm/6 text-gray-500">
            Not a member?{' '}
            <button onClick={() => handleRegistration()}>
              <Link className="font-semibold text-indigo-600 hover:text-indigo-500">
                Register Now
              </Link>
            </button>
          </p>


          </>
          )
          :
          (
            <>
          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="profilePhoto" className="block text-sm/6 font-medium text-gray-900">
                Profile url
              </label>
            </div>
            <div className="mt-2">
              <input
                id="profilePhoto"
                name="profilePhoto"
                type="profilePhoto"
                required
                autoComplete="photo"
                value={photoUrl}
                onChange={(e) => setPhotoUrl(e.target.value)}
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="age" className="block text-sm/6 font-medium text-gray-900">
                Age
              </label>
            </div>
            <div className="mt-2">
              <input
                id="age"
                name="age"
                type="age"
                required
                autoComplete="age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="discription" className="block text-sm/6 font-medium text-gray-900">
                discription
              </label>
            </div>
            <div className="mt-2">
              <input
                id="discription"
                name="discription"
                type="discription"
                required
                autoComplete="discription"
                value={discription}
                onChange={(e) => setDiscription(e.target.value)}
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              />
            </div>
          </div>


          <button
              onClick={registerUser}
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Register
            </button>
           </>
          )}


          
        </div>
      </div>

    </>
  )
}

export default Login;