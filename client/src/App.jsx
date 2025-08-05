import {  Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import Home from "./components/Home.jsx";
import Form from "./components/Form.jsx";
import { Routes } from "react-router-dom";


function App() {
  return (
    
    <div>
      <Header />
      <Routes>
<Route path="/" element={<Home/>} />
<Route path="/register" element={<Form/>} />
      
      </Routes>
    </div>
  );
}
export default App;