import  React  from "react";
import './App.css';
import Header from "./Header.js";
import Home from "./Home.js";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Checkout  from "./Checkout.js";
function App() {
  return (
  <Router>  
    <div className="App">
    <Header/>
    <Switch>
        <route path="/checkout">
          <Checkout/>
        </route>
        <route path="/">
          <Home/>
        </route>
      </Switch>
    </div>
  </Router>
  );
}

export default App;
