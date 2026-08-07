import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"

import Home from "./pages/Home";
import Nav from "./components/Nav";
import Architecture from "./pages/Architecture";
import About from "./pages/About";

export default function App(){
  return(
    <>
      <Router>
        <Nav />
        <Routes>
          <Route  path="/" element={ <Home />} />
          <Route path="/architecture" element={<Architecture />} />
          <Route  path="/about" element={ <About />} />
        </Routes>
      </Router>
    </>
  )
}