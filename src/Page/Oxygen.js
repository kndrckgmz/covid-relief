import {useState, useEffect} from 'react';
import Data from './res/data';
import Form from './res/entryform';
import {axios} from './res/axios';

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
    const [collectionname, setCollectionName] = useState("/oxygen");
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
    const [editprice, setEditPrice] = useState("");
    const [editcapacity, setEditCapacity] = useState("");
    const [editomrcondition, setEditOMRCondition] = useState("");
    const [editoxygentype, setEditOxygenType] = useState("");
    const [stateupdate, setStateUpdate] = useState(false);
    
    useEffect( async () => {
        const res = await axios.get(collectionname).catch((err)=>console.log(err));
        if (res && res.data) 
        setLinkList(res.data);
        setStateUpdate(false);
    }, [collectionname, editid, stateupdate]);

    return(
        <div className="content" id="top">
        <Form collectionname={collectionname}
        setStateUpdate={setStateUpdate}/>
        <div className="card-grid">
            {linklist.map((i)=>(
                <Data
                key={i._id}
                comments={i.comments}
                contact_email={i.contact_email}
                contact_name={i.contact_name}
                contact_number={i.contact_number}
                description={i.description}
                id={i._id}
                last_update_time={i.last_update_time}
                link_to_go={i.link_to_go}
                location_covered={i.location_covered}
                name={i.name}
                source={i.source}
                timings={i.timings}
                verified={i.verified}
                verified_by={i.verified_by}
                available={i.available}
                omrcondition={i.condition}
                oxytype={i.type}
                oxycapacity={i.capacity}
                oxyprice={i.price}
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
                editprice={editprice}
                setEditPrice={setEditPrice}
                editcapacity={editcapacity}
                setEditCapacity={setEditCapacity}
                editomrcondition={editomrcondition}
                setEditOMRCondition={setEditOMRCondition}
                editoxygentype={editoxygentype}
                setEditOxygenType={setEditOxygenType}
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

export default Oxygen;