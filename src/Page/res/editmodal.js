import { useEffect, useState } from "react";

const Modal = ({
    editid, 
    collectionname, 
    editlist,
    editname,
    setEditName}) => {

    const [editdesc, setEditDesc] = useState("");
    const [editlocation, setEditLoc] = useState("");
    const [edittiming, setEditTime] = useState("");
    const [editsource, setEditSource] = useState("");
    const [editcontactname, setEditCName] = useState("");
    const [editcontactnum, setEditCNum] = useState("");
    const [editcontactemail, setEditCEmail] = useState("");
    const [editlink, setEditLink] = useState("");
    const [editverified, setEditVerified] = useState();
    const [editverifiedby, setEditVerifiedBy] = useState("");
    const [editcomments, setEditComment] = useState("");
    const [editavailable, setEditAvailable] = useState();
    const [editprice, setEditPrice] = useState("");
    const [editcapacity, setEditCapacity] = useState("");
    const [editmedname, setEditMedName] = useState("");
    const [editbloodgroup, setEditBloodGroup] = useState("");
    const [editrecoverydate, setEditRecoveryDate] = useState("");
    const [editvaccinated, setEditVaccinated] = useState();
    const [editomrcondition, setEditOMRCondition] = useState();
    const [editoxygentype, setEditOxygenType] = useState();
    const [editmedtype, setEditMedType] = useState();
    const [editpbtype, setEditPBType] = useState();
    const [editfoodtype, setEditFoodType] = useState();
    const [editcosultationtype, setEditConsultationType] = useState();

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
                setEditLoc(i.location_coverd);
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
                setEditLoc(i.location_coverd);
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
                setEditLoc(i.location_coverd);
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
                setEditLoc(i.location_coverd);
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
        
    },[editlist, collectionname]);  

    return (
    <>
        <div className="edit-box">

        <div className="add-content-flex">

        <div className="form-details" id="form-input">
        <div className="form-data-title">Service Details</div>
        <div className="input-flex" >   
        <label className="label">Name<div className="red">*</div></label>
        <input className="edit-input" defaultValue={editname} onChange={nameinput} type="text" placeholder="Service Name"></input>
        </div>
        <div className="input-flex" >   
        <label className="label">Description</label>
        <input className="edit-input" defaultValue={editdesc} onChange={descinput} type="text" placeholder="Service Description"></input>
        </div>
        <div className="input-flex" >   
        <label className="label">Location</label>
        <input className="edit-input" defaultValue={editlocation} onChange={locinput} type="text" placeholder="Service Location"></input>
        </div>
        <div className="input-flex" >   
        <label className="label">Timings</label>
        <input className="edit-input" defaultValue={edittiming} onChange={timeinput} type="text" placeholder="Service Timings"></input>
        </div>
        </div>

        <div className="form-details" id="form-input">
        <div className="form-data-title">Contact Information</div>
        <div className="input-flex" >   
        <label className="label">Contact Name<div className="red">*</div></label>
        <input className="edit-input" defaultValue={editcontactname} onChange={cnameinput} type="text" placeholder="Contact Name"></input>
        </div>
        <div className="input-flex" >   
        <label className="label">Contact Number<div className="red">*</div></label>
        <input className="edit-input" defaultValue={editcontactnum} onChange={cnuminput} type="tel" placeholder="Contact Number"></input>
        </div>
    <div className="input-flex" >   
        <label className="label">Contact Email</label>
        <input className="edit-input" defaultValue={editcontactemail} onChange={cemailinput} type="email" placeholder="Contact E-mail"></input>
    </div>
    <div className="input-flex" >   
        <label className="label">Link</label>
        <input className="edit-input" defaultValue={editlink} onChange={linkinput} type="url" placeholder="https://www.examplesite.com"></input>
    </div>
</div>
</div>

<div className="add-content-flex">
<div className="form-details" id="form-input">
<div className="form-data-title">Meta-data</div>
    <div className="input-flex" >   
        <label className="label">Verified<div className="red">*</div></label>
        <input className="edit-input" defaultValue={editverified} onClick={verifiedinput} type="number" min="0" max="2" placeholder="0:Yes, 1:No, 2:Pending"></input>
        </div>
    <div className="input-flex" >   
        <label className="label">Verified By</label>
        <input className="edit-input" defaultValue={editverifiedby} onChange={verifiedbyinput} type="text" placeholder="Name of Verifier"></input>
    </div>
    <div className="input-flex" >       
        <label className="label">Source</label>
        <input className="edit-input" defaultValue={editsource} onChange={sourceinput} type="text" placeholder="Enter Source "></input>
    </div>
    <div className="input-flex" >       
        <label className="label">Comments</label>
        <input className="edit-input" defaultValue={editcomments} onChange={commentinput} type="text" placeholder="Comments"></input>
    </div>
    <div className="input-flex">
        <label className="label">Available</label>
        <div className="checkbox-container">
        <input className="checkbox" type="checkbox" id="checkedit1" defaultChecked={editavailable} onClick={availableinput}/>
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
                    <input className="edit-input" defaultValue={editpbtype} onChange={pbtypeinput} type="number" min="0" max="2" placeholder="0:Platform, 1:Individual, 2:Blood Bank"></input>
                </div>
                <div className="input-flex" >       
                    <label className="label">Blood Group<div className="red">*</div></label>
                    <input className="edit-input" defaultValue={editbloodgroup} onChange={bloodgroupinput} type="text" placeholder="Eg. +0  (O-Positive)"></input>
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
                    <input className="edit-input" defaultValue={editfoodtype} onChange={foodtypeinput} type="number" min="0" max="2" placeholder="0:Home Chef, 1:NGO, 2:Others"></input>
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
                    <input className="edit-input" defaultValue={editomrcondition} onChange={omrconditioninput} type="number" min="0" max="4" placeholder="0:No Stock, 1:Black Market, 2:Purchase, 3:Waiting Period, 4:Rental"></input>
                </div>
                <div className="input-flex" >       
                    <label className="label">Type<div className="red">*</div></label>
                    <input className="edit-input" defaultValue={editmedtype} onChange={medtypeinput} type="number" min="0" max="1" placeholder="0:Tablet, 1:Syrup"></input>
                </div>
                <div className="input-flex" >   
                    <label className="label">Medicine Name<div className="red">*</div></label>
                    <input className="edit-input" defaultValue={editmedname} onChange={mednameinput} type="text" placeholder="Name"></input>
                </div>
                <div className="input-flex" >       
                    <label className="label">Price</label>
                    <input className="edit-input" defaultValue={editprice} onChange={priceinput} type="text" placeholder="Price (Rupees)"></input>
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
                    <input className="edit-input" defaultValue={editcosultationtype} onChange={consultationtypeinput} type="number" min="0" max="1" placeholder="0:Online, 1:Home"></input>
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
                    <input className="edit-input" defaultValue={editomrcondition} onChange={omrconditioninput} type="number" min="0" max="4" placeholder="0:No Stock, 1:Black Market, 2:Purchase, 3:Waiting Period, 4:Rental"></input>
                </div>
                <div className="input-flex" >       
                    <label className="label">Type<div className="red">*</div></label>
                    <input className="edit-input" defaultValue={editoxygentype} onChange={oxygentypeinput} type="number" min="0" max="2" placeholder="0:Cylinder, 1:Concentrator, 2:Both"></input>
                </div>
                <div className="input-flex" >   
                    <label className="label">Capacity</label>
                    <input className="edit-input" defaultValue={editcapacity} onChange={capacityinput} type="text" placeholder="Capacity"></input>
                </div>
                <div className="input-flex" >       
                    <label className="label">Price</label>
                    <input className="edit-input" defaultValue={editprice} onChange={priceinput} type="text" placeholder="Price (Rupees)"></input>
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
                    <input className="edit-input" defaultValue={editpbtype} onChange={pbtypeinput} type="number" min="0" max="2" placeholder="0:Platform, 1:Individual, 2:Blood Bank"></input>
                </div>
                <div className="input-flex" >       
                    <label className="label">Blood Group<div className="red">*</div></label>
                    <input className="edit-input" defaultValue={editbloodgroup} onChange={bloodgroupinput} type="text" placeholder="Eg. +0  (O-Positive)"></input>
                </div>
                <div className="input-flex" >   
                    <label className="label">COVID Recovery Date</label>
                    <input className="edit-input" defaultValue={editrecoverydate} onChange={recoverydateinput} type="text" placeholder="Date"></input>
                </div>
                <div className="input-flex">
                    <label className="label">Vaccinated</label>
                    <div className="checkbox-container">
                        <input className="checkbox" type="checkbox" id="checkedit2" defaultChecked={editvaccinated} onClick={vaccinatedinput} />
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
                    <input className="edit-input" defaultValue={editomrcondition} onChange={omrconditioninput} type="number" min="0" max="4" placeholder="0:No Stock, 1:Black Market, 2:Purchase, 3:Waiting Period, 4:Rental"></input>
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
            <button className="edit-d-btn" id="add-btn">DELETE</button>
            <button className="edit-u-btn" id="add-btn">UPDATE</button>
        </div>
    </div>

    </>
    );
};

export default Modal;