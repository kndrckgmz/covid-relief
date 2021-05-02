import {useState, useEffect} from 'react';
import Nav from './Page/navbar';
import Ambulance from './Page/Ambulance';
import Beds from './Page/Beds';
// import Beds from './Page/Blood';
// import Beds from './Page/Consultation';
// import Beds from './Page/Counselling';
// import Beds from './Page/Food';
// import Beds from './Page/Oxygen';
// import Beds from './Page/Plasma';
// import Beds from './Page/Remedesivir';
// import Beds from './Page/Testing';
import Widget from './Page/res/widget';
// import About from './Page/res/about';
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
           {/* <About/> */}
        </div>
        <Nav/>
      </div>
      <Switch>
        <Route path="/" exact component={props => (<Ambulance {...props} user={user}/>)}></Route>
        <Route path="/Beds" component={props => (<Beds {...props} user={user}/>)}></Route>
        {/* <Route path="/" component={Ambulance}></Route>
        <Route path="/" component={Ambulance}></Route>
        <Route path="/" component={Ambulance}></Route>
        <Route path="/" component={Ambulance}></Route>
        <Route path="/" component={Ambulance}></Route>
        <Route path="/" component={Ambulance}></Route>
        <Route path="/" component={Ambulance}></Route>
        <Route path="/" component={Ambulance}></Route>
        <Route path="/" component={Ambulance}></Route> */}
      </Switch>
    <Widget/>
    </div>
    </Router> 
    </>
  );
}

export default Main;
