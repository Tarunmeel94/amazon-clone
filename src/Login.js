import { Link, useHistory} from 'react-router-dom'
import React ,{useState}from 'react'
import "./Login.css"
import { auth } from './firebase';


function Login() {
    const History=useHistory();
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    const signin=(e)=>{
        e.preventDefault();//To disable default method
        //firebase is here
        auth.signInWithEmailAndPassword(email,password)
        .then(auth=>{History.push('/')})
        .catch(error=>alert(error.message))
    }
    const register=(e)=>{
        e.preventDefault();
        //firebade register
        auth 
        .createUserWithEmailAndPassword(email,password)
        .then((auth)=>{
           if(auth){
               History.push('/')
           }
        })
        .catch(error=>alert(error.message))
        
    } 
    return (
        <div className="login">
            <Link to ='/'>
           <img className="login_logo" src="https://turnerduckworth.com/sites/default/files/styles/case_study_single_image_s_2x/public/2019-03/5_Amazon_Lettermark_2560.jpg?h=a92f03cd&itok=2nBmNv14"/>      
        </Link>
        <div className="login_container">
          <h1>Sign-in</h1>
 
            <form>
                
             <input type="text" value={email} onChange={e=>setEmail(e.target.value)} placeholder="E-mail ID" />
             <br/>
            <input type="password" value={password} onChange={p=>setPassword(p.target.value)} placeholder="Password"/>
            
            <button className="login_signinbutton" onClick={signin}>Sign In</button><br/>
            <br/>
            
            <button className="login_create"onClick={register}>Create a account</button>
            </form>
        </div>
        </div>
    )
}

export default Login
