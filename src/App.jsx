import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"

import Home from "./pages/Home";

export default function App(){
  return(
    <>
      <Router>
        <Routes>
          <Route  path="/" element={ <Home />} />
        </Routes>
      </Router>
    </>
  )
}