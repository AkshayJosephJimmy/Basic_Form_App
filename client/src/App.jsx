import {  Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import Home from "./components/Home.jsx";
import Form from "./components/Form.jsx";
import { Routes } from "react-router-dom";
import AdminLogin from "./components/AdminLogin.jsx";
import AdminSignUp from "./components/AdminSignUp.jsx";
import AdminPannel from "./components/AdminPannel.jsx";


function App() {
  return (
    
    <div>
      <Header />
      <Routes>
<Route path="/" element={<Home/>} />
<Route path="/register" element={<Form/>} />
<Route path='/signin' element={<AdminLogin/>}/>
<Route path='/signup' element={<AdminSignUp/>}/>
<Route path='/admin' element={<AdminPannel/>}/>
      
      </Routes>
    </div>
  );
}
export default App;