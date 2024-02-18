import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import New from "./pages/new/New";
import Single from "./pages/single/Single";
import Login from "./pages/login/Login";
import Row from "./pages/home/row/Row";
import "./App.css"
import Modal from './components/Modal';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/new" element={<New />} />
          <Route path="/single" element={<Single />} />
          <Route path="/row" element={<Row />} />
          <Route path='/modal' element={<Modal/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;