import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Navbar } from './ui/common/Navbar';
import { Login } from './ui/pages/Login/Login';
// import Register from './ui/pages/Register/RegisterForm';
import { Footer } from './ui/common/Footer/Footer';
import { Registro } from './ui/pages/Register/Register';
import Home from './ui/pages/Home/Home';

function App() {
  return (
    <div className="app">
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Registro/>}/>
    </Routes>
    <Footer/>

    </div>
  );
}

export default App;
