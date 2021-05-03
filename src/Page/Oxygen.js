import {useState, useEffect} from 'react';
import {db} from './res/fire_config';
import moment from 'moment';
import Data from './res/data';
import Form from './res/entryform';

const Oxygen = ({user}) => {

    useEffect(()=>{
        let form=document.getElementById("form");
        if(user===true){
            form.style.display="flex";
        }
        else
        {
            form.style.display="none";
        }
    },[user]);

    const [linklist, setLinkList] = useState([]);
    const [collectionname, setCollectionName] = useState("Oxygen");
    const [editlist, setEditList] = useState([]);
    const [editid, setEditId] = useState();
    
    useEffect(()=>{
        setCollectionName("Oxygen");
    },[]);


    useEffect(() => {
        db.collection(`${collectionname}`).orderBy("last_update_time", "desc")
        .onSnapshot(function(querySnapshot){
            setLinkList(querySnapshot.docs.map ((i)=>({
                comments:i.data().comments,
                contact_email:i.data().cantact_email,
                contact_name:i.data().contact_name,
                contact_number:i.data().contact_number,
                description:i.data().description,
                id: i.data().id,
                link_to_go:i.data().link_to_go,
                location_covered:i.data().location_covered,
                name:i.data().name,
                source:i.data().source,
                timings:i.data().timings,
                verified:i.data().verified,
                verified_by:i.data().verified_by,
                verified_date:i.data().verified_date 
                                ? moment(i.data().verified_date.toDate()).calendar()
                                : "Null",
                last_update_time:i.data().last_update_time 
                                    ? moment(i.data().last_update_time.toDate()).calendar()
                                    : "Null",
                available:i.data().available,
                condition:i.data().condition,
                type:i.data().type,
                capacity:i.data().capacity,
                price:i.data().price                  
            })));
            });
    }, [collectionname]);

    return(
        <div className="content" id="top">
        <Form collectionname={collectionname}/>
            {linklist.map((i)=>(
                <Data
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
                available={i.available}
                condition={i.condition}
                type={i.type}
                capacity={i.capacity}
                price={i.price}
                user={user}
                collectionname={collectionname}
                linklist={linklist}
                setLinkList={setLinkList}
                editlist={editlist}
                setEditList={setEditList}
                editid={editid}
                setEditId={setEditId}
                />
            ))}
            <a className="end" href="#top">PAGE END
            <br/>
            <br/>
            Click here to go back to the top.   
        </a>
        </div>
    );
};

export default Oxygen;