import './App.css';
import Header from './components/Header';
import {Route,Routes} from 'react-router-dom';
import Profile from './components/Profile';
import Login from './components/Login';
import Register from './components/Register';
import HomePage from './components/HomePage';
import { useEffect, useState } from 'react';

function App() {
  const [auth,setAuth] = useState(false)

  useEffect(() => {
    localStorage.getItem('Username')&& setAuth(true) 

  },[])
  return (
    <div className="App">
  
  {
       auth ? <Header /> : <></>
  }
      <Routes>
      <Route path = '/' element = {auth ? <HomePage /> : <Register />} />
      <Route path = '/profile' element = {<Profile />} />
      <Route path = '/register' index element = {<Register />} />
      <Route path = '/login' element = {<Login/>} />
     </Routes>
    </div>
  );
}

export default App;
