import { useState } from 'react'
import { Routes, Route, Link } from "react-router-dom";
import Red from './components/Red';
import Blue from './components/Blue';
import Home from './components/Home';
import './index.css';


function App() {
  //const [count, setCount] = useState(0)

  return (
    <div id="container">
    <h1>Pick a color</h1>
    <div id="navbar">
    <Link to="/home"/>
        <Link to="/blue"/>
        <Link to="/red"/>
        
    </div>
    <div id="main-section">
    <Routes>
    <Route path="/home" element={<h1>Home</h1>} />
    <Route path="/blue" element={<h1>Blue</h1>} />
     <Route path="/red" element={<h1>Red</h1>} />  
  </Routes>
      </div>
  </div>
  );
}
      
export default App
