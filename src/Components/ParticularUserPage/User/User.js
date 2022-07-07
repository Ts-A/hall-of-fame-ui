//import axios from "axios";
import React, {useState, useEffect, useRef} from 'react';

import Avatar from '@mui/material/Avatar';
import axios from "axios";
import "./module.css";
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Checkbox from '@mui/material/Checkbox';
import { InputLabel, Radio, RadioGroup } from '@mui/material';
import FaceIcon from '@mui/icons-material/Face';
import HelpIcon from '@mui/icons-material/Help';

import ResponsiveAppBar from '../../Header/ResponsiveAppBar';
import { useNavigate, useLocation, Navigate, useParams } from "react-router-dom";
import Footer from '../../Footer/Footer';
import { Responses } from './Responses';




export default function User() {
  
    const [defaultUser, setdefaultUser] = useState(localStorage.getItem("user"));
    const [userData, setUserData] = useState([]);
    const [isSignedIn, setIsSignedIn] = useState(true);
    const [responses, setResponses] = useState(Responses);
    const navigate = useNavigate();
    let props = {
      isSignedIn: isSignedIn,
      bgColor: '#ffffff',
      textColor: '#7584C3'
    };
    
    let {soeid} = useParams();
    useState(() => {
      const url = "http://ec2-43-204-149-158.ap-south-1.compute.amazonaws.com/user/" + soeid;
      const getUser = () => {
        axios.get(url)
        .then(response => {
          console.log(response);
          if(response.status === 200) {
            setUserData(response.data.user);
            setResponses(response.data.user.responses);
            
            
          }
        }) 
        .catch(e => {
          console.log(e);
        }
         );
      }
      getUser();
    },[])

    return (
      <div>
        <ResponsiveAppBar {...props} />
      <div class="container rounded bg-white mt-5 mb-5">
      
      <div class="row">
          <div class="col-md-3 border-right">
              <div class="d-flex flex-column align-items-center text-center p-3 py-5"><img class="rounded-circle mt-5" width="150px" src={userData.display_picture ? userData.display_picture : "" }></img><span class="font-weight-bold">{userData.first_name + " " + userData.last_name}</span><span class="text-black-50">{userData.email}</span><span> </span></div>
          </div>
          <div class="col-md-5 border-right">
              <div class="p-3 py-5">
                  <div class="d-flex justify-content-between align-items-center mb-3">
                  <Grid container spacing={2}>
                  <Grid item xs={5} sm={2}>
                      <h4 class="text-right">Profile</h4>
                  </Grid>
                  <Grid item xs={5} sm={3}>
                    <FaceIcon/>
                  </Grid>
                  </Grid>
                  </div>
                  <div class="row mt-2">
                  <div class="col-md-6"><label class="labels">SOEID</label><input type="text" class="form-control"  disabled readonly value={userData.soe_id} ></input></div>
                  <div class="col-md-6"><label class="labels">Region</label><input type="text" class="form-control"  disabled readonly value={userData.region} ></input></div>
                  
                  <div class="col-md-6"><label class="labels">Profile</label><input type="text" class="form-control"  disabled readonly value={userData.profile_url} ></input></div>
                  <div class="col-md-6"><label class="labels">College</label><input type="text" class="form-control"  disabled readonly value={userData.college} ></input></div>
                  <div class="col-md-6"><label class="labels">Email</label><input type="text" class="form-control"  disabled readonly value={userData.email} ></input></div>
                  <div class="col-md-12"><label class="labels">Bio</label><input type="text" class="form-control"  disabled readonly value={userData.bio} ></input></div>
                  
                      
                  </div>
                  <div class="d-flex justify-content-between align-items-center mb-3">
                  <Grid container spacing={1} alignItems="center">
                  <Grid item xs={7} sm={4.5}>
                      <h4 class="text-right mt-3">Questionnaire</h4>
                  </Grid>
                  <Grid item xs={7} sm={1}>
                    <HelpIcon xs={{}}/>
                  </Grid>
                  </Grid>
                  </div>
                  <div class="row mt-3">
                 
                  {responses.map((response, index) => (
                     response.question.type === "descriptive" ? <div class="col-md-12 m-2"><label class="labels">{response.question.title}</label><input type="text" class="form-control" placeholder="enter phone number" disabled readonly value={response.answer.response} ></input></div> : 
                    
                     <div class="form-check m-2" >
              
                      <div class="form-check form-check-inline">
                        
                    <input class="form-check-input" type="radio" name={"inLineRadioOptions" + response.question.title}  value={response.question.title.split("/")[0]} checked={response.question.title.split("/")[0] === response.answer.response} 
                    disabled={response.question.title.split("/")[0] !== response.answer.response}
                    />
                    <label class="form-check-label" for="inlineRadio1">{response.question.title.split("/")[0]}</label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name={"inLineRadioOptions" + response.question.title}  value={response.question.title.split("/")[1]}  checked={response.question.title.split("/")[1] === response.answer.response}
                    disabled={response.question.title.split("/")[1] !== response.answer.response} />
                    <label class="form-check-label" for="inlineRadio2">{response.question.title.split("/")[1]}</label>
                  </div></div>
                    
                    
                
                
                
                
                        
                    ))}
                  </div>
                  
                  
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