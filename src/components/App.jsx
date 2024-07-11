import Home from './Home';
import Login from './Login';
import Register from './Register';
import RequestPasswordReset from './RequestPasswordRest';
import ResetPassword from './ResetPassword';
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {

  return (
    <div >
      <BrowserRouter >
        <Routes>
          <Route path="/" element ={<Register/>} />
          <Route path="/register" element ={<Register/>} />
          <Route path="/login" element ={<Login/>} />
          <Route path="/reset" element ={<ResetPassword/>} />
          <Route path="/request" element ={<RequestPasswordReset/>} />


          
          <Route path="/home" element ={<Home/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
