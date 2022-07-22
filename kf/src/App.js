import './App.css';
import Home from './Pages/Home';
import Menu from './Pages/Menu';
import Login from './Pages/Login';
import Otp from './Pages/Otp/otp';
import Name from './Pages/Name';


// http://localhost:3000/api/Items
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/login" element={<Login />} />
          <Route path="/otp" element={<Otp />} />
          <Route path='/name' element={<Name/> }/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
