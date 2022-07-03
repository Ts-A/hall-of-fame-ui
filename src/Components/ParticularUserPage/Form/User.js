//import axios from "axios";
import React, {useState, useEffect, useRef} from 'react';

import Avatar from '@mui/material/Avatar';
import axios from "axios";
import "./module.css";
import { UserData } from './UserData';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Checkbox from '@mui/material/Checkbox';
import { InputLabel, Radio, RadioGroup } from '@mui/material';

import ResponsiveAppBar from '../../Header/ResponsiveAppBar';
import { useNavigate, useLocation, Navigate, useParams } from "react-router-dom";
import Footer from '../../Footer/Footer';
import { Responses } from './Responses';




export default function User() {
  
    //const [defaultUser, setdefaultUser] = useState(localStorage.getItem("user"));
    const [defaultUser, setdefaultUser] = useState("Aditya");
    const [userData, setUserData] = useState(UserData);
    const [isSignedIn, setIsSignedIn] = useState(true);
    const [responses, setResponses] = useState(Responses);
    const navigate = useNavigate();
    let token = "";
    let {username} = useParams();
    useState(() => {
      const getUser = () => {
        axios.get("https://0d92-223-178-110-162.in.ngrok.io/user/AK12345")
        .then(response => {
          console.log(response);
          if(response.status === 200) {
            setResponses(response.data.user.responses);

            let tempUserData = [];
            tempUserData.push(...userData);
            tempUserData[0].value = response.data.user.first_name;
            tempUserData[1].value = response.data.user.last_name;
            tempUserData[2].value = response.data.user.soe_id;
            setUserData(tempUserData);
          }
        }) 
        .catch(e => {
          console.log(e);
        }
         );
      }
      //getUser();
    })
    const handleEdit = () => {
        console.log("Edit");
        navigate("/user/" + username + "/edit");
    }
    

    return (
      <div>
        <ResponsiveAppBar props ={isSignedIn} />
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
                      {userData.map((user, index) => (
                        <div class="col-md-6"><label class="labels">{user.label}</label><input type="text" class="form-control" disabled readonly placeholder={user.label} value={user.value} onChange={(e) => {
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
                  {responses.map((response, index) => (
                     response.question.type === "descriptive" ? <div class="col-md-12"><label class="labels">{response.question.title}</label><input type="text" class="form-control" placeholder="enter phone number" disabled readonly value={response.answer.response} ></input></div> : 
                    
                    <div><div class="form-check form-check-inline"> 
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" {...response.question.title.split("/")[0] === response.answer.response ? "checked"  : "disabled"} />
                    <label class="form-check-label" for="inlineRadio1">{response.question.title.split("/")[0]}</label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"  {...response.question.title.split("/")[1] === response.answer.response ? "checked" : "disabled"}/>
                    <label class="form-check-label" for="inlineRadio2">{response.question.title.split("/")[1]}</label>
                  </div></div>
                    
                    
                
                
                
                
                        
                    ))}
                  </div>
                  <div class="row mt-3">
                      <div class="col-md-6"><label class="labels">Country</label><input type="text" class="form-control" placeholder="country" value=""></input></div>
                      <div class="col-md-6"><label class="labels">State/Region</label><input type="text" class="form-control" value="" placeholder="state"></input></div>
                  </div>
                  <div class="mt-5 text-center">{username === defaultUser ? <button class="btn btn-primary profile-button" type="button" onClick={handleEdit}>Edit</button> : <br />}</div>
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
  <Footer />
  </div>
      
   
  );
}




// {defaultUser !== username ? <Button variant="contained" onClick={(
          
//   ) => {navigate("/user/" + username + "/edit") }}>Edit</Button> :  <p>Only for view</p> }