import  React,{useEffect, useState}  from "react";
import './App.css';
import Header from "./Header.js";
import Home from "./Home.js";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Checkout  from "./Checkout.js";
import Login from "./Login.js";
import {auth} from "./firebase";
import { useStateValue } from "./StateProvider";

function App() {
  const[{},dispatch]=useStateValue();
  useEffect(() => {
    //will only run once when app component loads....
     auth.onAuthStateChanged(authUser=>{
       console.log('The auth user is---',authUser)
       if(authUser){
        dispatch({
          type:'SET_USER',
          user:authUser
        })
       }
       else{dispatch({
         type:'SET_USER',
         user:null
       })

       }
     })
   
    
  }, [])
  return (
  <Router>  
    <div className="App">
    
    <Switch>
       <route path="/login">
        <Login/>
       </route>
        <route path="/checkout">
        <Header/>
          <Checkout/>
        </route>
        <route path="/">
        <Header/>
          <Home/>
        </route>
      </Switch>
    </div>
  </Router>
  );
}

export default App;
