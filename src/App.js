import {useState, useEffect} from 'react';
import Nav from './Page/navbar';
import Ambulance from './Page/Ambulance';
import Beds from './Page/Beds';
import Blood from './Page/Blood';
import Consultation from './Page/Consultation';
import Counselling from './Page/Counselling';
import Med from './Page/Medicine'
import Food from './Page/Food';
import Oxygen from './Page/Oxygen';
import Plasma from './Page/Plasma';
import Rem from './Page/Remedesivir';
import Testing from './Page/Testing';
import Widget from './Page/res/widget';
import Donor from './Page/res/donor';
import Login from './Login';
import fire from './Page/res/fire_config';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function Main() {

  const [user, setUser] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const clearInputs = () =>{
    setEmail("");
    setPassword("");
  } 

  const clearErrors = () =>{
    setEmailError("");
    setPasswordError("");
  } 

  const handleLogin = () => {
    clearErrors();
    fire
    .auth()
    .signInWithEmailAndPassword(email, password)
    .catch((err) => {
      switch(err.code){
        case "auth/invalid-email":
        case "auth/user-disabled":
        case "auth/user-not-found":
          setEmailError(err.message);
          break;
        case "auth/wrong-password":
          setPasswordError(err.message);
          break;  
      }
    });
  }

  const handleSignUp = () => {
    clearErrors();
    fire
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .catch((err) => {
      switch(err.code){
        case "auth/email-already-in-use":
        case "auth/invalid-email":
          setEmailError(err.message);
          break;
        case "auth/weak-password":
          setPasswordError(err.message);
          break;  
      }
    });
  }

  const handleLogOut = () => {
    fire.auth().signOut();
  }

  useEffect(()=>{
      fire.auth().onAuthStateChanged((user) =>{
        if(user)
        {
          clearInputs();
          setUser(true);
        }
        else
        {
          setUser(false);
        }
      });
  },[]);

  return (
    <>
    <Router>
    <div className="app">
      <div className="header">
        <div className="title-container">
          <div className="title">COVID RELIEF</div>
          <Donor/>
        </div>
        <Nav/>
      </div>
      <Switch>
        <Route path="/Login" component={props => (<Login {...props} 
          email={email}
          setEmail={setEmail}
          emailError={emailError}
          password={password}
          setPassword={setPassword}
          passwordError={passwordError}
          handleLogin={handleLogin}
          handleLogOut={handleLogOut}
        />)}></Route>
        <Route path="/" exact component={props => (<Ambulance {...props} user={user}/>)}></Route>
        <Route path="/Beds" component={props => (<Beds {...props} user={user}/>)}></Route>
        <Route path="/Blood" component={props => (<Blood {...props} user={user}/>)}></Route>
        <Route path="/Medicine" component={props => (<Med {...props} user={user}/>)}></Route>
        <Route path="/Food" component={props => (<Food {...props} user={user}/>)}></Route>
        <Route path="/Testing" component={props => (<Testing {...props} user={user}/>)}></Route>
        <Route path="/Consultation" component={props => (<Consultation {...props} user={user}/>)}></Route>
        <Route path="/Oxygen" component={props => (<Oxygen {...props} user={user}/>)}></Route>
        <Route path="/Plasma" component={props => (<Plasma {...props} user={user}/>)}></Route>
        <Route path="/Remedesivir" component={props => (<Rem {...props} user={user}/>)}></Route>
        <Route path="/Counselling" component={props => (<Counselling {...props} user={user}/>)}></Route>
      </Switch>
    <Widget/>
    </div>
    </Router> 
    </>
  );
}

export default Main;
