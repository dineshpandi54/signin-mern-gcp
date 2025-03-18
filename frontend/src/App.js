import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import Signup from './pages/signup.js';
import Login from './pages/login.js';
import Home from './pages/home.js';
import Msg from './pages/msg.js';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/msg" element={<Msg />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
