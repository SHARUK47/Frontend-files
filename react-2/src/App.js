import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Message from "./redux/message/Message";
import {store} from "./redux/message/store";
import {Provider} from "react-redux"
function App (){
  return(
    <>
      <Provider store={store}>
        <Router>
          <Routes>
            <Route path = "/message" element = {<Message/>}/>
          </Routes>
        </Router>
      </Provider>
    
    </>
    
  )
};

export default App;
