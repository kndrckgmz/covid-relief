import {useState, useEffect} from 'react';
import {db} from './res/fire_config';
import moment from 'moment';
import Beddata from './res/beddata';

const Beds = () => {;
    const [linklist, setLinkList] = useState([]);


    useEffect(() => {
        db.collection("BedAvailability")
        .onSnapshot(function(querySnapshot){
            setLinkList
            (querySnapshot.docs.map((i)=>({
                comments:i.data().comments,
                contact_email:i.data().cantact_email,
                contact_name:i.data().contact_name,
                contact_number:i.data().contact_number,
                description:i.data().description,
                id:i.data().id,
                link_to_go:i.data().link_to_go,
                location_covered:i.data().location_covered,
                name:i.data().name,
                source:i.data().source,
                timings:i.data().timings,
                verified:i.data().verified,
                verified_by:i.data().verified_by,
                verified_date:moment(i.data().verified_date.toDate()).calendar(),
                last_update_time:moment(i.data().last_update_time.toDate()).calendar()
            }))
            );
        });
    }, []); 

    return(
        <div className="content" id="top">
       
        <div className="list-container">
            {linklist.map((i)=>(
                <Beddata
                key={i.id}
                comments={i.comments}
                contact_email={i.cantact_email}
                contact_name={i.contact_name}
                contact_number={i.contact_number}
                description={i.description}
                id={i.id}
                last_update_time={i.last_update_time}
                link_to_go={i.link_to_go}
                location_covered={i.location_covered}
                name={i.name}
                source={i.source}
                timings={i.timings}
                verified={i.verified}
                verified_by={i.verified_by}
                verified_date={i.verified_date}
                />
            ))}
        </div>

        <a className="end" href="#top">PAGE END
            <br/>
            <br/>
            Click here to go back to the top.   
        </a>

        </div>
    );
};

export default Beds;