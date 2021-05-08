import { useEffect } from "react";
import {db} from './fire_config';
import firebase from 'firebase/app';

const Modal = ({
    editid,
    setEditId,
    collectionname, 
    editlist,
    editname,
    setEditName,
    editdesc,
    setEditDesc,
    editlocation,
    setEditLoc,
    edittiming,
    setEditTime,
    editsource,
    setEditSource,
    editcontactname,
    setEditCName,
    editcontactemail,
    setEditCEmail,
    editcontactnum,
    setEditCNum,
    editlink,
    setEditLink,
    editverified,
    setEditVerified,
    editverifiedby,
    setEditVerifiedBy,
    editcomments,
    setEditComment,
    editavailable,
    setEditAvailable,
    editprice,
    setEditPrice,
    editcapacity, 
    setEditCapacity,
    editmedname,
    setEditMedName,
    editmedtype,
    setEditMedType,
    editbloodgroup,
    setEditBloodGroup,
    editrecoverydate,
    setEditRecoveryDate,
    editvaccinated,
    setEditVaccinated,
    editomrcondition,
    setEditOMRCondition,
    editoxygentype,
    setEditOxygenType,
    editpbtype,
    setEditPBType,
    editfoodtype,
    setEditFoodType,
    editconsultationtype,
    setEditConsultationType}) => {



    const consultationtypeinput = (e) => {
        setEditConsultationType(e.target.value);
    }
    const foodtypeinput = (e) => {
        setEditFoodType(e.target.value);
    }
    const pbtypeinput = (e) => {
        setEditPBType(e.target.value);
    }
    const medtypeinput = (e) => {
        setEditMedType(e.target.value);
    }
    const oxygentypeinput = (e) => {
        setEditOxygenType(e.target.value);
    }
    const omrconditioninput = (e) => {
        setEditOMRCondition(e.target.value);
    }
    const vaccinatedinput = (e) => {
        setEditVaccinated(e.target.checked);
    }
    const recoverydateinput = (e) => {
        setEditRecoveryDate(e.target.value);
    }
    const bloodgroupinput = (e) => {
        setEditBloodGroup(e.target.value);
    }
    const mednameinput = (e) => {
        setEditMedName(e.target.value);
    }
    const capacityinput = (e) => {
        setEditCapacity(e.target.value);
    }
    const priceinput = (e) => {
        setEditPrice(e.target.value);
    }
    const nameinput = (e) => {
        setEditName(e.target.value);
    }
    const descinput = (e) => {
        setEditDesc(e.target.value);
    }
    const locinput = (e) => {
        setEditLoc(e.target.value);
    }
    const timeinput = (e) => {
        setEditTime(e.target.value);
    }
    const sourceinput = (e) => {
        setEditSource(e.target.value);
    }
    const cnameinput = (e) => {
        setEditCName(e.target.value);
    }
    const cnuminput = (e) => {
        setEditCNum(e.target.value);
    }
    const cemailinput = (e) => {
        setEditCEmail(e.target.value);
    }
    const linkinput = (e) => {
        setEditLink(e.target.value);
    }
    const verifiedinput = (e) => {
        setEditVerified(e.target.value);
    }
    const verifiedbyinput = (e) => {
        setEditVerifiedBy(e.target.value);
    }       
    const commentinput = (e) => {
        setEditComment(e.target.value);
    }           
    const availableinput = (e) => {
        setEditAvailable(e.target.checked);
    }

    

    useEffect(()=>{
        if (collectionname==="AmbulanceService"||collectionname==="BedAvailability"||collectionname==="HomeTesting"||collectionname==="TeleCounselling")
        {
            editlist.forEach(i=>{
                setEditName(i.name);
                setEditDesc(i.description);
                setEditLoc(i.location_covered);
                setEditTime(i.timings);
                setEditCName(i.contact_name);
                setEditCNum(i.contact_number); 
                setEditCEmail(i.contact_email); 
                setEditLink(i.link_to_go);
                setEditVerified(i.verified);
                setEditVerifiedBy(i.verified_by);
                setEditSource(i.source);
                setEditComment(i.comments);
                setEditAvailable(i.available);
            });
        }
        else if (collectionname==="BloodDonors")
        {   
            editlist.forEach(i=>{
                setEditName(i.name);
                setEditDesc(i.description);
                setEditLoc(i.location_covered);
                setEditTime(i.timings);
                setEditCName(i.contact_name);
                setEditCNum(i.contact_number); 
                setEditCEmail(i.contact_email); 
                setEditLink(i.link_to_go);
                setEditVerified(i.verified);
                setEditVerifiedBy(i.verified_by);
                setEditSource(i.source);
                setEditComment(i.comments);
                setEditAvailable(i.available);
                setEditPBType(i.type);
                setEditBloodGroup(i.blood_group);
            });
        }
        else if (collectionname==="Medicine")
        {   
            editlist.forEach(i=>{
                setEditName(i.name);
                setEditDesc(i.description);
                setEditLoc(i.location_covered);
                setEditTime(i.timings);
                setEditCName(i.contact_name);
                setEditCNum(i.contact_number); 
                setEditCEmail(i.contact_email); 
                setEditLink(i.link_to_go);
                setEditVerified(i.verified);
                setEditVerifiedBy(i.verified_by);
                setEditSource(i.source);
                setEditComment(i.comments);
                setEditAvailable(i.available);
                setEditMedType(i.type);
                setEditMedName(i.medicine_name);
                setEditOMRCondition(i.condition);
                setEditPrice(i.price);
            });
        }
        else if (collectionname==="Food")
        {   
            editlist.forEach(i=>{
                setEditName(i.name);
                setEditDesc(i.description);
                setEditLoc(i.location_covered);
                setEditTime(i.timings);
                setEditCName(i.contact_name);
                setEditCNum(i.contact_number); 
                setEditCEmail(i.contact_email); 
                setEditLink(i.link_to_go);
                setEditVerified(i.verified);
                setEditVerifiedBy(i.verified_by);
                setEditSource(i.source);
                setEditComment(i.comments);
                setEditAvailable(i.available);
                setEditFoodType(i.type);
            });
        }
        else if (collectionname==="OnlineDoctorConsultation")
        {   
            editlist.forEach(i=>{
                setEditName(i.name);
                setEditDesc(i.description);
                setEditLoc(i.location_covered);
                setEditTime(i.timings);
                setEditCName(i.contact_name);
                setEditCNum(i.contact_number); 
                setEditCEmail(i.contact_email); 
                setEditLink(i.link_to_go);
                setEditVerified(i.verified);
                setEditVerifiedBy(i.verified_by);
                setEditSource(i.source);
                setEditComment(i.comments);
                setEditAvailable(i.available);
                setEditConsultationType(i.type);
            });
        }
        else if (collectionname==="Oxygen")
        {   
            editlist.forEach(i=>{
                setEditName(i.name);
                setEditDesc(i.description);
                setEditLoc(i.location_covered);
                setEditTime(i.timings);
                setEditCName(i.contact_name);
                setEditCNum(i.contact_number); 
                setEditCEmail(i.contact_email); 
                setEditLink(i.link_to_go);
                setEditVerified(i.verified);
                setEditVerifiedBy(i.verified_by);
                setEditSource(i.source);
                setEditComment(i.comments);
                setEditAvailable(i.available);
                setEditOMRCondition(i.condition);
                setEditOxygenType(i.type);
                setEditCapacity(i.capacity);
                setEditPrice(i.price);
            });
        }
        else if (collectionname==="PlasmaDonors")
        {   
            editlist.forEach(i=>{
                setEditName(i.name );
                setEditDesc(i.description);
                setEditLoc(i.location_covered);
                setEditTime(i.timings);
                setEditCName(i.contact_name);
                setEditCNum(i.contact_number); 
                setEditCEmail(i.contact_email); 
                setEditLink(i.link_to_go);
                setEditVerified(i.verified);
                setEditVerifiedBy(i.verified_by);
                setEditSource(i.source);
                setEditComment(i.comments);
                setEditAvailable(i.available);
                setEditBloodGroup(i.blood_group);
                setEditPBType(i.type);
                setEditRecoveryDate(i.covid_recovery_date);
                setEditVaccinated(i.vaccinated);
            });
        }
        else if (collectionname==="Remedesivir")
        {   
            editlist.forEach(i=>{
                setEditName(i.name);
                setEditDesc(i.description);
                setEditLoc(i.location_covered);
                setEditTime(i.timings);
                setEditCName(i.contact_name);
                setEditCNum(i.contact_number); 
                setEditCEmail(i.contact_email); 
                setEditLink(i.link_to_go);
                setEditVerified(i.verified);
                setEditVerifiedBy(i.verified_by);
                setEditSource(i.source);
                setEditComment(i.comments);
                setEditAvailable(i.available);
                setEditOMRCondition(i.condition);
            });
        }
        
    },[editlist, editid]);

    const deleteData = () => {
        db.collection(`${collectionname}`).doc(editid).delete();
    };

    const updateData = () => {
        if (collectionname==="AmbulanceService"||collectionname==="BedAvailability"||collectionname==="HomeTesting"||collectionname==="TeleCounselling")
        {
            db.collection(`${collectionname}`).doc(editid).update({
                id:editid,
                name : editname,
                description : editdesc,
                location_covered : editlocation,
                timings : edittiming,
                contact_name : editcontactname,
                contact_number : editcontactnum,
                contact_email : editcontactemail,
                link_to_go : editlink,
                verified : editverified,
                verified_by : editverifiedby,
                verified_date : new firebase.firestore.FieldValue.serverTimestamp(),
                source : editsource,
                comments : editcomments,
                last_update_time : new firebase.firestore.FieldValue.serverTimestamp(),
                available : editavailable
            })
            .then(() => {
                setEditName("");
                setEditDesc("");
                setEditLoc("");
                setEditTime("");
                setEditCName("");
                setEditCNum("");
                setEditCEmail("");
                setEditLink("");
                setEditVerified("");
                setEditVerifiedBy("");
                setEditSource("");
                setEditComment("");
                setEditAvailable(false);
                setEditId("");
            });
        }
        else if (collectionname==="BloodDonors")
        {   
            db.collection(`${collectionname}`).doc(editid).update({
                id: editid,
                name : editname,
                description : editdesc,
                location_covered : editlocation,
                timings : edittiming,
                contact_name : editcontactname,
                contact_number : editcontactnum,
                contact_email : editcontactemail,
                link_to_go : editlink,
                verified : editverified,
                verified_by : editverifiedby,
                verified_date : new firebase.firestore.FieldValue.serverTimestamp(),
                source : editsource,
                comments : editcomments,
                last_update_time : new firebase.firestore.FieldValue.serverTimestamp(),
                available : editavailable,
                type: editpbtype,
                blood_group: editbloodgroup
            })
            .then(() => {
                setEditName("");
                setEditDesc("");
                setEditLoc("");
                setEditTime("");
                setEditCName("");
                setEditCNum("");
                setEditCEmail("");
                setEditLink("");
                setEditVerified("");
                setEditVerifiedBy("");
                setEditSource("");
                setEditComment("");
                setEditAvailable(false);
                setEditPBType("");
                setEditBloodGroup("");
                setEditId("");           
            });
        }
        else if (collectionname==="Medicine")
        {   
            db.collection(`${collectionname}`).doc(editid).update({
                id:editid,
                name : editname,
                description : editdesc,
                location_covered : editlocation,
                timings : edittiming,
                contact_name : editcontactname,
                contact_number : editcontactnum,
                contact_email : editcontactemail,
                link_to_go : editlink,
                verified : editverified,
                verified_by : editverifiedby,
                verified_date : new firebase.firestore.FieldValue.serverTimestamp(),
                source : editsource,
                comments : editcomments,
                last_update_time : new firebase.firestore.FieldValue.serverTimestamp(),
                available : editavailable,
                type: editmedtype,
                condition : editomrcondition,
                medicine_name : editmedname,
                price : editprice
            })
            .then(() => {
                setEditName("");
                setEditDesc("");
                setEditLoc("");
                setEditTime("");
                setEditCName("");
                setEditCNum("");
                setEditCEmail("");
                setEditLink("");
                setEditVerified("");
                setEditVerifiedBy("");
                setEditSource("");
                setEditComment("");
                setEditAvailable(false);
                setEditMedType("");
                setEditMedName("");
                setEditPrice("");
                setEditOMRCondition("");
                setEditId("");            
            });
        }
        else if (collectionname==="Food")
        {   
            db.collection(`${collectionname}`).doc(editid).update({
                name : editname,
                description : editdesc,
                location_covered : editlocation,
                timings : edittiming,
                contact_name : editcontactname,
                contact_number : editcontactnum,
                contact_email : editcontactemail,
                link_to_go : editlink,
                verified : editverified,
                verified_by : editverifiedby,
                verified_date : new firebase.firestore.FieldValue.serverTimestamp(),
                source : editsource,
                comments : editcomments,
                last_update_time : new firebase.firestore.FieldValue.serverTimestamp(),
                available : editavailable,
                type: editfoodtype,
            })
            .then(() => {
                setEditName("");
                setEditDesc("");
                setEditLoc("");
                setEditTime("");
                setEditCName("");
                setEditCNum("");
                setEditCEmail("");
                setEditLink("");
                setEditVerified("");
                setEditVerifiedBy("");
                setEditSource("");
                setEditComment("");
                setEditAvailable(false);
                setEditFoodType("");
                setEditId(""); 
            });
        }
        else if (collectionname==="OnlineDoctorConsultation")
        {   
            db.collection(`${collectionname}`).doc(editid).update({
                name : editname,
                description : editdesc,
                location_covered : editlocation,
                timings : edittiming,
                contact_name : editcontactname,
                contact_number : editcontactnum,
                contact_email : editcontactemail,
                link_to_go : editlink,
                verified : editverified,
                verified_by : editverifiedby,
                verified_date : new firebase.firestore.FieldValue.serverTimestamp(),
                source : editsource,
                comments : editcomments,
                last_update_time : new firebase.firestore.FieldValue.serverTimestamp(),
                available : editavailable,
                type: editconsultationtype,
            })
            .then(() => {
                setEditName("");
                setEditDesc("");
                setEditLoc("");
                setEditTime("");
                setEditCName("");
                setEditCNum("");
                setEditCEmail("");
                setEditLink("");
                setEditVerified("");
                setEditVerifiedBy("");
                setEditSource("");
                setEditComment("");
                setEditAvailable(false);
                setEditConsultationType("");
                let cover = document.getElementById("cover2");
                let body = document.querySelector("body");
                cover.style.display = "none";
                body.style.overflow = "unset";
                setEditId("");     
            });
        }        
        else if (collectionname==="Oxygen")
        {   
            db.collection(`${collectionname}`).doc(editid).update({
                name : editname,
                description : editdesc,
                location_covered : editlocation,
                timings : edittiming,
                contact_name : editcontactname,
                contact_number : editcontactnum,
                contact_email : editcontactemail,
                link_to_go : editlink,
                verified : editverified,
                verified_by : editverifiedby,
                verified_date : new firebase.firestore.FieldValue.serverTimestamp(),
                source : editsource,
                comments : editcomments,
                last_update_time : new firebase.firestore.FieldValue.serverTimestamp(),
                available : editavailable,
                condition : editomrcondition,
                type : editoxygentype,
                capacity : editcapacity,
                price : editprice
            })
            .then(() => {
                setEditName("");
                setEditDesc("");
                setEditLoc("");
                setEditTime("");
                setEditCName("");
                setEditCNum("");
                setEditCEmail("");
                setEditLink("");
                setEditVerified("");
                setEditVerifiedBy("");
                setEditSource("");
                setEditComment("");
                setEditAvailable(false);
                setEditOMRCondition("");
                setEditOxygenType("");
                setEditCapacity("");
                setEditPrice("");
                let cover = document.getElementById("cover2");
                let body = document.querySelector("body");
                cover.style.display = "none";
                body.style.overflow = "unset";
                setEditId("");
            });
        }
        else if (collectionname==="Remedesivir")
        {   
            db.collection(`${collectionname}`).doc(editid).update({
                name : editname,
                description : editdesc,
                location_covered : editlocation,
                timings : edittiming,
                contact_name : editcontactname,
                contact_number : editcontactnum,
                contact_email : editcontactemail,
                link_to_go : editlink,
                verified : editverified,
                verified_by : editverifiedby,
                verified_date : new firebase.firestore.FieldValue.serverTimestamp(),
                source : editsource,
                comments : editcomments,
                last_update_time : new firebase.firestore.FieldValue.serverTimestamp(),
                available : editavailable,
                condition : editomrcondition,
            })
            .then(() => {
                setEditName("");
                setEditDesc("");
                setEditLoc("");
                setEditTime("");
                setEditCName("");
                setEditCNum("");
                setEditCEmail("");
                setEditLink("");
                setEditVerified("");
                setEditVerifiedBy("");
                setEditSource("");
                setEditComment("");
                setEditAvailable(false);
                setEditOMRCondition("");
                setEditId("");
            });
        }
        else if (collectionname==="PlasmaDonors")
        {   
            db.collection(`${collectionname}`).doc(editid).update({
                name : editname,
                description : editdesc,
                location_covered : editlocation,
                timings : edittiming,
                contact_name : editcontactname,
                contact_number : editcontactnum,
                contact_email : editcontactemail,
                link_to_go : editlink,
                verified : editverified,
                verified_by : editverifiedby,
                verified_date : new firebase.firestore.FieldValue.serverTimestamp(),
                source : editsource,
                comments : editcomments,
                last_update_time : new firebase.firestore.FieldValue.serverTimestamp(),
                available : editavailable,
                type: editpbtype,
                blood_group: editbloodgroup,
                covid_recovery_date: editrecoverydate,
                vaccinated:editvaccinated
            })
            .then(() => {
                setEditName("");
                setEditDesc("");
                setEditLoc("");
                setEditTime("");
                setEditCName("");
                setEditCNum("");
                setEditCEmail("");
                setEditLink("");
                setEditVerified("");
                setEditVerifiedBy("");
                setEditSource("");
                setEditComment("");
                setEditAvailable(false);
                setEditPBType("");
                setEditBloodGroup("");
                setEditRecoveryDate("");
                setEditVaccinated("");
                setEditId("");
            });
        }
               
    };

    return (
    <>
        <div className="edit-box">

        <div className="add-content-flex">

        <div className="form-details" id="form-input">
        <div className="form-data-title">Service Details</div>
        <div className="input-flex">   
        <label className="label">Name<div className="red">*</div></label>
        <input className="edit-input" value={editname} onChange={nameinput} type="text" placeholder="Service Name" maxLength="50"></input>
        </div>
        <div className="input-flex" >   
        <label className="label">Description</label>
        <input className="edit-input" value={editdesc} onChange={descinput} type="text" placeholder="Service Description" maxLength="100"></input>
        </div>
        <div className="input-flex" >   
        <label className="label">Location</label>
        <input className="edit-input" value={editlocation} onChange={locinput} type="text" placeholder="Service Location" maxLength="50"></input>
        </div>
        <div className="input-flex" >   
        <label className="label">Timings</label>
        <input className="edit-input" value={edittiming} onChange={timeinput} type="text" placeholder="Service Timings" maxLength="50"></input>
        </div>
        </div>

        <div className="form-details" id="form-input">
        <div className="form-data-title">Contact Information</div>
        <div className="input-flex" >   
        <label className="label">Contact Name<div className="red">*</div></label>
        <input className="edit-input" value={editcontactname} onChange={cnameinput} type="text" placeholder="Contact Name" maxLength="50"></input>
        </div>
        <div className="input-flex" >   
        <label className="label">Contact Number<div className="red">*</div></label>
        <input className="edit-input" value={editcontactnum} onChange={cnuminput} type="tel" placeholder="Contact Number" minLength="10" maxLength="13"></input>
        </div>
    <div className="input-flex" >   
        <label className="label">Contact Email</label>
        <input className="edit-input" value={editcontactemail} onChange={cemailinput} type="email" placeholder="Contact E-mail" maxLength="50"></input>
    </div>
    <div className="input-flex" >   
        <label className="label">Link</label>
        <input className="edit-input" value={editlink} onChange={linkinput} type="url" placeholder="https://www.examplesite.com"></input>
    </div>
</div>
</div>

<div className="add-content-flex">
<div className="form-details" id="form-input">
<div className="form-data-title">Meta-data</div>
    <div className="input-flex" >   
        <label className="label">Verified<div className="red">*</div></label>
        <input className="edit-input" value={editverified} onChange={verifiedinput} type="number" min="0" max="2" placeholder="0:Yes, 1:No, 2:Pending"></input>
        </div>
    <div className="input-flex" >   
        <label className="label">Verified By</label>
        <input className="edit-input" value={editverifiedby} onChange={verifiedbyinput} type="text" placeholder="Name of Verifier"></input>
    </div>
    <div className="input-flex" >       
        <label className="label">Source</label>
        <input className="edit-input" value={editsource} onChange={sourceinput} type="text" placeholder="Enter Source " maxLength="50"></input>
    </div>
    <div className="input-flex" >       
        <label className="label">Comments</label>
        <input className="edit-input" value={editcomments} onChange={commentinput} type="text" placeholder="Comments" maxLength="50"></input>
    </div>
    <div className="input-flex">
        <label className="label">Available</label>
        <div className="checkbox-container">
        <input className="checkbox" type="checkbox" id="checkedit1" checked={editavailable} onChange={availableinput}/>
        <label htmlFor="checkedit1" className="switch"></label> 
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
                    <input className="edit-input" value={editpbtype} onChange={pbtypeinput} type="number" min="0" max="2" placeholder="0:Platform, 1:Individual, 2:Blood Bank"></input>
                </div>
                <div className="input-flex" >       
                    <label className="label">Blood Group<div className="red">*</div></label>
                    <input className="edit-input" value={editbloodgroup} onChange={bloodgroupinput} type="text" placeholder="Eg. +0  (O-Positive)"></input>
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
                    <input className="edit-input" value={editfoodtype} onChange={foodtypeinput} type="number" min="0" max="2" placeholder="0:Home Chef, 1:NGO, 2:Others"></input>
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
                    <input className="edit-input" value={editomrcondition} onChange={omrconditioninput} type="number" min="0" max="4" placeholder="0:No Stock, 1:Black Market, 2:Purchase, 3:Waiting Period, 4:Rental"></input>
                </div>
                <div className="input-flex" >       
                    <label className="label">Type<div className="red">*</div></label>
                    <input className="edit-input" value={editmedtype} onChange={medtypeinput} type="number" min="0" max="1" placeholder="0:Tablet, 1:Syrup"></input>
                </div>
                <div className="input-flex" >   
                    <label className="label">Medicine Name<div className="red">*</div></label>
                    <input className="edit-input" value={editmedname} onChange={mednameinput} type="text" placeholder="Name" maxLength="50"></input>
                </div>
                <div className="input-flex" >       
                    <label className="label">Price</label>
                    <input className="edit-input" value={editprice} onChange={priceinput} type="text" placeholder="Price (Rupees)"></input>
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
                    <input className="edit-input" value={editconsultationtype} onChange={consultationtypeinput} type="number" min="0" max="1" placeholder="0:Online, 1:Home"></input>
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
                    <input className="edit-input" value={editomrcondition} onChange={omrconditioninput} type="number" min="0" max="4" placeholder="0:No Stock, 1:Black Market, 2:Purchase, 3:Waiting Period, 4:Rental"></input>
                </div>
                <div className="input-flex" >       
                    <label className="label">Type<div className="red">*</div></label>
                    <input className="edit-input" value={editoxygentype} onChange={oxygentypeinput} type="number" min="0" max="2" placeholder="0:Cylinder, 1:Concentrator, 2:Both"></input>
                </div>
                <div className="input-flex" >   
                    <label className="label">Capacity</label>
                    <input className="edit-input" value={editcapacity} onChange={capacityinput} type="text" placeholder="Capacity"></input>
                </div>
                <div className="input-flex" >       
                    <label className="label">Price</label>
                    <input className="edit-input" value={editprice} onChange={priceinput} type="text" placeholder="Price (Rupees)"></input>
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
                    <input className="edit-input" value={editpbtype} onChange={pbtypeinput} type="number" min="0" max="2" placeholder="0:Platform, 1:Individual, 2:Blood Bank"></input>
                </div>
                <div className="input-flex" >       
                    <label className="label">Blood Group<div className="red">*</div></label>
                    <input className="edit-input" value={editbloodgroup} onChange={bloodgroupinput} type="text" placeholder="Eg. +0  (O-Positive)"></input>
                </div>
                <div className="input-flex" >   
                    <label className="label">COVID Recovery Date</label>
                    <input className="edit-input" value={editrecoverydate} onChange={recoverydateinput} type="text" placeholder="Date"></input>
                </div>
                <div className="input-flex">
                    <label className="label">Vaccinated</label>
                    <div className="checkbox-container">
                        <input className="checkbox" type="checkbox" id="checkedit2" checked={editvaccinated} onChange={vaccinatedinput} />
                        <label htmlFor="checkedit2" className="switch"></label> 
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
                    <input className="edit-input" value={editomrcondition} onChange={omrconditioninput} type="number" min="0" max="4" placeholder="0:No Stock, 1:Black Market, 2:Purchase, 3:Waiting Period, 4:Rental"></input>
                </div>
            </div>
        );
    }        
    })()
    }
    </div>
    </div>
    <div className="edit-btn-container">
        <div className="edit-btn-flex">
            <button className="edit-d-btn" id="add-btn" onClick={deleteData}>DELETE</button>
            <button className="edit-u-btn" id="add-btn" onClick={updateData}>UPDATE</button>
        </div>
    </div>

    </>
    );
};

export default Modal;