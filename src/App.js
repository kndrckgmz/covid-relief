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
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function Main() {

  const [user, setUser] = useState(false);

  useEffect(()=>{
    setUser(true);
  },[]);

  return (
    <>
    <Router>
    <div className="app">
      <div className="header">
        <div className="title-container">
          <div className="title">COVID RELIEF</div>
        </div>
        <Nav/>
      </div>
      <Switch>
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
