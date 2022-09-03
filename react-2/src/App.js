import React from "react";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Home from "./routing/Home";
import About from "./routing/About"
import Contact from "./routing/Contact";
class App extends React.Component {
  render(){
    return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to = "./routing/Home">Home</Link>

          </li>
          <li>
            <Link to = "./routing/About">About us</Link>
          </li>
          <li>
          <Link to = "./routing/Contact">Contact us</Link>

          </li>
        </ul>
        <Routes>
          <Route path = "/Home" element = {<Home/>}></Route>
          <Route path = "/About" element = {<About/>}></Route>
          <Route path = "/Contact" element = {<Contact/>}></Route>


        </Routes>

      </div>

    </Router>  
  )
}
}

export default App;
