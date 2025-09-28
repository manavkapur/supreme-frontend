import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import Blog from "./pages/Blog";
import Quote from "./pages/Quote";
import Admin from "./pages/Admin";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <Router>
      <div>
        {/* Simple Navbar */}
        <nav style={{ padding: "10px", background: "#f4f4f4" }}>
          <Link to="/" style={{ margin: "10px" }}>Home</Link>
          <Link to="/services" style={{ margin: "10px" }}>Services</Link>
          <Link to="/about" style={{ margin: "10px" }}>About</Link>
          <Link to="/gallery" style={{ margin: "10px" }}>Gallery</Link>
          <Link to="/blog" style={{ margin: "10px" }}>Blog</Link>
          <Link to="/quote" style={{ margin: "10px" }}>Get a Quote</Link>
          <Link to="/contact" style={{ margin: "10px" }}>Contact</Link>
          <Link to="/admin" style={{ margin: "10px" }}>Admin</Link>
          <Link to="/dashboard" style={{ margin: "10px" }}>Dashboard</Link>
        </nav>

        {/* Page Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/quote" element={<Quote />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
