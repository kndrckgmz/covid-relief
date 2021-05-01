import {useState} from 'react';
import fire, {db} from './fire_config';

const Form = () =>{

    const [inputtry, setTry] = useState("");
    const [btntxt, setBtnTxt] = useState("ADD LINK");
    const [inputname, setInputName] = useState("");
    const [inputdesc, setInputDesc] = useState("");
    const [inputlocation, setInputLoc] = useState("");
    const [inputtiming, setInputTime] = useState("");
    const [inputsource, setInputSource] = useState("");
    const [inputcontactname, setInputCName] = useState("");
    const [inputcontactnum, setInputCNum] = useState();
    const [inputcontactemail, setInputCEmail] = useState("");
    const [inputlink, setInputLink] = useState("");
    const [inputverified, setInputVerified] = useState();
    const [inputverifiedby, setInputVerifiedBy] = useState("");
    const [inputcomments, setInputComment] = useState("");
    const [inputlastupdate, setInputLastUpdate] = useState();
    const [inputverifieddate, setInputVerifiedDate] = useState();

    const nameinput = (e) => {
        setInputName(e.target.value);
    }

    const descinput = (e) => {
        setInputDesc(e.target.value);
    }

    const locinput = (e) => {
        setInputLoc(e.target.value);
    }

    const timeinput = (e) => {
        setInputTime(e.target.value);
    }

    const sourceinput = (e) => {
        setInputSource(e.target.value);
    }

    const cnameinput = (e) => {
        setInputCName(e.target.value);
    }

    const cnuminput = (e) => {
        setInputCNum(e.target.value);
    }

    const cemailinput = (e) => {
        setInputCEmail(e.target.value);
    }

    const linkinput = (e) => {
        setInputLink(e.target.value);
    }

    const verifiedinput = (e) => {
        setInputVerified(e.target.checked);
    }

    const verifiedbyinput = (e) => {
        setInputVerifiedBy(e.target.value);
    }
       
    const commentinput = (e) => {
        setInputComment(e.target.value);
    }

    console.log();

    const setLink = (e) =>{
    e.preventDefault();
    if (inputname!=="")
    {   
        // setInputVerifiedDate(fire.firestore.FieldValue.serverTimestamp());
        // setInputLastUpdate(fire.firestore.FieldValue.serverTimestamp());
        setBtnTxt("PLEASE WAIT");
        let btn = document.getElementById("add-btn");
        btn.disabled=true;
        btn.style.backgroundColor="var(--lgrey)";
        db.collection("AmbulanceService").add({
            name : inputname,
            description : inputdesc,
            location_coverd : inputlocation,
            timings : inputtiming,
            contact_name : inputcontactname,
            contact_number : inputcontactnum,
            contact_email : inputcontactemail,
            link_to_go : inputlink,
            verified : inputverified,
            verified_by : inputverifiedby,
            verified_date : fire.firestore.Timestamp.now(),
            source : inputsource,
            comments : inputcomments,
            last_update_time : fire.firestore.Timestamp.now()
        });
        setInputName("");
        setInputDesc("");
        setInputLoc("");
        setInputTime("");
        setInputLastUpdate();
        setInputCName("");
        setInputCNum("");
        setInputCEmail("");
        setInputLink("");
        setInputVerified(false);
        setInputVerifiedBy("");
        setInputVerifiedDate();
        setInputSource("");
        setInputComment("");
        setTry("Your Link has Been Added Below.")
        let success = document.getElementById("add-link");
        success.style.opacity = 1;
        success.style.color = "var(--accent)";
        setTimeout(()=>{
            success.style.color = "unset";
            success.style.opacity = 0;
            btn.disabled=false;
            btn.style.backgroundColor="var(--accent)";
            setBtnTxt("ADD LINK");
        },1000);
    }
    else{
        setTry("Please Enter All Fields.")
        let fail = document.getElementById("add-link");
        fail.style.opacity = 1;
        fail.style.color = "var(--red)";
        setTimeout(()=>{
            fail.style.color = "unset";
            fail.style.opacity = 0;
        },2000);
    }
    }

    return(
        <div className="form-container" id="form">

            <div className="form-title">Add New Data</div>

            <div className="add-content-flex">
            <div className="form-data-title">Service Details</div>
            <div className="form-details" id="form-input">
                <div className="input-flex" >   
                    <label className="label">Name</label>
                    <input className="input" value={inputname} onChange={nameinput} type="text" placeholder="Enter Title"></input>
                </div>
                <div className="input-flex" >   
                    <label className="label">Description</label>
                    <input className="input" value={inputdesc} onChange={descinput} type="text" placeholder="Enter Title"></input>
                </div>
                <div className="input-flex" >   
                    <label className="label">Location</label>
                    <input className="input" value={inputlocation} onChange={locinput} type="text" placeholder="Enter Title"></input>
                </div>
                <div className="input-flex" >   
                    <label className="label">Timings</label>
                    <input className="input" value={inputtiming} onChange={timeinput} type="text" placeholder="Enter Title"></input>
                </div>
            </div>
            
            <div className="form-details" id="form-input">
            <div className="form-data-title">Contact Information</div>
                <div className="input-flex" >   
                    <label className="label">Contact Name</label>
                    <input className="input" value={inputcontactname} onChange={cnameinput} type="text" placeholder="Enter Title"></input>
                </div>
                <div className="input-flex" >   
                    <label className="label">Contact Number</label>
                    <input className="input" value={inputcontactnum} onChange={cnuminput} type="tel" placeholder="Enter Title"></input>
                </div>
                <div className="input-flex" >   
                    <label className="label">Contact Email</label>
                    <input className="input" value={inputcontactemail} onChange={cemailinput} type="email" placeholder="Enter Title"></input>
                </div>
                <div className="input-flex" >   
                    <label className="label">Link</label>
                    <input className="input" value={inputlink} onChange={linkinput} type="url" placeholder="Enter Title"></input>
                </div>
            </div>

            <div className="form-details" id="form-input">
            <div className="form-data-title">Meta-data</div>
                <div className="verified-input-flex">
                <div className="checkbox-flex" >   
                    <label className="checkbox-label">Verified</label>
                    <input className="checkbox" id="verified" onClick={verifiedinput} type="checkbox" placeholder="Enter Title"></input>
                </div>
                <div className="vinput-flex" >   
                    <label className="vlabel">Verified By</label>
                    <input className="vinput" value={inputverifiedby} onChange={verifiedbyinput} type="text" placeholder="Enter Title"></input>
                </div>
                </div>
                <div className="input-flex" >       
                    <label className="label">Source</label>
                    <input className="input" value={inputsource} onChange={sourceinput} type="text" placeholder="Enter Title"></input>
                </div>
                <div className="input-flex" >       
                    <label className="label">Comments</label>
                    <input className="input" value={inputcomments} onChange={commentinput} type="text" placeholder="Enter Title"></input>
                </div>
            </div>
            </div>

            <div className="try" id="add-link">{inputtry}</div>
            <button className="add-link-btn" onClick={setLink} id="add-btn">{btntxt}</button>
        </div>
    );

};

export default Form;