import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"

import Home from "./pages/Home";
import Nav from "./components/Nav";

export default function App(){
  return(
    <>
      <Router>
        <Nav />
        <Routes>
          <Route  path="/" element={ <Home />} />
        </Routes>
      </Router>
    </>
  )
}