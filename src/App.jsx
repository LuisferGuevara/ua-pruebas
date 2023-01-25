import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Navbar } from './ui/common/Navbar';
import { Login } from './ui/pages/Login/Login';
// import Register from './ui/pages/Register/RegisterForm';
import { Footer } from './ui/common/Footer/Footer';
import { Register } from './ui/pages/Register/Register';
import Home from './ui/pages/Home/Home';
import Courses from './ui/pages/Courses/Courses';
import FreeTests from './ui/pages/FreeTests/FreeTests';
import Shop from './ui/pages/Shop/Shop';
import Contact from './ui/pages/Contact/Contact';
import Cart from './ui/pages/Cart/Cart';
import MyAccount from './ui/pages/MyAccount/MyAccount';

function App() {
  return (
    <div className="app">
    <Navbar />
    <Routes>
      <Route index element={<Home />}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path='/courses' element={<Courses />} />
      <Route path='/freetests' element={<FreeTests />} />
      <Route path='/shop' element={<Shop />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/myaccount' element={<MyAccount />} />
    </Routes>
    <Footer/>

    </div>
  );
}

export default App;
