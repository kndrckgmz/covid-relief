import {useState} from 'react';
import {db} from './fire_config';
import firebase from 'firebase/app';

const Form = ({collectionname}) =>{

    const [inputtry, setTry] = useState("");
    const [btntxt, setBtnTxt] = useState("ADD LINK");
    const [inputname, setInputName] = useState("");
    const [inputdesc, setInputDesc] = useState("");
    const [inputlocation, setInputLoc] = useState("");
    const [inputtiming, setInputTime] = useState("");
    const [inputsource, setInputSource] = useState("");
    const [inputcontactname, setInputCName] = useState("");
    const [inputcontactnum, setInputCNum] = useState("");
    const [inputcontactemail, setInputCEmail] = useState("");
    const [inputlink, setInputLink] = useState("");
    const [inputverified, setInputVerified] = useState();
    const [inputverifiedby, setInputVerifiedBy] = useState("");
    const [inputcomments, setInputComment] = useState("");
    const [inputavailable, setInputAvailable] = useState(false);
    const [inputprice, setInputPrice] = useState("");
    const [inputcapacity, setInputCapacity] = useState("");
    const [inputmedname, setInputMedName] = useState("");
    const [inputbloodgroup, setInputBloodGroup] = useState("");
    const [inputrecoverydate, setInputRecoveryDate] = useState("");
    const [inputvaccinated, setInputVaccinated] = useState(false);
    const [inputomrcondition, setInputOMRCondition] = useState();
    const [inputoxygentype, setInputOxygenType] = useState();
    const [inputmedtype, setInputMedType] = useState();
    const [inputpbtype, setInputPBType] = useState();
    const [inputfoodtype, setInputFoodType] = useState();
    const [inputcosultationtype, setInputConsultationType] = useState();


    const consultationtypeinput = (e) => {
        setInputConsultationType(e.target.value);
    }
    const foodtypeinput = (e) => {
        setInputFoodType(e.target.value);
    }
    const pbtypeinput = (e) => {
        setInputPBType(e.target.value);
    }
    const medtypeinput = (e) => {
        setInputMedType(e.target.value);
    }
    const oxygentypeinput = (e) => {
        setInputOxygenType(e.target.value);
    }
    const omrconditioninput = (e) => {
        setInputOMRCondition(e.target.value);
    }
    const vaccinatedinput = (e) => {
        setInputVaccinated(e.target.checked);
    }
    const recoverydateinput = (e) => {
        setInputRecoveryDate(e.target.value);
    }
    const bloodgroupinput = (e) => {
        setInputBloodGroup(e.target.value);
    }
    const mednameinput = (e) => {
        setInputMedName(e.target.value);
    }
    const capacityinput = (e) => {
        setInputCapacity(e.target.value);
    }
    const priceinput = (e) => {
        setInputPrice(e.target.value);
    }
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
        setInputVerified(e.target.value);
    }
    const verifiedbyinput = (e) => {
        setInputVerifiedBy(e.target.value);
    }       
    const commentinput = (e) => {
        setInputComment(e.target.value);
    }           
    const availableinput = (e) => {
        setInputAvailable(e.target.checked);
    }
    
    const setLink = (e) =>{
    e.preventDefault();
    if (inputname!==""&&inputcontactname!==""&&inputcontactnum!==""&&inputverified!==undefined)
    {
    if (collectionname==="AmbulanceService"||collectionname==="BedAvailability"||collectionname==="HomeTesting"||collectionname==="TeleCounselling")
    {
        setBtnTxt("PLEASE WAIT");
        let btn = document.getElementById("add-btn");
        btn.disabled=true;
        btn.style.backgroundColor="var(--lgrey)";
        let docRef = db.collection(`${collectionname}`).doc();
        docRef.set({
            id:docRef.id,
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
            verified_date : new firebase.firestore.FieldValue.serverTimestamp(),
            source : inputsource,
            comments : inputcomments,
            last_update_time : new firebase.firestore.FieldValue.serverTimestamp(),
            available : inputavailable
        })
        .then(() => {
            setInputName("");
            setInputDesc("");
            setInputLoc("");
            setInputTime("");
            setInputCName("");
            setInputCNum("");
            setInputCEmail("");
            setInputLink("");
            setInputVerified(1);
            setInputVerifiedBy("");
            setInputSource("");
            setInputComment("");
            setInputAvailable(false);
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
            },1500);
        });
    }
    else if (collectionname==="BloodDonors")
    {   
        if(inputbloodgroup!==""&&inputpbtype!==undefined)
        {
        setBtnTxt("PLEASE WAIT");
        let btn = document.getElementById("add-btn");
        btn.disabled=true;
        btn.style.backgroundColor="var(--lgrey)";
        let docRef = db.collection(`${collectionname}`).doc();
        docRef.set({
            id:docRef.id,
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
            verified_date : new firebase.firestore.FieldValue.serverTimestamp(),
            source : inputsource,
            comments : inputcomments,
            last_update_time : new firebase.firestore.FieldValue.serverTimestamp(),
            available : inputavailable,
            type : inputpbtype,
            blood_group : inputbloodgroup,
        })
        .then(() => {
            setInputName("");
            setInputDesc("");
            setInputLoc("");
            setInputTime("");
            setInputCName("");
            setInputCNum("");
            setInputCEmail("");
            setInputLink("");
            setInputVerified(1);
            setInputVerifiedBy("");
            setInputSource("");
            setInputComment("");
            setInputAvailable(false);
            setInputBloodGroup("")
            setInputPBType();
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
            },1500);
        });
        }
        else
        {
            setTry("Please Enter Required Fields.")
            let fail = document.getElementById("add-link");
            fail.style.opacity = 1;
            fail.style.color = "var(--red)";
            setTimeout(()=>{
                fail.style.color = "unset";
                fail.style.opacity = 0;
            },2000);
        }
    }
    else if (collectionname==="Medicine")
    {   
        if(inputomrcondition!==undefined&&inputmedtype!==undefined&&inputmedname!=="")
        {
        setBtnTxt("PLEASE WAIT");
        let btn = document.getElementById("add-btn");
        btn.disabled=true;
        btn.style.backgroundColor="var(--lgrey)";
        let docRef = db.collection(`${collectionname}`).doc();
        docRef.set({
            id:docRef.id,
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
            verified_date : new firebase.firestore.FieldValue.serverTimestamp(),
            source : inputsource,
            comments : inputcomments,
            last_update_time : new firebase.firestore.FieldValue.serverTimestamp(),
            available : inputavailable,
            type : inputmedtype,
            condition : inputomrcondition,
            medicine_name : inputmedname,
            price : inputprice,
        })
        .then(() => {
            setInputName("");
            setInputDesc("");
            setInputLoc("");
            setInputTime("");
            setInputCName("");
            setInputCNum("");
            setInputCEmail("");
            setInputLink("");
            setInputVerified(1);
            setInputVerifiedBy("");
            setInputSource("");
            setInputComment("");
            setInputAvailable(false);
            setInputMedType();
            setInputMedName("");
            setInputOMRCondition();
            setInputPrice("");
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
            },1500);
        });
        }
        else
        {
        setTry("Please Enter Required Fields.")
        let fail = document.getElementById("add-link");
        fail.style.opacity = 1;
        fail.style.color = "var(--red)";
        setTimeout(()=>{
            fail.style.color = "unset";
            fail.style.opacity = 0;
        },2000);
        }
    }
    else if (collectionname==="Food")
    {   
        if(inputfoodtype!==undefined)
        {
        setBtnTxt("PLEASE WAIT");
        let btn = document.getElementById("add-btn");
        btn.disabled=true;
        btn.style.backgroundColor="var(--lgrey)";
        let docRef = db.collection(`${collectionname}`).doc();
        docRef.set({
            id:docRef.id,
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
            verified_date : new firebase.firestore.FieldValue.serverTimestamp(),
            source : inputsource,
            comments : inputcomments,
            last_update_time : new firebase.firestore.FieldValue.serverTimestamp(),
            available : inputavailable,
            type : inputfoodtype,
        })
        .then(() => {
            setInputName("");
            setInputDesc("");
            setInputLoc("");
            setInputTime("");
            setInputCName("");
            setInputCNum("");
            setInputCEmail("");
            setInputLink("");
            setInputVerified(1);
            setInputVerifiedBy("");
            setInputSource("");
            setInputComment("");
            setInputAvailable(false);
            setInputFoodType();
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
            },1500);
        });
        }
        else
        {
        setTry("Please Enter Required Fields.")
        let fail = document.getElementById("add-link");
        fail.style.opacity = 1;
        fail.style.color = "var(--red)";
        setTimeout(()=>{
            fail.style.color = "unset";
            fail.style.opacity = 0;
        },2000);
        }
    }
    else if (collectionname==="OnlineDoctorConsultation")
    {   
        if(inputcosultationtype!==undefined)
        {
        setBtnTxt("PLEASE WAIT");
        let btn = document.getElementById("add-btn");
        btn.disabled=true;
        btn.style.backgroundColor="var(--lgrey)";
        let docRef = db.collection(`${collectionname}`).doc();
        docRef.set({
            id:docRef.id,
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
            verified_date : new firebase.firestore.FieldValue.serverTimestamp(),
            source : inputsource,
            comments : inputcomments,
            last_update_time : new firebase.firestore.FieldValue.serverTimestamp(),
            available : inputavailable,
            type : inputcosultationtype,
        })
        .then(() => {
            setInputName("");
            setInputDesc("");
            setInputLoc("");
            setInputTime("");
            setInputCName("");
            setInputCNum("");
            setInputCEmail("");
            setInputLink("");
            setInputVerified(1);
            setInputVerifiedBy("");
            setInputSource("");
            setInputComment("");
            setInputAvailable(false);
            setInputConsultationType();
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
            },1500);
        });
        }
        else
        {
        setTry("Please Enter Required Fields.")
        let fail = document.getElementById("add-link");
        fail.style.opacity = 1;
        fail.style.color = "var(--red)";
        setTimeout(()=>{
            fail.style.color = "unset";
            fail.style.opacity = 0;
        },2000);
        }
    }
    else if (collectionname==="Oxygen")
    {   
        if(inputomrcondition!==undefined&&inputoxygentype!==undefined)
        {
        setBtnTxt("PLEASE WAIT");
        let btn = document.getElementById("add-btn");
        btn.disabled=true;
        btn.style.backgroundColor="var(--lgrey)";
        let docRef = db.collection(`${collectionname}`).doc();
        docRef.set({
            id:docRef.id,
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
            verified_date : new firebase.firestore.FieldValue.serverTimestamp(),
            source : inputsource,
            comments : inputcomments,
            last_update_time : new firebase.firestore.FieldValue.serverTimestamp(),
            available : inputavailable,
            condition : inputomrcondition,
            type : inputoxygentype,
            capacity : inputcapacity,
            price : inputprice
        })
        .then(() => {
            setInputName("");
            setInputDesc("");
            setInputLoc("");
            setInputTime("");
            setInputCName("");
            setInputCNum("");
            setInputCEmail("");
            setInputLink("");
            setInputVerified(1);
            setInputVerifiedBy("");
            setInputSource("");
            setInputComment("");
            setInputAvailable(false);
            setInputOMRCondition();
            setInputOxygenType();
            setInputCapacity("");
            setInputPrice("");
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
            },1500);
        });
        }
        else
        {
        setTry("Please Enter Required Fields.")
        let fail = document.getElementById("add-link");
        fail.style.opacity = 1;
        fail.style.color = "var(--red)";
        setTimeout(()=>{
            fail.style.color = "unset";
            fail.style.opacity = 0;
        },2000);
        }
    }
    else if (collectionname==="PlasmaDonors")
    {   
        if(inputpbtype!==undefined&&inputbloodgroup!=="")
        {
        setBtnTxt("PLEASE WAIT");
        let btn = document.getElementById("add-btn");
        btn.disabled=true;
        btn.style.backgroundColor="var(--lgrey)";
        let docRef = db.collection(`${collectionname}`).doc();
        docRef.set({
            id:docRef.id,
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
            verified_date : new firebase.firestore.FieldValue.serverTimestamp(),
            source : inputsource,
            comments : inputcomments,
            last_update_time : new firebase.firestore.FieldValue.serverTimestamp(),
            available : inputavailable,
            type : inputpbtype,
            blood_group : inputbloodgroup,
            covid_recovery_date : inputrecoverydate,
            vaccinated : inputvaccinated,
        })
        .then(() => {
            setInputName("");
            setInputDesc("");
            setInputLoc("");
            setInputTime("");
            setInputCName("");
            setInputCNum("");
            setInputCEmail("");
            setInputLink("");
            setInputVerified(1);
            setInputVerifiedBy("");
            setInputSource("");
            setInputComment("");
            setInputAvailable(false);
            setInputPBType();
            setInputBloodGroup("");
            setInputRecoveryDate("");
            setInputVaccinated(false);
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
            },1500);
        });
        }
        else
        {
        setTry("Please Enter Required Fields.")
        let fail = document.getElementById("add-link");
        fail.style.opacity = 1;
        fail.style.color = "var(--red)";
        setTimeout(()=>{
            fail.style.color = "unset";
            fail.style.opacity = 0;
        },2000);
        }
    }
    else if (collectionname==="Remedesivir")
    {   
        if(inputomrcondition!==undefined)
        {
        setBtnTxt("PLEASE WAIT");
        let btn = document.getElementById("add-btn");
        btn.disabled=true;
        btn.style.backgroundColor="var(--lgrey)";
        let docRef = db.collection(`${collectionname}`).doc();
        docRef.set({
            id:docRef.id,
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
            verified_date : new firebase.firestore.FieldValue.serverTimestamp(),
            source : inputsource,
            comments : inputcomments,
            last_update_time : new firebase.firestore.FieldValue.serverTimestamp(),
            available : inputavailable,
            condition : inputomrcondition,
        })
        .then(() => {
            setInputName("");
            setInputDesc("");
            setInputLoc("");
            setInputTime("");
            setInputCName("");
            setInputCNum("");
            setInputCEmail("");
            setInputLink("");
            setInputVerified(1);
            setInputVerifiedBy("");
            setInputSource("");
            setInputComment("");
            setInputAvailable(false);
            setInputOMRCondition();
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
            },1500);
        });
        }
        else
        {
        setTry("Please Enter Required Fields.")
        let fail = document.getElementById("add-link");
        fail.style.opacity = 1;
        fail.style.color = "var(--red)";
        setTimeout(()=>{
            fail.style.color = "unset";
            fail.style.opacity = 0;
        },2000);
        }
    }
    
    }
    else{
        setTry("Please Enter Required Fields.")
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
      <>  
            <div className="form-container" id="form">

            <div className="add-content-flex">
            
            <div className="form-details" id="form-input">
            <div className="form-data-title">Service Details</div>
                <div className="input-flex" >   
                    <label className="label">Name<div className="red">*</div></label>
                    <input className="input" value={inputname} onChange={nameinput} type="text" placeholder="Service Name"></input>
                </div>
                <div className="input-flex" >   
                    <label className="label">Description</label>
                    <input className="input" value={inputdesc} onChange={descinput} type="text" placeholder="Service Description"></input>
                </div>
                <div className="input-flex" >   
                    <label className="label">Location</label>
                    <input className="input" value={inputlocation} onChange={locinput} type="text" placeholder="Service Location"></input>
                </div>
                <div className="input-flex" >   
                    <label className="label">Timings</label>
                    <input className="input" value={inputtiming} onChange={timeinput} type="text" placeholder="Service Timings"></input>
                </div>
            </div>
            
            <div className="form-details" id="form-input">
            <div className="form-data-title">Contact Information</div>
                <div className="input-flex" >   
                    <label className="label">Contact Name<div className="red">*</div></label>
                    <input className="input" value={inputcontactname} onChange={cnameinput} type="text" placeholder="Contact Name"></input>
                </div>
                <div className="input-flex" >   
                    <label className="label">Contact Number<div className="red">*</div></label>
                    <input className="input" value={inputcontactnum} onChange={cnuminput} type="tel" placeholder="Contact Number"></input>
                </div>
                <div className="input-flex" >   
                    <label className="label">Contact Email</label>
                    <input className="input" value={inputcontactemail} onChange={cemailinput} type="email" placeholder="Contact E-mail"></input>
                </div>
                <div className="input-flex" >   
                    <label className="label">Link</label>
                    <input className="input" value={inputlink} onChange={linkinput} type="url" placeholder="https://www.examplesite.com"></input>
                </div>
            </div>
            </div>

            <div className="add-content-flex">
            <div className="form-details" id="form-input">
            <div className="form-data-title">Meta-data</div>
                <div className="input-flex" >   
                    <label className="label">Verified<div className="red">*</div></label>
                    <input className="input" onClick={verifiedinput} type="number" min="0" max="2" placeholder="0:Yes, 1:No, 2:Pending"></input>
                    </div>
                <div className="input-flex" >   
                    <label className="label">Verified By</label>
                    <input className="input" value={inputverifiedby} onChange={verifiedbyinput} type="text" placeholder="Name of Verifier"></input>
                </div>
                <div className="input-flex" >       
                    <label className="label">Source</label>
                    <input className="input" value={inputsource} onChange={sourceinput} type="text" placeholder="Enter Source "></input>
                </div>
                <div className="input-flex" >       
                    <label className="label">Comments</label>
                    <input className="input" value={inputcomments} onChange={commentinput} type="text" placeholder="Comments"></input>
                </div>
                <div className="input-flex">
                    <label className="label">Available</label>
                    <div className="checkbox-container">
                    <input className="checkbox" type="checkbox" id="check" defaultChecked={inputavailable} onClick={availableinput}/>
                    <label htmlFor="check" className="switch"></label> 
                    </div>    
                </div>
            </div>
                        
            {
                (()=> {
                if (collectionname==="BloodDonors")
                {
                    return (
                        <div className="form-details" id="form-input">
                        <div className="form-data-title">Information</div>
                            <div className="input-flex" >   
                                <label className="label">Donation Type<div className="red">*</div></label>
                                <input className="input" value={inputpbtype} onChange={pbtypeinput} type="number" min="0" max="2" placeholder="0:Platform, 1:Individual, 2:Blood Bank"></input>
                            </div>
                            <div className="input-flex" >       
                                <label className="label">Blood Group<div className="red">*</div></label>
                                <input className="input" value={inputbloodgroup} onChange={bloodgroupinput} type="text" placeholder="Eg. +0  (O-Positive)"></input>
                            </div>
                        </div>
                    );
                }
                else if (collectionname==="Food")
                {
                    return (
                        <div className="form-details" id="form-input">
                        <div className="form-data-title">Information</div>
                            <div className="input-flex" >   
                                <label className="label">Type<div className="red">*</div></label>
                                <input className="input" value={inputfoodtype} onChange={foodtypeinput} type="number" min="0" max="2" placeholder="0:Home Chef, 1:NGO, 2:Others"></input>
                            </div>
                        </div>
                    );
                }
                else if (collectionname==="Medicine")
                {
                    return (
                        <div className="form-details" id="form-input">
                        <div className="form-data-title">Information</div>
                            <div className="input-flex" >   
                                <label className="label">Condition<div className="red">*</div></label>
                                <input className="input" value={inputomrcondition} onChange={omrconditioninput} type="number" min="0" max="4" placeholder="0:No Stock, 1:Black Market, 2:Purchase, 3:Waiting Period, 4:Rental"></input>
                            </div>
                            <div className="input-flex" >       
                                <label className="label">Type<div className="red">*</div></label>
                                <input className="input" value={inputmedtype} onChange={medtypeinput} type="number" min="0" max="1" placeholder="0:Tablet, 1:Syrup"></input>
                            </div>
                            <div className="input-flex" >   
                                <label className="label">Medicine Name<div className="red">*</div></label>
                                <input className="input" value={inputmedname} onChange={mednameinput} type="text" placeholder="Name"></input>
                            </div>
                            <div className="input-flex" >       
                                <label className="label">Price</label>
                                <input className="input" value={inputprice} onChange={priceinput} type="text" placeholder="Price (Rupees)"></input>
                            </div>
                        </div>
                    );
                }
                else if (collectionname==="OnlineDoctorConsultation")
                {
                    return (
                        <div className="form-details" id="form-input">
                        <div className="form-data-title">Information</div>
                            <div className="input-flex" >   
                                <label className="label">Type<div className="red">*</div></label>
                                <input className="input" value={inputcosultationtype} onChange={consultationtypeinput} type="number" min="0" max="1" placeholder="0:Online, 1:Home"></input>
                            </div>
                        </div>
                    );
                }
                else if (collectionname==="Oxygen")
                {
                    return (
                        <div className="form-details" id="form-input">
                        <div className="form-data-title">Information</div>
                            <div className="input-flex" >   
                                <label className="label">Condition<div className="red">*</div></label>
                                <input className="input" value={inputomrcondition} onChange={omrconditioninput} type="number" min="0" max="4" placeholder="0:No Stock, 1:Black Market, 2:Purchase, 3:Waiting Period, 4:Rental"></input>
                            </div>
                            <div className="input-flex" >       
                                <label className="label">Type<div className="red">*</div></label>
                                <input className="input" value={inputoxygentype} onChange={oxygentypeinput} type="number" min="0" max="2" placeholder="0:Cylinder, 1:Concentrator, 2:Both"></input>
                            </div>
                            <div className="input-flex" >   
                                <label className="label">Capacity</label>
                                <input className="input" value={inputcapacity} onChange={capacityinput} type="text" placeholder="Capacity"></input>
                            </div>
                            <div className="input-flex" >       
                                <label className="label">Price</label>
                                <input className="input" value={inputprice} onChange={priceinput} type="text" placeholder="Price (Rupees)"></input>
                            </div>
                        </div>
                    );
                }
                else if (collectionname==="PlasmaDonors")
                {
                    return (
                        <div className="form-details" id="form-input">
                        <div className="form-data-title">Information</div>
                            <div className="input-flex" >   
                                <label className="label">Type<div className="red">*</div></label>
                                <input className="input" value={inputpbtype} onChange={pbtypeinput} type="number" min="0" max="2" placeholder="0:Platform, 1:Individual, 2:Blood Bank"></input>
                            </div>
                            <div className="input-flex" >       
                                <label className="label">Blood Group<div className="red">*</div></label>
                                <input className="input" value={inputbloodgroup} onChange={bloodgroupinput} type="text" placeholder="Eg. +0  (O-Positive)"></input>
                            </div>
                            <div className="input-flex" >   
                                <label className="label">COVID Recovery Date</label>
                                <input className="input" value={inputrecoverydate} onChange={recoverydateinput} type="text" placeholder="Date"></input>
                            </div>
                            <div className="input-flex">
                                <label className="label">Vaccinated</label>
                                <div className="checkbox-container">
                                    <input className="checkbox" type="checkbox" id="check1" defaultChecked={inputvaccinated} onClick={vaccinatedinput} />
                                    <label htmlFor="check1" className="switch"></label> 
                                </div>    
                            </div>
                        </div>
                    );
                }
                else if (collectionname==="Remedesivir")
                {
                    return (
                        <div className="form-details" id="form-input">
                        <div className="form-data-title">Information</div>
                            <div className="input-flex" >   
                                <label className="label">Condition<div className="red">*</div></label>
                                <input className="input" value={inputomrcondition} onChange={omrconditioninput} type="number" min="0" max="4" placeholder="0:No Stock, 1:Black Market, 2:Purchase, 3:Waiting Period, 4:Rental"></input>
                            </div>
                        </div>
                    );
                }
                else if (collectionname==="TeleCounselling")
                {
                    return (<></>);
                }
                else if (collectionname==="HomeTesting")
                {
                    return (<></>);
                }

                    
                })()
            }
             </div>
            <div className="btn-flex">
                <div className="try" id="add-link">{inputtry}</div>

                <button className="add-link-btn" onClick={setLink} id="add-btn">{btntxt}</button>
            </div>
        </div>
            
     </>   
    );

};

export default Form;