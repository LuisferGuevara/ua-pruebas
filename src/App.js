import './App.css';
import { Login } from './ui/pages/Login/Login';
import Register from './ui/pages/Register/RegisterForm';

function App() {
  return (
    <div className="app">
    <h1>AQUI VA LA CABECERA</h1>
    <Login/>
    <h1>AQUI VA el FOOTER</h1>
    <Register/>
    </div>
  );
}

export default App;
