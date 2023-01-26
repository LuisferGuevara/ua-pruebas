import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Navbar } from './ui/common/Navbar';
import { Login } from './ui/pages/User/Auth/Login/Login';
import { Footer } from './ui/common/Footer/Footer';
import { Register } from './ui/pages/User/Auth/Register/Register';
import Home from './ui/pages/Home/Home';
import Courses from './ui/pages/Courses/Courses';
import FreeTests from './ui/pages/FreeTests/FreeTests';
import Shop from './ui/pages/Shop/Shop';
import Contact from './ui/pages/Contact/Contact';
import Cart from './ui/pages/Cart/Cart';
import MyAccount from './ui/pages/User/MyAccount/MyAccount';
import About from './ui/pages/InfoUA/About';
import Cookies from './ui/pages/InfoUA/Cookies';
import LegalNotice from './ui/pages/InfoUA/LegalNotice';
import Privacy from './ui/pages/InfoUA/LegalNotice';
import TermsConditions from './ui/pages/InfoUA/TermsConditions';

function App() {
  return (
    <div className="app">
    <Navbar />
    <Routes>
      <Route index element={<Home />}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path='/myaccount' element={<MyAccount />} />
      <Route path='/courses' element={<Courses />} />
      <Route path='/freetests' element={<FreeTests />} />
      <Route path='/shop' element={<Shop />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/cart' element={<Cart />} />
      <Route path="/about" element={<About />} />
      <Route path="/cookies" element={<Cookies/>} />
      <Route path="/legalnotice" element={<LegalNotice />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/termsconditions" element={<TermsConditions />} />
    </Routes>
    <Footer/>

    </div>
  );
}

export default App;
