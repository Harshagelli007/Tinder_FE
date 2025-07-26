import './App.css';
import NavBar from './components/navBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Auth/Login';
import Body from './components/body';
import {Provider} from 'react-redux';
import appStore from './Utils/appStore';
import Feed from './components/Users/Feed';
import {Toaster} from 'react-hot-toast';

function App() {

  return (
    <>
  <Provider store={appStore}>
     <Toaster position="top-right" reverseOrder={false} />
   <BrowserRouter basename='/'>
    <Routes>
      <Route path='/' element={<Body/>}>
         <Route path="/login" element={<Login/>}></Route>
         <Route path='/feed' element={<Feed/>}></Route>
      </Route>
    </Routes>
   </BrowserRouter>
  </Provider>
    </>
  )
}

export default App
