import {useState, useEffect} from 'react';
import Modal from './editmodal';

const Editbtn = ({user, id, collectionname}) => {

    const [edit, setEdit] = useState();
    const [editid, setEditId] = useState();

    useEffect(()=>{
        if(user===true){
            setEdit("flex");
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

    const closemodal = (e) => {
        let cover = document.getElementById("cover2");
        let body = document.querySelector("body");
        if (e.target === cover) {
            cover.style.display = "none";
            body.style.overflow = "unset";
        }
    }

    const closemodalx = () => {
        let cover = document.getElementById("cover2");
        let body = document.querySelector("body");
        cover.style.display = "none";
        body.style.overflow = "unset"; 
    }

    return(
        <div className="edit-container" style={{display: `${edit}`}}>
            
            <div className="edit-btn" onClick={popup} idvalue={id}>EDIT</div>
            
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
            editid={editid}/>


        </div>
        </div>
        </div>
    );
};

export default Editbtn;