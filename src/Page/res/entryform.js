import {useEffect, useState} from 'react';
import {db} from './fire_config';
import firebase from 'firebase/app';
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import { FormControl } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";

const Form = ({collectionname}) =>{

    const [inputtry, setTry] = useState("");
    const [btntxt, setBtnTxt] = useState("ADD");
    const [inputname, setInputName] = useState("");
    const [inputdesc, setInputDesc] = useState("");
    const [inputlocation, setInputLoc] = useState("");
    const [inputtiming, setInputTime] = useState("");
    const [inputsource, setInputSource] = useState("");
    const [inputcontactname, setInputCName] = useState("");
    const [inputcontactnum, setInputCNum] = useState("");
    const [inputcontactemail, setInputCEmail] = useState("");
    const [inputlink, setInputLink] = useState("");
    const [inputverified, setInputVerified] = useState("");
    const [inputverifiedby, setInputVerifiedBy] = useState("");
    const [inputcomments, setInputComment] = useState("");
    const [inputavailable, setInputAvailable] = useState(false);
    const [inputprice, setInputPrice] = useState("");
    const [inputcapacity, setInputCapacity] = useState("");
    const [inputmedname, setInputMedName] = useState("");
    const [inputbloodgroup, setInputBloodGroup] = useState("");
    const [inputrecoverydate, setInputRecoveryDate] = useState(null);
    const [inputvaccinated, setInputVaccinated] = useState(false);
    const [inputomrcondition, setInputOMRCondition] = useState("");
    const [inputoxygentype, setInputOxygenType] = useState("");
    const [inputmedtype, setInputMedType] = useState("");
    const [inputpbtype, setInputPBType] = useState("");
    const [inputfoodtype, setInputFoodType] = useState("");
    const [inputconsultationtype, setInputConsultationType] = useState("");


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
    const recoverydateinput = (inputrecoverydate) => {
        setInputRecoveryDate(inputrecoverydate);
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
    if (inputname!==""&&inputcontactname!==""&&inputcontactnum!=="")
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
                    location_covered : inputlocation,
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
                    setInputVerified("");
                    setInputVerifiedBy("");
                    setInputSource("");
                    setInputComment("");
                    setInputAvailable(false);
                    setTry("Your Link has Been Added Below.")
                    let success = document.getElementById("add-link");
                    success.style.opacity = 1;
                    success.style.color = "var(--white)";
                    success.style.backgroundColor = "var(--accent)";
                    setTimeout(()=>{
                        success.style.color = "unset";
                        success.style.opacity = 0;
                        btn.disabled=false;
                        btn.style.backgroundColor="var(--accent)";
                        setBtnTxt("ADD");
                    },1500);
                });
            }
            else if (collectionname==="BloodDonors")
            {   
                if(inputpbtype!=="")
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
                    location_covered : inputlocation,
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
                    setInputVerified("");
                    setInputVerifiedBy("");
                    setInputSource("");
                    setInputComment("");
                    setInputAvailable(false);
                    setInputBloodGroup("")
                    setInputPBType("");
                    setTry("Your Link has Been Added Below.")
                    let success = document.getElementById("add-link");
                    success.style.opacity = 1;
                    success.style.color = "var(--white)";
                    success.style.backgroundColor = "var(--accent)";
                    setTimeout(()=>{
                        success.style.color = "unset";
                        success.style.opacity = 0;
                        btn.disabled=false;
                        btn.style.backgroundColor="var(--accent)";
                        setBtnTxt("ADD");
                    },1500);
                });
                }
                else
                {
                    setTry("Please Enter Required Fields.")
                    let fail = document.getElementById("add-link");
                    fail.style.opacity = 1;
                    fail.style.color = "var(--white)";
                    fail.style.backgroundColor = "var(--red)";
                    setTimeout(()=>{
                        fail.style.color = "unset";
                        fail.style.opacity = 0;
                    },2000);
                }
            }
            else if (collectionname==="Medicine")
            {   
                if(inputomrcondition!==""&&inputmedtype!==""&&inputmedname!=="")
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
                    location_covered : inputlocation,
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
                    setInputVerified("");
                    setInputVerifiedBy("");
                    setInputSource("");
                    setInputComment("");
                    setInputAvailable(false);
                    setInputMedType("");
                    setInputMedName("");
                    setInputOMRCondition("");
                    setInputPrice("");
                    setTry("Your Link has Been Added Below.")
                    let success = document.getElementById("add-link");
                    success.style.opacity = 1;
                    success.style.color = "var(--white)";
                    success.style.backgroundColor = "var(--accent)";
                    setTimeout(()=>{
                        success.style.color = "unset";
                        success.style.opacity = 0;
                        btn.disabled=false;
                        btn.style.backgroundColor="var(--accent)";
                        setBtnTxt("ADD");
                    },1500);
                });
                }
                else
                {
                setTry("Please Enter Required Fields.")
                let fail = document.getElementById("add-link");
                fail.style.opacity = 1;
                fail.style.color = "var(--white)";
                fail.style.backgroundColor = "var(--red)";
                setTimeout(()=>{
                    fail.style.color = "unset";
                    fail.style.opacity = 0;
                },2000);
                }
            }
            else if (collectionname==="Food")
            {   
                if(inputfoodtype!=="")
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
                    location_covered : inputlocation,
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
                    setInputVerified("");
                    setInputVerifiedBy("");
                    setInputSource("");
                    setInputComment("");
                    setInputAvailable(false);
                    setInputFoodType("");
                    setTry("Your Link has Been Added Below.")
                    let success = document.getElementById("add-link");
                    success.style.opacity = 1;
                    success.style.color = "var(--white)";
                    success.style.backgroundColor = "var(--accent)";
                    setTimeout(()=>{
                        success.style.color = "unset";
                        success.style.opacity = 0;
                        btn.disabled=false;
                        btn.style.backgroundColor="var(--accent)";
                        setBtnTxt("ADD");
                    },1500);
                });
                }
                else
                {
                setTry("Please Enter Required Fields.")
                let fail = document.getElementById("add-link");
                fail.style.opacity = 1;
                fail.style.color = "var(--white)";
                fail.style.backgroundColor = "var(--red)";
                setTimeout(()=>{
                    fail.style.color = "unset";
                    fail.style.opacity = 0;
                },2000);
                }
            }
            else if (collectionname==="OnlineDoctorConsultation")
            {   
                if(inputconsultationtype!=="")
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
                    location_covered : inputlocation,
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
                    type : inputconsultationtype,
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
                    setInputVerified("");
                    setInputVerifiedBy("");
                    setInputSource("");
                    setInputComment("");
                    setInputAvailable(false);
                    setInputConsultationType();
                    setTry("Your Link has Been Added Below.")
                    let success = document.getElementById("add-link");
                    success.style.opacity = 1;
                    success.style.color = "var(--white)";
                    success.style.backgroundColor = "var(--accent)";
                    setTimeout(()=>{
                        success.style.color = "unset";
                        success.style.opacity = 0;
                        btn.disabled=false;
                        btn.style.backgroundColor="var(--accent)";
                        setBtnTxt("ADD");
                    },1500);
                });
                }
                else
                {
                setTry("Please Enter Required Fields.")
                let fail = document.getElementById("add-link");
                fail.style.opacity = 1;
                fail.style.color = "var(--white)";
                fail.style.backgroundColor = "var(--red)";
                setTimeout(()=>{
                    fail.style.color = "unset";
                    fail.style.opacity = 0;
                },2000);
                }
            }
            else if (collectionname==="Oxygen")
            {   
                if(inputomrcondition!==""&&inputoxygentype!=="")
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
                    location_covered : inputlocation,
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
                    setInputVerified("");
                    setInputVerifiedBy("");
                    setInputSource("");
                    setInputComment("");
                    setInputAvailable(false);
                    setInputOMRCondition("");
                    setInputOxygenType("");
                    setInputCapacity("");
                    setInputPrice("");
                    setTry("Your Link has Been Added Below.")
                    let success = document.getElementById("add-link");
                    success.style.opacity = 1;
                    success.style.color = "var(--white)";
                    success.style.backgroundColor = "var(--accent)";
                    setTimeout(()=>{
                        success.style.color = "unset";
                        success.style.opacity = 0;
                        btn.disabled=false;
                        btn.style.backgroundColor="var(--accent)";
                        setBtnTxt("ADD");
                    },1500);
                });
                }
                else
                {
                setTry("Please Enter Required Fields.")
                let fail = document.getElementById("add-link");
                fail.style.opacity = 1;
                fail.style.color = "var(--white)";
                fail.style.backgroundColor = "var(--red)";
                setTimeout(()=>{
                    fail.style.color = "unset";
                    fail.style.opacity = 0;
                },2000);
                }
            }
            else if (collectionname==="PlasmaDonors")
            {   
                if(inputpbtype!=="")
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
                    location_covered : inputlocation,
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
                    setInputVerified("");
                    setInputVerifiedBy("");
                    setInputSource("");
                    setInputComment("");
                    setInputAvailable(false);
                    setInputPBType("");
                    setInputBloodGroup("");
                    setInputRecoveryDate(null);
                    setInputVaccinated(false);
                    setTry("Your Link has Been Added Below.")
                    let success = document.getElementById("add-link");
                    success.style.opacity = 1;
                    success.style.color = "var(--white)";
                    success.style.backgroundColor = "var(--accent)";
                    setTimeout(()=>{
                        success.style.color = "unset";
                        success.style.opacity = 0;
                        btn.disabled=false;
                        btn.style.backgroundColor="var(--accent)";
                        setBtnTxt("ADD");
                    },1500);
                });
                }
                else
                {
                setTry("Please Enter Required Fields.")
                let fail = document.getElementById("add-link");
                fail.style.opacity = 1;
                fail.style.color = "var(--white)";
                fail.style.backgroundColor = "var(--red)";
                setTimeout(()=>{
                    fail.style.color = "unset";
                    fail.style.opacity = 0;
                },2000);
                }
            }
            else if (collectionname==="Remedesivir")
            {   
                if(inputomrcondition!=="")
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
                    location_covered : inputlocation,
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
                    setInputVerified("");
                    setInputVerifiedBy("");
                    setInputSource("");
                    setInputComment("");
                    setInputAvailable(false);
                    setInputOMRCondition("");
                    setTry("Your Link has Been Added Below.")
                    let success = document.getElementById("add-link");
                    success.style.opacity = 1;
                    success.style.color = "var(--white)";
                    success.style.backgroundColor = "var(--accent)";
                    setTimeout(()=>{
                        success.style.color = "unset";
                        success.style.opacity = 0;
                        btn.disabled=false;
                        btn.style.backgroundColor="var(--accent)";
                        setBtnTxt("ADD");
                    },1500);
                });
                }
                else
                {
                setTry("Please Enter Required Fields.")
                let fail = document.getElementById("add-link");
                fail.style.opacity = 1;
                fail.style.color = "var(--white)";
                fail.style.backgroundColor = "var(--red)";
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
            fail.style.color = "var(--white)";
            fail.style.backgroundColor = "var(--red)";
            setTimeout(()=>{
                fail.style.color = "unset";
                fail.style.opacity = 0;
            },2000);
        }
    }

    const forminput = () =>{
        let l1 = document.getElementById("l1");
        let l2 = document.getElementById("l2");
        l1.classList.toggle("line1-open");
        l2.classList.toggle("line2-open");

        let form = document.getElementById("entry-form");
        form.classList.toggle("form-container-open");

        let btn = document.getElementById("btn-flex");
        btn.classList.toggle("btn-flex-open");
    };

    const useStyles = makeStyles(() => ({
        formControl:{
            color:"var(--accent)",
            width: "60%",
            fontSize:"0.8rem",
            fontWeight: 600,
            marginLeft: "0.5rem",
            justifyContent:"center",
        },
        inputfield:{
            fontSize:"0.8rem",
            fontWeight: 600,
            color:"var(--dgrey)",
        },
        input:{
            color: "var(--lgrey)",
            fontSize:"0.8rem",
            fontWeight: 600,
            marginLeft: "0.5rem",
        },
        item:{
            fontSize:"0.7rem",
            fontWeight: 600,
            color:"var(--accent)",
        },
        datepicker:{
            marginLeft:"0.5rem",
            width:"60%",
        }
    }));

    const classes = useStyles();

    return( 
      <div className="entry-form" id="form">
            <div className="form-title-container" onClick={forminput}>
                <div className="form-title">Add New Data</div>
                    <div className="form-btn" >
                        <div className="line1" id="l1"></div>
                        <div className="line2" id="l2"></div>
                    </div>
                </div>

            <div className="form-container" id="entry-form">

            <div className="add-content-flex">
            <div className="form-details" id="form-input">
            <div className="form-data-title">Service Details</div>
                <div className="input-flex" >   
                    <label className="label">Name<div className="red">*</div></label>
                    <input className="input" value={inputname} onChange={nameinput} type="text" placeholder="Service Name" maxLength="50"></input>
                </div>
                <div className="input-flex" >   
                    <label className="label">Description</label>
                    <input className="input" value={inputdesc} onChange={descinput} type="text" placeholder="Service Description" maxLength="100"></input>
                </div>
                <div className="input-flex" >   
                    <label className="label">Location</label>
                    <input className="input" value={inputlocation} onChange={locinput} type="text" placeholder="Service Location" maxLength="50"></input>
                </div>
                <div className="input-flex" >   
                    <label className="label">Timings</label>
                    <input className="input" value={inputtiming} onChange={timeinput} type="text" placeholder="Service Timings" maxLength="50"></input>
                </div>
            </div>
            
            <div className="form-details" id="form-input">
            <div className="form-data-title">Contact Information</div>
                <div className="input-flex" >   
                    <label className="label">Contact Name<div className="red">*</div></label>
                    <input className="input" value={inputcontactname} onChange={cnameinput} type="text" placeholder="Contact Name" maxLength="50" ></input>
                </div>
                <div className="input-flex" >   
                    <label className="label">Contact Number<div className="red">*</div></label>
                    <input className="input" value={inputcontactnum} onChange={cnuminput} type="tel" placeholder="Contact Number" minLength="10" maxLength="13"></input>
                </div>
                <div className="input-flex" >   
                    <label className="label">Contact Email</label>
                    <input className="input" value={inputcontactemail} onChange={cemailinput} type="email" placeholder="Contact E-mail" maxlength="50"></input>
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
                    <FormControl className={classes.formControl}>
                    <InputLabel 
                    color="var(--lgrey)" 
                    fontSize="0.8rem"
                    fontWeight={500}
                    className={classes.input}
                    >Verificaiton Status</InputLabel>
                    <Select
                        value={inputverified}
                        onChange={verifiedinput}
                        placeholder="Verification Status"
                        className={classes.inputfield}
                        required
                        >
                        <MenuItem value={"0"}
                        fontSize="0.8rem"
                        fontWeight={500}
                        className={classes.item}>Verified</MenuItem>
                        <MenuItem value={"1"}
                        fontSize="0.8rem"
                        className={classes.item}>Not Verified</MenuItem>
                        <MenuItem value={"2"}
                        fontSize="0.8rem"
                        className={classes.item}>Verificaiton Pending</MenuItem>
                    </Select>
                    </FormControl>
                </div>
                <div className="input-flex" >   
                    <label className="label">Verified By</label>
                    <input className="input" value={inputverifiedby} onChange={verifiedbyinput} type="text" placeholder="Name of Verifier"></input>
                </div>
                <div className="input-flex" >       
                    <label className="label">Source</label>
                    <input className="input" value={inputsource} onChange={sourceinput} type="text" placeholder="Enter Source" maxLength="50"></input>
                </div>
                <div className="input-flex" >       
                    <label className="label">Comments</label>
                    <input className="input" value={inputcomments} onChange={commentinput} type="text" placeholder="Comments" maxLength="50"></input>
                </div>
                <div className="input-flex">
                    <label className="label">Available</label>
                    <div className="checkbox-container">
                    <input className="checkbox" type="checkbox" id="check" checked={inputavailable} onClick={availableinput}/>
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
                                <FormControl className={classes.formControl}>
                                    <InputLabel 
                                    color="var(--lgrey)" 
                                    fontSize="0.8rem"
                                    fontWeight={500}
                                    className={classes.input}
                                    >Donation Type</InputLabel>
                                    <Select
                                        value={inputpbtype}
                                        onChange={pbtypeinput}
                                        className={classes.inputfield}
                                        required
                                        >
                                        <MenuItem value={"0"}
                                        fontSize="0.8rem"
                                        fontWeight={500}
                                        className={classes.item}>Platform</MenuItem>
                                        <MenuItem value={"1"}
                                        fontSize="0.8rem"
                                        className={classes.item}>Individual</MenuItem>
                                        <MenuItem value={"2"}
                                        fontSize="0.8rem"
                                        className={classes.item}>Blood Bank</MenuItem>
                                    </Select>
                                </FormControl>    
                            </div>
                            <div className="input-flex" >       
                                <label className="label">Blood Group</label>
                                <FormControl className={classes.formControl}>
                                    <InputLabel 
                                    color="var(--lgrey)" 
                                    fontSize="0.8rem"
                                    fontWeight={500}
                                    className={classes.input}
                                    >Blood Group</InputLabel>
                                    <Select
                                        id="blooddonor"
                                        value={inputbloodgroup}
                                        onChange={bloodgroupinput}
                                        className={classes.inputfield}
                                        >
                                        <MenuItem value={"A+"}
                                        fontSize="0.8rem"
                                        className={classes.item}>A+</MenuItem>
                                        <MenuItem value={"A-"}
                                        fontSize="0.8rem"
                                        className={classes.item}>A-</MenuItem>
                                        <MenuItem value={"B+"}
                                        fontSize="0.8rem"
                                        className={classes.item}>B+</MenuItem>
                                        <MenuItem value={"B-"}
                                        fontSize="0.8rem"
                                        className={classes.item}>B-</MenuItem>
                                        <MenuItem value={"O+"}
                                        fontSize="0.8rem"
                                        className={classes.item}>O+</MenuItem>
                                        <MenuItem value={"O-"}
                                        fontSize="0.8rem"
                                        className={classes.item}>O-</MenuItem>
                                        <MenuItem value={"AB+"}
                                        fontSize="0.8rem"
                                        className={classes.item}>AB+</MenuItem>
                                        <MenuItem value={"AB-"}
                                        fontSize="0.8rem"
                                        className={classes.item}>AB-</MenuItem>
                                    </Select>
                                </FormControl>
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
                                <FormControl className={classes.formControl}>
                                    <InputLabel 
                                    color="var(--lgrey)" 
                                    fontSize="0.8rem"
                                    fontWeight={500}
                                    className={classes.input}
                                    >Food Type</InputLabel>
                                    <Select
                                        value={inputfoodtype}
                                        onChange={foodtypeinput}
                                        className={classes.inputfield}
                                        required
                                        >
                                        <MenuItem value={"0"}
                                        fontSize="0.8rem"
                                        className={classes.item}>Home Chef</MenuItem>
                                        <MenuItem value={"1"}
                                        fontSize="0.8rem"
                                        className={classes.item}>NGO</MenuItem>
                                        <MenuItem value={"2"}
                                        fontSize="0.8rem"
                                        className={classes.item}>Others</MenuItem>
                                    </Select>
                                </FormControl>
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
                                <FormControl className={classes.formControl}>
                                    <InputLabel 
                                    color="var(--lgrey)" 
                                    fontSize="0.8rem"
                                    fontWeight={500}
                                    className={classes.input}
                                    >Medicine Condition</InputLabel>
                                    <Select
                                        value={inputomrcondition}
                                        onChange={omrconditioninput}
                                        className={classes.inputfield}
                                        required
                                        >
                                        <MenuItem value={"0"}
                                        fontSize="0.8rem"
                                        className={classes.item}>No Stock</MenuItem>
                                        <MenuItem value={"1"}
                                        fontSize="0.8rem"
                                        className={classes.item}>Black Market</MenuItem>
                                        <MenuItem value={"2"}
                                        fontSize="0.8rem"
                                        className={classes.item}>Purchase</MenuItem>
                                        <MenuItem value={"3"}
                                        fontSize="0.8rem"
                                        className={classes.item}>Waiting Period</MenuItem>
                                        <MenuItem value={"4"}
                                        fontSize="0.8rem"
                                        className={classes.item}>Rental</MenuItem>
                                    </Select>
                                </FormControl>
                            </div>
                            <div className="input-flex" >       
                                <label className="label">Type<div className="red">*</div></label>
                                <FormControl className={classes.formControl}>
                                    <InputLabel 
                                    color="var(--lgrey)" 
                                    fontSize="0.8rem"
                                    fontWeight={500}
                                    className={classes.input}
                                    >Medicine Type</InputLabel>
                                    <Select
                                        value={inputmedtype}
                                        onChange={medtypeinput}
                                        className={classes.inputfield}
                                        required
                                        >
                                        <MenuItem value={"0"}
                                        fontSize="0.8rem"
                                        className={classes.item}>Tablet</MenuItem>
                                        <MenuItem value={"1"}
                                        fontSize="0.8rem"
                                        className={classes.item}>Syrup</MenuItem>
                                        <MenuItem value={"2"}
                                        fontSize="0.8rem"
                                        className={classes.item}>Injection</MenuItem>
                                    </Select>
                                </FormControl>
                            </div>
                            <div className="input-flex" >   
                                <label className="label">Medicine Name<div className="red">*</div></label>
                                <input className="input" value={inputmedname} onChange={mednameinput} type="text" placeholder="Name" maxLength="50"></input>
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
                                <FormControl className={classes.formControl}>
                                    <InputLabel 
                                    color="var(--lgrey)" 
                                    fontSize="0.8rem"
                                    fontWeight={500}
                                    className={classes.input}
                                    >Consultation Type</InputLabel>
                                    <Select
                                        value={inputconsultationtype}
                                        onChange={consultationtypeinput}
                                        className={classes.inputfield}
                                        required
                                        >
                                        <MenuItem value={"0"}
                                        fontSize="0.8rem"
                                        className={classes.item}>Online</MenuItem>
                                        <MenuItem value={"1"}
                                        fontSize="0.8rem"
                                        className={classes.item}>Home</MenuItem>
                                    </Select>
                                </FormControl>
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
                                <FormControl className={classes.formControl}>
                                    <InputLabel 
                                    color="var(--lgrey)" 
                                    fontSize="0.8rem"
                                    fontWeight={500}
                                    className={classes.input}
                                    >Oxygen Condition</InputLabel>
                                    <Select
                                        value={inputomrcondition}
                                        onChange={omrconditioninput}
                                        className={classes.inputfield}
                                        required
                                        >
                                        <MenuItem value={"0"}
                                        fontSize="0.8rem"
                                        className={classes.item}>No Stock</MenuItem>
                                        <MenuItem value={"1"}
                                        fontSize="0.8rem"
                                        className={classes.item}>Black Market</MenuItem>
                                        <MenuItem value={"2"}
                                        fontSize="0.8rem"
                                        className={classes.item}>Purchase</MenuItem>
                                        <MenuItem value={"3"}
                                        fontSize="0.8rem"
                                        className={classes.item}>Waiting Period</MenuItem>
                                        <MenuItem value={"4"}
                                        fontSize="0.8rem"
                                        className={classes.item}>Rental</MenuItem>
                                    </Select>
                                </FormControl>
                            </div>
                            <div className="input-flex" >       
                                <label className="label">Type<div className="red">*</div></label>
                                <FormControl className={classes.formControl}>
                                    <InputLabel 
                                    color="var(--lgrey)" 
                                    fontSize="0.8rem"
                                    fontWeight={500}
                                    className={classes.input}
                                    >Oxygen Type</InputLabel>
                                    <Select
                                        value={inputoxygentype}
                                        onChange={oxygentypeinput}
                                        className={classes.inputfield}
                                        required
                                        >
                                        <MenuItem value={"0"}
                                        fontSize="0.8rem"
                                        className={classes.item}>Cylinder</MenuItem>
                                        <MenuItem value={"1"}
                                        fontSize="0.8rem"
                                        className={classes.item}>Concentrator</MenuItem>
                                        <MenuItem value={"2"}
                                        fontSize="0.8rem"
                                        className={classes.item}>Both</MenuItem>
                                    </Select>
                                </FormControl>
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
                                <label className="label">Donation Type<div className="red">*</div></label>
                                <FormControl className={classes.formControl}>
                                    <InputLabel 
                                    color="var(--lgrey)" 
                                    fontSize="0.8rem"
                                    fontWeight={500}
                                    className={classes.input}
                                    >Donation Type</InputLabel>
                                    <Select
                                        value={inputpbtype}
                                        onChange={pbtypeinput}
                                        className={classes.inputfield}
                                        required
                                        >
                                        <MenuItem value={"0"}
                                        fontSize="0.8rem"
                                        fontWeight={500}
                                        className={classes.item}>Platform</MenuItem>
                                        <MenuItem value={"1"}
                                        fontSize="0.8rem"
                                        className={classes.item}>Individual</MenuItem>
                                        <MenuItem value={"2"}
                                        fontSize="0.8rem"
                                        className={classes.item}>Blood Bank</MenuItem>
                                    </Select>
                                </FormControl>    
                            </div>
                            <div className="input-flex" >       
                                <label className="label">Blood Group</label>
                                <FormControl className={classes.formControl}>
                                    <InputLabel 
                                    color="var(--lgrey)" 
                                    fontSize="0.8rem"
                                    fontWeight={500}
                                    className={classes.input}
                                    >Blood Group</InputLabel>
                                    <Select
                                        value={inputbloodgroup}
                                        onChange={bloodgroupinput}
                                        className={classes.inputfield}
                                        required
                                        >
                                        <MenuItem value={"A+"}
                                        fontSize="0.8rem"
                                        className={classes.item}>A+</MenuItem>
                                        <MenuItem value={"A-"}
                                        fontSize="0.8rem"
                                        className={classes.item}>A-</MenuItem>
                                        <MenuItem value={"B+"}
                                        fontSize="0.8rem"
                                        className={classes.item}>B+</MenuItem>
                                        <MenuItem value={"B-"}
                                        fontSize="0.8rem"
                                        className={classes.item}>B-</MenuItem>
                                        <MenuItem value={"O+"}
                                        fontSize="0.8rem"
                                        className={classes.item}>O+</MenuItem>
                                        <MenuItem value={"O-"}
                                        fontSize="0.8rem"
                                        className={classes.item}>O-</MenuItem>
                                        <MenuItem value={"AB+"}
                                        fontSize="0.8rem"
                                        className={classes.item}>AB+</MenuItem>
                                        <MenuItem value={"AB-"}
                                        fontSize="0.8rem"
                                        className={classes.item}>AB-</MenuItem>
                                    </Select>
                                </FormControl>
                            </div>
                            <div className="input-flex" >   
                                <label className="label">COVID Recovery Date</label>
                                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                    <KeyboardDatePicker
                                    placeholder="Recovery Date"
                                    disableToolbar
                                    variant="inline"
                                    format="dd/MM/yyyy"
                                    margin="normal"
                                    id="recovery-date-picker-inline"
                                    value={inputrecoverydate}
                                    onChange={recoverydateinput}
                                    autoOk={true}
                                    KeyboardButtonProps={{
                                        "aria-label": "change date",
                                    }}
                                    className={classes.datepicker}
                                    />
                                </MuiPickersUtilsProvider>    
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
                                <FormControl className={classes.formControl}>
                                    <InputLabel 
                                    color="var(--lgrey)" 
                                    fontSize="0.8rem"
                                    fontWeight={500}
                                    className={classes.input}
                                    >Remdesivir Condition</InputLabel>
                                    <Select
                                        value={inputomrcondition}
                                        onChange={omrconditioninput}
                                        className={classes.inputfield}
                                        required
                                        >
                                        <MenuItem value={"0"}
                                        fontSize="0.8rem"
                                        className={classes.item}>No Stock</MenuItem>
                                        <MenuItem value={"1"}
                                        fontSize="0.8rem"
                                        className={classes.item}>Black Market</MenuItem>
                                        <MenuItem value={"2"}
                                        fontSize="0.8rem"
                                        className={classes.item}>Purchase</MenuItem>
                                        <MenuItem value={"3"}
                                        fontSize="0.8rem"
                                        className={classes.item}>Waiting Period</MenuItem>
                                    </Select>
                                </FormControl>
                            </div>
                        </div>
                    );
                }                    
                })()
            }
             </div>

        </div>
        <div className="btn-flex" id="btn-flex">
            <div className="try" id="add-link">{inputtry}</div>
            <button type="submit" className="add-link-btn" onClick={setLink} id="add-btn">{btntxt}</button>
        </div>
    </div>      
    );

};

export default Form;