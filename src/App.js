import './App.css';
import Header from './components/Header';
import {Route,Routes} from 'react-router-dom';
import Profile from './components/Profile';
import Login from './components/Login';
import Register from './components/Register';
import HomePage from './components/HomePage';

function App() {
  return (
    <div className="App">
  {
       localStorage.getItem('Username') ? <Header /> : <></>
  }
      <Routes>
      <Route path = '/' element = {<HomePage />} />
      <Route path = '/profile' element = {<Profile />} />
      <Route path = '/register' element = {<Register />} />
      <Route path = '/login' element = {<Login/>} />
     </Routes>
    </div>
  );
}

export default App;
