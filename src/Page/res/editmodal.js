import { useEffect, useState } from "react";
import {db} from './fire_config';
import moment from 'moment';

const Modal = ({editid, collectionname}) => {

    const [editlist, setEditList] = useState([]);
    const [name, setName] = useState("");
    const [id, setId] = useState("");

    useEffect(()=>{
        editlist.map(i=>{
            setName(i.name);
            setId(i.id);
        });
    },[editlist]);

    useEffect(()=>{
        db.collection(`${collectionname}`).where("id", "==", editid !== undefined ? editid : "")
        .onSnapshot(function(querySnapshot){
            setEditList(querySnapshot.docs.map ((i)=>({
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
                                    : "Null"
            })));
            });
    }, [editid, collectionname]);

    return (
    <>
        {editlist !== undefined ?
            (
                <div className="share-flex1" >
                    <div className="instruction">
                        {name}
                    </div>
                    <div className="instruction">
                        {id}
                    </div>
                </div>
            )
            :
            (
                <div className="share-flex1">
                <div className="instruction">
                    No data
                </div>
                </div>
            )
        }
    </>
    );



};


export default Modal;