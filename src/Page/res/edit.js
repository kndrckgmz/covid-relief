import {useState, useEffect} from 'react';
import Modal from './editmodal';

const Editbtn = ({
    user,
    id, 
    collectionname, 
    editlist,
    setEditList,
    linklist,
    setLinkList,
    editid,
    setEditId,
    available}) => {

    const [edit, setEdit] = useState();
    const [availabletext, setAvailableText] = useState();
    
    useEffect(()=>{
        let avail = document.getElementById("avail");
        if(available===true)
        {
            setAvailableText("Available");
            avail.style.color="var(--green)";
        }
        else if(available===false)
        {
            setAvailableText("Currently Unavailable");
            avail.style.color="var(--red)";
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
    },[editid, setEditList, linklist])

    const closemodal = (e) => {
        let cover = document.getElementById("cover2");
        let body = document.querySelector("body");
        if (e.target === cover) {
            cover.style.display = "none";
            body.style.overflow = "unset";
        }
        setEditList([]);
        setEditId("");
    }

    const closemodalx = () => {
        let cover = document.getElementById("cover2");
        let body = document.querySelector("body");
        cover.style.display = "none";
        body.style.overflow = "unset";
        setEditList([]);
        setEditId("");
    }

    return(
        <div className="edit-container" >

            <div className="available" id="avail">{availabletext}</div>
            <div className="edit-btn" style={{display: `${edit}`}} onClick={popup} idvalue={id}>EDIT</div>
            
        <div className="cover2" id="cover2" onClick={closemodal}>
        <div className="info-box">
            
            <div className="head-container1">
                <div className="info-header">EDIT</div>
                <div className="close-popup1" onClick={closemodalx}>
                    <div className="x11"></div>
                    <div className="x21"></div>
                </div>
            </div>
        
            <Modal 
            key={id}
            collectionname={collectionname}
            editid={editid}
            editlist={editlist}
            setEditList={setEditList}/>


        </div>
        </div>
        </div>
    );
};

export default Editbtn;