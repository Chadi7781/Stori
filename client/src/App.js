import React from "react";
import Home from "./pages/home/Home";

import {Switch,Route,BrowserRouter} from "react-router-dom";

import Header from './components/nav/Header';
import Register from './pages/auth/Register';
import Login from "./pages/auth/Login";


const App = () => (

  <>
          <Header/>

    <Switch>
      <Route exact path="/">
        <Home/>
      
      </Route>
    
      <Route exact path="/signup">
        <Register/>
        </Route>
      
        <Route exact path="/signin">
        <Login/>
      
      </Route>

    </Switch>
  
  
  </>

  


);

export default App;
