import React, { useState } from "react";
import { db } from "./fire_config";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Checkbox from "@material-ui/core/Checkbox";
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const Donor = () => {
  const [name, setName] = useState("");
  const [place, setPlace] = useState("");
  const [bloodgroup, setBloodGroup] = useState("");
  const [dateofrecovery, setDateOfRecovery] = useState(null);
  const [number, setNumber] = useState("");
  const [age, setAge] = useState("");
  const [vaccinated, setVaccinated] = useState(false);
  const [vaccinateddate, setVaccinatedDate] = useState(null);

  const [loader, setLoader] = useState(false);

     const donate = () =>{
      let body = document.querySelector("body");
      body.style.overflow = "hidden";      
      let cover = document.getElementById("cover3");
      cover.style.display = "grid";
  }
  
  const closemodal = (e) => {
      let cover = document.getElementById("cover3");
      let body = document.querySelector("body");
      if (e.target === cover) {
          cover.style.display = "none";
          body.style.overflow = "unset";      
      }
  }
  
  const closemodalx = () => {
      let cover = document.getElementById("cover3");
      let body = document.querySelector("body");
      cover.style.display = "none";
      body.style.overflow = "unset"; 
  }

  const handleDateOfRecoveryChange = (dateofrecovery) => {
    setDateOfRecovery(dateofrecovery);
  };

  const handleVaccinatedDateChange = (vaccinateddate) => {
    setVaccinatedDate(vaccinateddate);
  };

  const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: "1rem",
      marginTop: "0",
      fontWeight: "500",
    },
    checkbox: {
      marginLeft: "2rem",
      width: 10,
      height: 10,
      color:"var(--accent)"
    },
    datepicker:{
      margin: "1rem",
    }
  }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);
    db.collection("NeravuPlasmaDonors")
      .add({
        name: name,
        place: place,
        bloodgroup: bloodgroup,
        dateofrecovery: dateofrecovery,
        number: number,
        age: age,
        vaccinated: vaccinated,
        vaccinateddate: vaccinateddate,
        timestamp: new Date(),
      })
      .then(() => {
        toast.success("We have received your submission.", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        setLoader(false);
      })
      .catch((error) => {
        alert(error.message);
        setLoader(false);
      });

    setName("");
    setPlace("");
    setBloodGroup("");
    setDateOfRecovery(null);
    setNumber("");
    setAge("");
    setVaccinated(false);
    setVaccinatedDate(null);
  };

  const classes = useStyles();

  return (

    <>
    <div className="donate-container" onClick={donate}> 
        <div className="donate-title">BECOME A PLASMA DONOR!</div>
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
    
    <div className="cover3" id="cover3" onClick={closemodal}>
    <div className="form-popup">
    <div className="edit-head-container">
                <div className="edit-header">Neravu Plasma Donors</div>
                <div className="edit-close-popup" onClick={closemodalx}>
                    <div className="edit-x1"></div>
                    <div className="edit-x2"></div>
                </div>
      </div>
    <form className="form" onSubmit={handleSubmit}>

    
      <input
        placeholder="Full Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <input
        placeholder="Number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        required
      />

 
      <input
        placeholder="Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
        required
      />

      <input
        placeholder="Place"
        value={place}
        onChange={(e) => setPlace(e.target.value)}
        required
      />

      <InputLabel>Vaccinated</InputLabel>
      <Checkbox
        checked={vaccinated}
        onChange={(e) =>
          setVaccinated(
            e.target.type === "checkbox" ? e.target.checked : e.target.value
          )
        }
        color="var(--accent)"
        className={classes.checkbox }
      />

      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardDatePicker
          placeholder="Vaccination Date"
          disableToolbar
          variant="inline"
          format="dd/MM/yyyy"
          margin="normal"
          id="recovery-date-picker-inline"
          value={vaccinateddate}
          onChange={handleVaccinatedDateChange}
          autoOk={true}
          KeyboardButtonProps={{
            "aria-label": "change date",
          }}
          className={classes.datepicker}
        />
      </MuiPickersUtilsProvider>

      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardDatePicker
          placeholder="Recovery Date"
          disableToolbar
          variant="inline"
          format="dd/MM/yyyy"
          margin="normal"
          id="recovery-date-picker-inline"
          value={dateofrecovery}
          onChange={handleDateOfRecoveryChange}
          autoOk={true}
          KeyboardButtonProps={{
            "aria-label": "change date",
          }}
          className={classes.datepicker}
          required
        />
      </MuiPickersUtilsProvider>

      <FormControl className={classes.formControl}>
        <InputLabel id="bloodgroup-select-label">Blood Group</InputLabel>
        <Select
          labelId="bloodgroup-select-label"
          id="bloodgroup-select"
          value={bloodgroup}
          onChange={(e) => setBloodGroup(e.target.value)}
          required
        >
          <MenuItem value={"A+"}>A+</MenuItem>
          <MenuItem value={"A-"}>A-</MenuItem>
          <MenuItem value={"B+"}>B+</MenuItem>
          <MenuItem value={"B-"}>B-</MenuItem>
          <MenuItem value={"O+"}>O+</MenuItem>
          <MenuItem value={"O-"}>O-</MenuItem>
          <MenuItem value={"AB+"}>AB+</MenuItem>
          <MenuItem value={"AB-"}>AB-</MenuItem>
        </Select>
      </FormControl>

  
      <button type="submit">SUBMIT</button>
      <ToastContainer />
    
    </form>
    </div>
    </div>

    </>

  );
};

export default Donor;