import {useState, useEffect} from 'react';
import Modal from './editmodal';

const Editbtn = ({
    user,
    id, 
    collectionname, 
    editlist,
    setEditList,
    linklist,
    editid,
    setEditId,
    available,
    editname,
    setEditName}) => {

    const [edit, setEdit] = useState();
    const [availabletext, setAvailableText] = useState();
    const [availablecolor, setAvailableColor] = useState(); 

    useEffect(()=>{

        if(available===true)
        {
            setAvailableText("Available");
            setAvailableColor("var(--green)");
        }
        else if(available===false)
        {
            setAvailableText("Currently Unavailable");
            setAvailableColor("var(--red)");
        }
    },[available]);

    useEffect(()=>{
        if(user===true){
            setEdit("grid");
        }
        else
        {
            setEdit("none");
        }
    },[user]);

    const popup = (e) =>{
        let body = document.querySelector("body");
        body.style.overflow = "hidden";      
        let cover = document.getElementById("cover2");
        cover.style.display = "grid";
        setEditId(e.target.getAttribute("idvalue"));
    }

    useEffect(()=>{
        setEditList(linklist.filter(i=>i.id===editid));
    },[editid, linklist, setEditList])

    const closemodal = (e) => {
        let cover = document.getElementById("cover2");
        let body = document.querySelector("body");
        if (e.target === cover) {
            cover.style.display = "none";
            body.style.overflow = "unset";
        }
        setEditId("");
    }

    const closemodalx = () => {
        let cover = document.getElementById("cover2");
        let body = document.querySelector("body");
        cover.style.display = "none";
        body.style.overflow = "unset";
        setEditId("");
    }

    return(
        <div className="edit-container" >

            <div className="available" style={{color: `${availablecolor}`}}>{availabletext}</div>
            <div className="edit-btn" style={{display: `${edit}`}} onClick={popup} idvalue={id}>EDIT</div>
            
        <div className="edit-cover" id="cover2" onClick={closemodal}>
 
        <div className="edit-modal">

            <div className="edit-head-container">
                <div className="edit-header">EDIT</div>
                <div className="edit-close-popup" onClick={closemodalx}>
                    <div className="edit-x1"></div>
                    <div className="edit-x2"></div>
                </div>
            </div>
        
            <Modal 
            key={id}
            collectionname={collectionname}
            editid={editid}
            editlist={editlist}
            setEditList={setEditList}
            editname={editname}
            setEditName={setEditName}/>     
  
        </div>
        </div>
        </div>
    );
};

export default Editbtn;