import { useEffect, useState } from "react";

const Modal = ({editid, collectionname, editlist, setEditList}) => {

    const [name, setName] = useState("");
    const [id, setId] = useState("");

    useEffect(()=>{
        editlist.forEach(i=>{
            setName(i.name);
            setId(i.id);
        });
        
    },[editlist]);

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