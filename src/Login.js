import {useState, useEffect} from 'react';
import fire from './Page/res/fire_config';

const Login = ({logincheck, setLoginCheck}) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleLogin = () => {
    clearErrors();
    fire
    .auth()
    .signInWithEmailAndPassword(email, password)
    .catch((err) => {
      if(err.code==="auth/invalid-email"||err.code==="auth/user-disabled"||err.code==="auth/user-not-found")
    { 
      let e = document.getElementById("errore");
      e.style.opacity=1;
      setEmailError(err.message);
      setTimeout(()=>{
        setEmailError("");
        e.style.opacity=0;
      },10000);
    }
    else if(err.code==="auth/wrong-password")
    {
      let e = document.getElementById("errorp");
      e.style.opacity=1;
      setPasswordError(err.message);
      setTimeout(()=>{
        setPasswordError("");
        e.style.opacity=0;
      },10000);
    }
    });
  }


  // switch(err.code){
  //   case "auth/invalid-email":
  //   case "auth/user-disabled":
  //   case "auth/user-not-found":
  //     setEmailError(err.message);
  //     break;
  //   case "auth/wrong-password":
  //     setPasswordError(err.message);
  //     break;  
  // }


  const clearInputs = () =>{
    setEmail("");
    setPassword("");
  } 

  const clearErrors = () =>{
    setEmailError("");
    setPasswordError("");
  } 

  const handleLogOut = () => {
    fire.auth().signOut();
  }

  const userListener = () => {
    fire.auth().onAuthStateChanged((logincheck) =>{
      if(logincheck)
      {
        clearInputs();
        setLoginCheck(logincheck);
      }
      else
      {
        setLoginCheck(false);
      }
    });
  }

  useEffect(()=>{
    userListener();
  },[]);

    function showpass() {
        var x = document.getElementById("pass");
        if (x.type === "password") {
          x.type = "text";
        } else {
          x.type = "password";
        }
      }

    return (
      <>
    {logincheck ?
      (
        <div className="content">
        <div className="grid">
        <div className="login">
            <div className="sv"></div>            

            <div className="login-title" id="signin">YOU ARE LOGGED IN !</div>
            <button className="log" onClick={handleLogOut}>
            LOGOUT
            </button> 
        </div>
        </div>
        </div>
      )
      :
      (
        <div className="content">
        <div className="grid">
        <div className="login">
            <div className="sv"></div>            

            <div className="login-title" id="signin">ADMINISTRATOR LOGIN</div>

            <input className="login-input" type="email" id="name" placeholder="Email"
            required 
            value={email} 
            onChange={(e)=>setEmail(e.target.value)}></input>
            <p className="logerror" id="errore">{emailError}</p> 

            <input className="login-input" type="password" id="pass" placeholder="Password"
            required
            value={password} 
            onChange={(e)=>setPassword(e.target.value)}></input>
            <p className="logerror" id="errorp">{passwordError}</p>

            <div className="login-flex">
              <label className="password-check-label">Show Password</label>
              <input className="checkbox" type="checkbox" id="passwordcheck" onClick={showpass}/>
              <label htmlFor="passwordcheck" className="switch"/>      
            </div>  
            <button className="log" onClick={handleLogin}>LOGIN</button>
        </div>
        </div>
        </div>
      )

    }
    </>
    
    )
}

export default Login;