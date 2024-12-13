import React,{useState} from 'react'
import{BrowserRouter, Routes, Route} from "react-router-dom";
import MainLayout from "./components/MainLayout";
import Login from "./components/Login";
import Register from "./components/Register";
import DashBoard from "./components/DashBoard";
import Logout from './components/Logout';
const App = () => {

  const[data, setData]= useState();

  return (
    <div>
      {JSON. stringify(data)}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route path="/login" element={<Login regLogin={data} />}/>
            <Route path="/register" element={<Register regData={setData} />} />
          </Route>
          <Route path="/dashboard" element={<DashBoard regDash={data} />}/>
          <Route path="/logout" element={<Logout regLog={setData} />}/>
        </Routes>  
      </BrowserRouter>
    </div>
  )
}

export default App
