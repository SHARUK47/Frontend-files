import React from "react";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Sform from "./formy/Sform"
function App() {
  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to = "/">Home</Link>

          </li>
          <li>
            <Link to = "/About">About us</Link>
          </li>
          <li>
          <Link to = "/Contact">Contact us</Link>

          </li>
        </ul>

      </div>

    </Router>  
  )
}

export default App;
