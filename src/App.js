import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import {BrowserRouter, Route, Routes, Link, Navigate} from 'react-router-dom'

function App() {

  const user = true;

  return (
    <BrowserRouter>
    <div className="App">
      <Navbar user={user}/>
      <Routes>
        <Route path='/' element={user?<Home/> :<Navigate to={"/login"} /> } />
        <Route path='/login' element={user? <Navigate to={"/"} />:<Login/>} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
