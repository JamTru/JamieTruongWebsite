import Header from './Components/Header.js';
import Profile from './Components/Profile.js';
import Portfolio from './Components/Portfolio.js';
import Contact from './Components/Contact.js';
import Footer from './Components/Footer.js';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {useRef} from "react";
function App() {
  return (
    <div className="App">
      <Header />
      <Profile />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
