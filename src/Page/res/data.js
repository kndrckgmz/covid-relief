import {useEffect, useState} from 'react';
import Editbtn from './edit';
const Data = (
    {user,
    id,
    comments,
    contact_email,
    contact_name,
    contact_number,
    description,
    last_update_time,
    link_to_go,
    location_covered,
    name,
    source,
    timings,
    verified,
    verified_by,
    verified_date,
    available,
    covid_recovery_date,
    vaccinated,
    oxytype,
    oxyprice,
    oxycapacity,
    omrcondition,
    medtype,
    medicine_name,
    medprice,
    consultationtype,
    foodtype,
    pbtype,
    blood_group,
    collectionname,
    linklist,
    setLinkList,
    editlist, 
    setEditList,
    editid,
    setEditId,
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
    setEditConsultationType,
    }
    ) => {
        
    const [verifiedtext, setVerifiedText] = useState();
    const [verifiedbytext, setVerifiedByText] = useState();
    const [verifieddatetext, setVerifiedDateText] = useState();
    const [color, setColor] = useState();
    const [pbtypetext, setPBTypetext] = useState();
    const [foodtypetext, setFoodTypetext] = useState();
    const [consulttext, setConsultConditionText] = useState();
    const [omrconditiontext, setOMRConditionText] = useState();
    const [medtypetext, setMedTypeText] = useState();
    const [oxytypetext, setOxyTypeText] = useState();
    const [vaccinatedtext, setVaccinatedText] = useState();


    useEffect(()=>{
        if(vaccinated===true)
        {
            setVaccinatedText("Yes");
        }
        else
        {
            setVaccinatedText("No");
        }
    },[vaccinated]);

    useEffect(()=>{
        if(oxytype==="0")
        {
            setOxyTypeText("Cylinder");
        }
        else if(oxytype==="1")
        {
            setOxyTypeText("Concentrator");
        }
        else if(oxytype==="2")
        {
            setMedTypeText("Both");
        }
        else
        {
            setOxyTypeText("No Data");
        }
    },[oxytype]);

    useEffect(()=>{
        if(medtype==="0")
        {
            setMedTypeText("Tablet");
        }
        else if(medtype==="1")
        {
            setMedTypeText("Syrup");
        }
        else 
        {
            setMedTypeText("No Data");
        }
    },[medtype]);

    useEffect(()=>{
        if(omrcondition==="0")
        {
            setOMRConditionText("No Stock");
        }
        else if(omrcondition==="1")
        {
            setOMRConditionText("Black Market");
        }
        else if(omrcondition==="2")
        {
            setOMRConditionText("Purchase");
        }
        else if(omrcondition==="3")
        {
            setOMRConditionText("Waiting Period");
        }
        else if(omrcondition==="4")
        {
            setOMRConditionText("Rental");
        }
        else 
        {
            setOMRConditionText("No Data");
        }
    },[omrcondition]);

    useEffect(()=>{
        if(consultationtype==="0")
        {
            setConsultConditionText("Online");
        }
        else if(consultationtype==="1")
        {
            setConsultConditionText("Home");
        }
        else 
        {
            setConsultConditionText("No Data");
        }
    },[consultationtype]);

    useEffect(()=>{
        if(foodtype==="0")
        {
            setFoodTypetext("Home Chef");
        }
        else if(foodtype==="1")
        {
            setFoodTypetext("NGO");
        }
        else if(foodtype==="2")
        {
            setFoodTypetext("Other");
        }
        else 
        {
            setFoodTypetext("No Data");
        }
    },[foodtype]);

    useEffect(()=>{
        if(pbtype==="0")
        {
            setPBTypetext("Platform");
        }
        else if(pbtype==="1")
        {
            setPBTypetext("Individual");
        }
        else if(pbtype==="2")
        {
            setPBTypetext("Blood Bank");
        }
        else 
        {
            setPBTypetext("No Data");
        }
    },[pbtype]);


    //verification check
    useEffect(() => {
        if(verified==="0")
        {
            setVerifiedText("Verified"); 
            setVerifiedByText(verified_by);
            setVerifiedDateText(verified_date);
            setColor("var(--green)");
        }
        else if(verified==="1")
        {
            setVerifiedText("Not Verified");
            setVerifiedByText("Null");
            setVerifiedDateText("Null");
            setColor("var(--dgrey)");
        }
        else
        {
            setVerifiedText("Verificaiton Pending");
            setVerifiedByText("Null");
            setVerifiedDateText("Null");
            setColor("var(--yellow)");
        }
    }, [verified, verified_by, verified_date]);

    



    return(
        <div className="card">
            
            <div className="name-container">
                <div className="name">{name}</div>
                <div className="verified-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 24 24">
                        <path className="verification-icon" style={{fill: `${color}`}} id="verification-icon" d="M22.42 11.34l-1.86-2.13l.26-2.82c.05-.5-.29-.96-.77-1.07l-2.76-.62l-1.44-2.44c-.26-.43-.79-.61-1.26-.41L12 2.96L9.41 1.85c-.46-.2-1-.02-1.25.41L6.71 4.69l-2.75.62c-.49.11-.83.56-.78 1.06l.26 2.83l-1.87 2.14c-.33.38-.33.94 0 1.32l1.87 2.13l-.26 2.83c-.05.5.29.96.77 1.07l2.76.63l1.44 2.43c.26.43.8.61 1.26.41L12 21.03l2.59 1.11c.46.2 1 .02 1.25-.41l1.44-2.43l2.76-.63c.49-.11.82-.57.77-1.07l-.26-2.82l1.86-2.13a.98.98 0 0 0 .01-1.31zm-12.19 3.49l-2.12-2.12a.996.996 0 1 1 1.41-1.41l1.41 1.41l3.54-3.54a.996.996 0 1 1 1.41 1.41l-4.24 4.24c-.38.4-1.02.4-1.41.01z"/>
                    </svg>
      
                    <div className="verified-card" id="verified-card">    
                        <div className="data-container">Verification Status: 
                        <div className="data">{verifiedtext}</div>
                        </div>
                        <div className="data-container">Verified By: 
                        <div className="data">{verifiedbytext}</div>
                        </div>
                    </div>
                </div>
            </div>

            <Editbtn
            key={id}
            user={user}
            collectionname={collectionname}
            id={id} 
            editlist={editlist}
            setEditList={setEditList} 
            linklist={linklist}
            setLinkList={setLinkList}
            editid={editid}
            setEditId={setEditId}
            available={available}
            editname={editname}
            setEditName={setEditName}
            editdesc={editdesc}
            setEditDesc={setEditDesc}
            editlocation={editlocation}
            setEditLoc={setEditLoc}
            edittiming={edittiming}
            setEditTime={setEditTime}
            editsource={editsource}
            setEditSource={setEditSource}
            editcontactname={editcontactname}
            setEditCName={setEditCName}
            editcontactemail={editcontactemail}
            setEditCEmail={setEditCEmail}
            editcontactnum={editcontactnum}
            setEditCNum={setEditCNum}
            editlink={editlink}
            setEditLink={setEditLink}
            editverified={editverified}
            setEditVerified={setEditVerified}
            editverifiedby={editverifiedby}
            setEditVerifiedBy={setEditVerifiedBy}
            editcomments={editcomments}
            setEditComment={setEditComment}
            editavailable={editavailable}
            setEditAvailable={setEditAvailable}

            editprice={editprice}
            setEditPrice={setEditPrice}
            editcapacity={editcapacity}
            setEditCapacity={setEditCapacity}
            editmedname={editmedname}
            setEditMedName={setEditMedName}
            editmedtype={editmedtype}
            setEditMedType={setEditMedType}
            editbloodgroup={editbloodgroup}
            setEditBloodGroup={setEditBloodGroup}
            editrecoverydate={editrecoverydate}
            setEditRecoveryDate={setEditRecoveryDate}
            editvaccinated={editvaccinated}
            setEditVaccinated={setEditVaccinated}
            editomrcondition={editomrcondition}
            setEditOMRCondition={setEditOMRCondition}
            editoxygentype={editoxygentype}
            setEditOxygenType={setEditOxygenType}
            editpbtype={editpbtype}
            setEditPBType={setEditPBType}
            editfoodtype={editfoodtype}
            setEditFoodType={setEditFoodType}
            editconsultationtype={editconsultationtype}
            setEditConsultationType={setEditConsultationType}/>

            <div className="content-flex">

                <div className="details">
                    <div className="data-container">Description: 
                        <div className="data">{description}</div>
                    </div>
                    <div className="data-container">Location: 
                        <div className="data">{location_covered}</div>
                    </div>
                    <div className="data-container">Timings: 
                        <div className="data">{timings}</div>
                    </div>
                    <div className="data-container">Comments: 
                        <div className="data">{comments}</div>
                    </div>
                    <div className="data-container">Last Updated: 
                        <div className="data">{last_update_time}</div>
                    </div>
                </div>

                <div className="details">
                    <div className="data-container">Contact Name: 
                        <div className="data">{contact_name}</div>
                    </div>
                    <div className="data-container">Contact Number: 
                        <div className="data">{contact_number}</div>
                    </div>
                    <div className="data-container">Contact Email: 
                        <div className="data">{contact_email}</div>
                    </div>
                    <div className="data-container">Link: 
                        <a href={link_to_go} target="_blank" without rel="noreferrer" className="data">{link_to_go}</a>
                    </div>
                    <div className="data-container">Source: 
                        <div className="data">{source}</div>
                    </div>
                </div>


                {
                (()=> {
                if (collectionname==="BloodDonors")
                {
                    return (                    
                    <div className="extra">
                    <div className="data-container">Blood Type: 
                        <div className="data">{pbtypetext}</div>
                    </div>
                    <div className="data-container">Blood Group: 
                        <div className="data">{blood_group}</div>
                    </div>
                    </div>);
                }
                else if (collectionname==="Food")
                {
                    return (
                        <div className="extra">
                        <div className="data-container">Type: 
                            <div className="data">{foodtypetext}</div>
                        </div>
                        </div>
                    );
                }
                else if (collectionname==="Medicine")
                {
                    return (
                        <div className="extra">
                        <div className="data-container">Condition: 
                            <div className="data">{omrconditiontext}</div>
                        </div>
                        <div className="data-container">Type: 
                            <div className="data">{medtypetext}</div>
                        </div>
                        <div className="data-container">Medicine Name: 
                            <div className="data">{medicine_name}</div>
                        </div>
                        <div className="data-container">Price: 
                            <div className="data">{medprice}</div>
                        </div>
                        </div>
                    );
                }
                else if (collectionname==="OnlineDoctorConsultation")
                {
                    return (
                        <div className="extra">
                        <div className="data-container">Condition: 
                            <div className="data">{consulttext}</div>
                        </div>
                        </div>
                    );
                }
                else if (collectionname==="Oxygen")
                {
                    return (
                        <div className="extra">
                        <div className="data-container">Condition: 
                            <div className="data">{omrconditiontext}</div>
                        </div>
                        <div className="data-container">Type: 
                            <div className="data">{oxytypetext}</div>
                        </div>
                        <div className="data-container">Capacity: 
                            <div className="data">{oxycapacity}</div>
                        </div>
                        <div className="data-container">Price: 
                            <div className="data">{oxyprice}</div>
                        </div>
                        </div>
                    );
                }
                else if (collectionname==="PlasmaDonors")
                {
                    return (
                        <div className="extra">
                        <div className="data-container">Blood Group: 
                            <div className="data">{blood_group}</div>
                        </div>
                        <div className="data-container">Type: 
                            <div className="data">{pbtypetext}</div>
                        </div>
                        <div className="data-container">Covid Recovery Date: 
                            <div className="data">{covid_recovery_date}</div>
                        </div>
                        <div className="data-container">Vaccinated: 
                            <div className="data">{vaccinatedtext}</div>
                        </div>
                        </div>
                    );
                }
                else if (collectionname==="Remedesivir")
                {
                    return (
                        <div className="extra">
                        <div className="data-container">Condition: 
                            <div className="data">{omrconditiontext}</div>
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
        </div>
    );
};

export default Data;