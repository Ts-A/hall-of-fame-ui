//import axios from "axios";
import React, {useState, useEffect, useRef} from 'react';

import Avatar from '@mui/material/Avatar';
import axios from "axios";
import "./module.css";
import { Questions } from './Questions';
import { UserData } from './UserData';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Checkbox from '@mui/material/Checkbox';
import { InputLabel, Radio, RadioGroup } from '@mui/material';


import { useNavigate, useLocation, Navigate, useParams } from "react-router-dom";




export default function User() {
  
    //const [defaultUser, setdefaultUser] = useState(localStorage.getItem("user"));
    const [defaultUser, setdefaultUser] = useState("");
    const [userData, setUserData] = useState(UserData);
    const [questions, setQuestions] = useState(Questions);
    const navigate = useNavigate();
    let token = "";
    let {username} = useParams();
    const getUser = () => {
      axios
      .get(URL + "user/" + {username} + "/questions", {
        token: token,
      })
      .then((response) => {
        console.log(response.data);
        setUserData(response.data.userData);
        setQuestions(response.data.questions);   
      })
      .catch(function (error) {
        console.log(error);
      });
    }

    //  useEffect(() => {
    //   getUser();
    // })
    const handleSubmit = () => {
        axios
      .post(URL + "user/" + {username} + "/questions", {
        token: token,
        questions : questions,
        userData: userData
      })
      .then((response) => {
        console.log(response.data);
        navigate("/user/" + {username});
      })
      .catch(function (error) {
        console.log(error);
      });
    }


    return ( 
    <div class="container rounded bg-white mt-5 mb-5">
      <div class="row">
          <div class="col-md-3 border-right">
              <div class="d-flex flex-column align-items-center text-center p-3 py-5"><img class="rounded-circle mt-5" width="150px" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"></img><span class="font-weight-bold">Edogaru</span><span class="text-black-50">edogaru@mail.com.my</span><span> </span></div>
          </div>
          <div class="col-md-5 border-right">
              <div class="p-3 py-5">
                  <div class="d-flex justify-content-between align-items-center mb-3">
                      <h4 class="text-right">Profile</h4>
                  </div>
                  <div class="row mt-2">
                      {userData.map((question, index) => (
                        <div class="col-md-6"><label class="labels">{question.q}</label><input type="text" class="form-control" placeholder={question.q} value={question.a} onChange={(e) => {
                            let tempData = [];
                            tempData.push(...userData);
                            tempData[index].a = e.target.value;
                            setUserData(tempData);
                        }}></input></div>
                    ))}
                      
                  </div>
                  <div class="d-flex justify-content-between align-items-center mb-3">
                      <h4 class="text-right mt-3">Questionnaire</h4>
                  </div>
                  <div class="row mt-3">
                  {questions.map((question, index) => (


                     question.k === "q" ? <div class="col-md-12"><label class="labels">{question.q}</label><input type="text" class="form-control" placeholder="enter phone number" value={question.a} onChange={(e) => {
                        let tempQuestions = [];
                        tempQuestions.push(...questions);
                        tempQuestions[index].a = e.target.value;
                        setQuestions(tempQuestions)
                    }}></input></div> : 
                    <FormControl>
                    <FormLabel id="demo-row-radio-buttons-group-label">Given a choice, which one would you prefer?</FormLabel>
                    <RadioGroup
                      row
                      aria-labelledby="demo-row-radio-buttons-group-label"
                      name="row-radio-buttons-group"
                      onChange={(e) => {
                        let tempData = {...userData};
                            tempData.internshipPreference = e.target.value;
                            setUserData(tempData);
                       }}  
                    >
                        <FormControlLabel value="virtual" control={<Radio />} label="Virtual internship" />
                        <FormControlLabel value="offline" control={<Radio />} label="In-Office internship" />
                       </RadioGroup>
                      </FormControl>
                
                
                
                
                
                
                        
                    ))}
                  </div>
                  <div class="row mt-3">
                      <div class="col-md-6"><label class="labels">Country</label><input type="text" class="form-control" placeholder="country" value=""></input></div>
                      <div class="col-md-6"><label class="labels">State/Region</label><input type="text" class="form-control" value="" placeholder="state"></input></div>
                  </div>
                  <div class="mt-5 text-center"><button class="btn btn-primary profile-button" type="button" onClick={handleSubmit}>Save Profile</button></div>
              </div>
          </div>
          <div class="col-md-4">
              <div class="p-3 py-5">
                  <div class="d-flex justify-content-between align-items-center experience"><span>Edit Experience</span><span class="border px-3 p-1 add-experience"><i class="fa fa-plus"></i>&nbsp;Experience</span></div><br></br>
                  <div class="col-md-12"><label class="labels">Experience in Designing</label><input type="text" class="form-control" placeholder="experience" value=""></input></div> <br></br>
                  <div class="col-md-12"><label class="labels">Additional Details</label><input type="text" class="form-control" placeholder="additional details" value=""></input></div>
              </div>
          </div>
      </div>
  </div>
   
  );
}




// {defaultUser !== username ? <Button variant="contained" onClick={(
          
//   ) => {navigate("/user/" + username + "/edit") }}>Edit</Button> :  <p>Only for view</p> }