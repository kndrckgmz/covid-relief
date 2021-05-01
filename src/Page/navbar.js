import {NavLink} from 'react-router-dom';

const Nav = () => {

    return(
        <div className="navbar">
            <div className="navlinks">
                <NavLink to="/" exact className="link">Ambulance</NavLink>
                <NavLink to="/Beds" className="link">Beds</NavLink>
                <NavLink to="/Blood" className="link">Blood</NavLink>
                <NavLink to="/Food" className="link">Food</NavLink>
                <NavLink to="/Testing" className="link">Home Testing</NavLink>
                <NavLink to="/Consultation" className="link">Online Consultation</NavLink>
                <NavLink to="/Oxygen" className="link">Oxygen</NavLink>
                <NavLink to="/Plasma" className="link">Plasma</NavLink>
                <NavLink to="/Remediesivir" className="link">Remedesivir</NavLink>
                <NavLink to="/Counselling" className="link">TeleCounselling</NavLink>
            </div>
        </div>
    );
};

export default Nav;