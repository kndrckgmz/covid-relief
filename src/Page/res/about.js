const About = () => {
    // overflow: hidden;
    const share = () =>{
        let body = document.querySelector("body");
        body.style.overflow = "hidden";      
        let cover = document.getElementById("cover2");
        cover.style.display = "grid";
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
        <>
        <div className="info-container" onClick={share}> 
            <div className="about">ABOUT</div>
            <svg xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24"
            className="info">
                <g  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/>
                    <path d="M12 16v-4" />
                <path d="M12 8h.01" />
                </g>
            </svg>
        </div>
        
        <div className="cover2" id="cover2" onClick={closemodal}>
        <div className="info-box">
            <div className="head-container1">
                <div className="info-header">ABOUT COV-INFO</div>
                <div className="close-popup1" onClick={closemodalx}>
                    <div className="x11"></div>
                    <div className="x21"></div>
                </div>
            </div>
            <div className="share-flex1">
                <div className="instruction">
                    How to Use?
                    <p className="para">
                        Add New Link - Enter a Title with an appropriate Description of the contents of the link. The link can be of a social media information page also.
                        <br/>
                        DO NOT ADD UNRELATED OR MALICIOUS LINKS!
                        <br/>
                        <br/>
                        Search - The list of links are shown below the 'Add New Link' area. Read the Description and click the 'GO TO LINK' button to open the link.
                        <br/>
                        <br/>
                        Search Box<sup className="sup">COMING SOON</sup>
                        <br/>
                        Verified Links<sup className="sup">COMING SOON</sup>
                    </p>
                </div>
                <div className="instruction">
                    About
                    <p className="para">
                        This site is maintained and run by a freelance web developer to assist with the ongoing situaton, 
                        if you would like to support this page please contact us through the form below.</p>
                </div>
                <div className="e-form-container">
                    <div className="e-from-title">Have a Suggestion or Issue?</div>
                    <p className="para">Talk to Us.</p>
                    <form className="e-form" action="https://formsubmit.co/covinfo@altmails.com" method="POST">
                        <input type="text" className="e-input-title" name="Title" placeholder="Title" required/>
                        <textarea type="text" className="e-input-desc" name="Description" placeholder="Add your query here..." required/>
                        <button type="submit" className="e-link-btn">SEND</button>
                    </form>
                </div>
            </div>
        </div>
        </div>

        </>
    );
};

export default About;


