import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import "./App.css";
import Home from './home/Home';
import About from './about/About';
import Product from './products/Product';
import Contact from './contact/Contact';
import Blogs from './blogs/Blogs';
const App = () => {
  return (
    <Router>
      <div className='dflex'>
        <div className='logo'>LOGO</div>
        <div>
          <ul className='dflex gap'>
            <li><Link to="/">HOME</Link></li>
            <li><Link to="/about">ABOUT</Link></li>
            <li><Link to="/products">PRODUCTS</Link></li>
            <li><Link to="/contact">CONTACT</Link></li>
            <li><Link to="/blogs">BLOGS</Link></li>
          </ul>
        </div>
      </div>
      
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/products" element={<Product />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/blogs" element={<Blogs />} />
      </Routes>
    </Router>
  );
}

export default App;
