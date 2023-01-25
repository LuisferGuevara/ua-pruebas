import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Navbar } from './ui/common/Navbar';
import { Login } from './ui/pages/Login/Login';
// import Register from './ui/pages/Register/RegisterForm';
import { Footer } from './ui/common/Footer/Footer';
import { Registro } from './ui/pages/Register/Register';

function App() {
  return (
    <div className="app">
    <Navbar />
    <Routes>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Registro/>}/>
    </Routes>
    {/* <Login/> */}
    <Footer/>
    {/* <Register/> */}
    </div>
  );
}

export default App;
