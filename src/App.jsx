import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Auth/Login';
import Body from './components/Body';
import {Provider} from 'react-redux';
import appStore from './Utils/appStore';
import Feed from './components/Users/Feed';
import {Toaster} from 'react-hot-toast';
import UpdateProfile from './components/Auth/UpdateProfile';
import Connections from './components/Connections/Connections';
import Connectionsreceived from './components/Connections/ConnectionsReceived.jsx';
import Profile from './components/Users/Profile.jsx';

function App() {

  return (
    <>
  <Provider store={appStore}>
     <Toaster position="top-right" reverseOrder={false} />
   <BrowserRouter basename='/'>
    <Routes>
      <Route path='/' element={<Login/>}>
         <Route path="/login" element={<Login/>}></Route>
         <Route path='/feed' element={<Feed/>}></Route>
         <Route path='/updatePeofile' element={<UpdateProfile/>}></Route>
         <Route path='/requests' element={<UpdateProfile/>}></Route>
         <Route path='/myConnections' element={<Connections/>}></Route>
         <Route path='/newConnections' element={<Connectionsreceived/>}></Route>
         <Route path='/profile' element={<Profile/>}></Route>
      </Route>
    </Routes>
   </BrowserRouter>
  </Provider>
    </>
  )
}

export default App
