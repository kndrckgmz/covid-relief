import React from 'react';

const Login = ({
  email,
  setEmail,
  emailError,
  password,
  setPassword,
  passwordError,
  handleLogin,
  handleLogOut
}) => {


    function showpass() {
        var x = document.getElementById("pass");
        if (x.type === "password") {
          x.type = "text";
        } else {
          x.type = "password";
        }
      }

    return (
    <div className="content">
        <div className="grid">
        <div className="login">
            <div className="sv"></div>            

            <div className="label" id="signin">Sign In</div>

            <input className="input" type="email" id="name" placeholder="Username"
            required 
            value={email} 
            onChange={(e)=>setEmail(e.target.value)}></input>
            <p className="logerror" id="error">{emailError}</p> 

            <input className="input" type="password" id="pass" placeholder="Password"
            required
            value={password} 
            onChange={(e)=>setPassword(e.target.value)}></input>
            <p className="logerror" id="error">{passwordError}</p>

            <label className="label">
              Show Password
            <input className="checkbox1" type="checkbox" onClick={showpass}></input>
            </label>
              
            <button className="log" onClick={handleLogin}>Login</button>
        </div>
        <button className="logout" onClick={handleLogOut}>
            LOGOUT
          </button> 
        </div>
    </div>
    )
}

export default Login;