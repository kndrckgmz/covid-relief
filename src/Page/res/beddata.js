import {useEffect, useState} from 'react';

const Beddata = (
    {comments,
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
    verified_date}
    ) => {
        
    const [verifiedtext, setVerifiedText] = useState();
    const [verifiedbytext, setVerifiedByText] = useState();
    const [verifieddatetext, setVerifiedDateText] = useState();

    useEffect(() => {
        let btn=document.getElementById("verified-btn");
        if(verified===false){
            btn.style.fill="var(--dgrey)";
            setVerifiedText("No"); 
            setVerifiedByText("null");
            setVerifiedDateText("null");       
        }
        else
        {
            btn.style.fill="var(--accent)";
            setVerifiedText("Yes");
            setVerifiedByText(verified_by);
            setVerifiedDateText(verified_date); 
        }
    }, [verified,verified_by,verified_date])    

    return(
        <div className="card">

            <div className="name-container">
                <div className="name">{name}</div>
                <div className="verified-btn" id="verified-btn">
                <svg xmlns="http://www.w3.org/2000/svg" 
                preserveAspectRatio="xMidYMid meet" 
                viewBox="0 0 24 24">
                    <path d="M22.42 11.34l-1.86-2.13l.26-2.82c.05-.5-.29-.96-.77-1.07l-2.76-.62l-1.44-2.44c-.26-.43-.79-.61-1.26-.41L12 2.96L9.41 1.85c-.46-.2-1-.02-1.25.41L6.71 4.69l-2.75.62c-.49.11-.83.56-.78 1.06l.26 2.83l-1.87 2.14c-.33.38-.33.94 0 1.32l1.87 2.13l-.26 2.83c-.05.5.29.96.77 1.07l2.76.63l1.44 2.43c.26.43.8.61 1.26.41L12 21.03l2.59 1.11c.46.2 1 .02 1.25-.41l1.44-2.43l2.76-.63c.49-.11.82-.57.77-1.07l-.26-2.82l1.86-2.13a.98.98 0 0 0 .01-1.31zm-12.19 3.49l-2.12-2.12a.996.996 0 1 1 1.41-1.41l1.41 1.41l3.54-3.54a.996.996 0 1 1 1.41 1.41l-4.24 4.24c-.38.4-1.02.4-1.41.01z"/>
                </svg>
      
                    <div className="verified-card" id="verified-card">    
                        <div className="data-container">Verified: 
                        <div className="data">{verifiedtext}</div>
                        </div>
                        <div className="data-container">Verified By: 
                        <div className="data">{verifiedbytext}</div>
                        </div>
                        <div className="data-container">Verification Date: 
                        <div className="data">{verifieddatetext}</div>
                        </div>
                    </div>
                </div>  
            </div>

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

                <div className="contact">
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
                        <a href={link_to_go} className="data">{link_to_go}</a>
                    </div>
                    <div className="data-container">Source: 
                        <div className="data">{source}</div>
                    </div>
                </div>

            </div>            

        </div>
    );
};

export default Beddata;