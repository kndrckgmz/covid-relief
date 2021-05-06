import {useState, useEffect} from 'react';
import {db} from './res/fire_config';
import moment from 'moment';
import Data from './res/data';
import Form from './res/entryform';

const Rem = ({user}) => {

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
    const [collectionname, setCollectionName] = useState("Remedesivir");
    const [editlist, setEditList] = useState([]);
    const [editid, setEditId] = useState("");
    const [editname, setEditName] = useState("");
    const [editdesc, setEditDesc] = useState("");
    const [editlocation, setEditLoc] = useState("");
    const [edittiming, setEditTime] = useState("");
    const [editsource, setEditSource] = useState("");
    const [editcontactname, setEditCName] = useState("");
    const [editcontactnum, setEditCNum] = useState("");
    const [editcontactemail, setEditCEmail] = useState("");
    const [editlink, setEditLink] = useState("");
    const [editverified, setEditVerified] = useState("");
    const [editverifiedby, setEditVerifiedBy] = useState("");
    const [editcomments, setEditComment] = useState("");
    const [editavailable, setEditAvailable] = useState();
    const [editomrcondition, setEditOMRCondition] = useState("");
    
    useEffect(()=>{
        setCollectionName("Remedesivir");
    },[]);


    useEffect(() => {
        db.collection(`${collectionname}`).orderBy("last_update_time", "desc")
        .onSnapshot(function(querySnapshot){
            setLinkList(querySnapshot.docs.map ((i)=>({
                comments:i.data().comments,
                contact_email:i.data().contact_email,
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
            })));
            });
    }, [collectionname]);

    return(
        <div className="content" id="top">
        <Form collectionname={collectionname}/>
        <div className="card-grid">
            {linklist.map((i)=>(
                <Data
                key={i.id}
                comments={i.comments}
                contact_email={i.contact_email}
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
                omrcondition={i.condition}
                user={user}
                collectionname={collectionname}
                linklist={linklist}
                setLinkList={setLinkList}
                editlist={editlist}
                setEditList={setEditList}
                editid={editid}
                setEditId={setEditId}
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
                editomrcondition={editomrcondition}
                setEditOMRCondition={setEditOMRCondition}
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

export default Rem;