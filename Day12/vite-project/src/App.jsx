// import React from 'react'
import CounterApp from "./Components/CounterApp";
import ImageApp from "./Components/ImageApp";
import MainLayout from "./Components/MainLayout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route path="/counter" element={<CounterApp />} />
            <Route path="/image" element={<ImageApp />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App

