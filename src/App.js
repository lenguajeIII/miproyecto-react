import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./PAGES/home";
import Contactme from "./PAGES/Contactme"
import { Profile } from "./PAGES/Profile";


import Footer from "./components/Footer";


import Galerias from "./PAGES/Galerias";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./STYLES/login.css";
import "./STYLES/footer.css"
import "./STYLES/Product.css";
import "./STYLES/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./STYLES/Navbar.css";
import "./STYLES/food.css";
import "./STYLES/gracias.css";
import "./STYLES/gallery.css";
import "./STYLES/home.css";
import "./STYLES/preloader.css";
import Login from "./PAGES/Login";
// import Logout from "./PAGES/Logout";
import Food from "./PAGES/food";
import Portrait from "./PAGES/portrait";
import Product from "./PAGES/product";
import Gracias from "./PAGES/gracias";
function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />  
          <Route path="/galeria" element={<Galerias />} />          
          <Route path="/login" element={<Login />} />          
          <Route path="/profile" element={<Profile />} />
          <Route path="/contactme" element={<Contactme />} />
          <Route path="/food" element={<Food />} />
          <Route path="/portrait" element={<Portrait />} />
          <Route path="/product" element={<Product />} />
          <Route path="/gracias" element={<Gracias />} />
          <Route path="*" element={<Navigate to="/"/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
