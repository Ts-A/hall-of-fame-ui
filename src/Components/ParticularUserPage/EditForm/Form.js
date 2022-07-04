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
import ResponsiveAppBar from '../../Header/ResponsiveAppBar';
import Footer from '../../Footer/Footer';



export default function User() {
  
    //const [defaultUser, setdefaultUser] = useState(localStorage.getItem("user"));
    const [questions, setQuestions] = useState(Questions);
    const [answers, setAnswers] = useState([]);
    const [isSignedIn, setIsSignedIn] = useState(true);
    const navigate = useNavigate();

   

    let {username} = useParams();
    useEffect(() => {
      axios({
        method: 'GET',
        url: "http://localhost:4000/question",
      })
      .then(response => {
        console.log(response.data);
        if(response.status === 200) {
          setQuestions(response.data.questions);
        }
      }) 
      .catch(e => {
        console.log(e);
      }
       );
      
    },[])
    useEffect(() => {
      loadAnswers();
    },[questions])
    const loadAnswers = () => {
      let tempAnswers = [];
          questions.map(question => {
            tempAnswers.push({
              title : question.title,
              response : "",
              type : question.type
            })
          })
          console.log(tempAnswers);
          setAnswers(tempAnswers);
          console.log(answers);
    }

    const handleSubmit = () => {
      let tempAnswers = [];
      answers.map(answer => {
        tempAnswers.push({
          title : answer.title,
          response : answer.response
        })
      })
      console.log(tempAnswers);
    
      axios({
        method: 'POST',
        url: "http://localhost:4000/answer/bulk_upload",
        data : {answers : tempAnswers,
        },
        headers: {
          'Authorization': localStorage.getItem('token') 
        }
      })
      .then(response => {
        console.log();
        if(response.status === 200) {
          console.log(response);
          navigate("/user/" + localStorage.getItem('soeid'));
        }
      }) 
      .catch(e => {
        console.log(e);
      }
       );
    }


    return ( 
      <div>
        <ResponsiveAppBar props={isSignedIn}/>
    <div class="container rounded bg-white mt-5 mb-5">
      
      <div class="row">
          <div class="col-md-3 border-right">
              <div class="d-flex flex-column align-items-center text-center p-3 py-5"><img class="rounded-circle mt-5" width="150px" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"></img><span class="font-weight-bold">Edogaru</span><span class="text-black-50">edogaru@mail.com.my</span><span> </span></div>
          </div>
          <div class="col-md-5 border-right">
              <div class="p-3 py-5">
                  <div class="d-flex justify-content-between align-items-center mb-3">
                      <h4 class="text-right mt-3">Questionnaire</h4>
                  </div>
                  <div class="row mt-3">
                  {answers.map((answer, index) => (
                     answer.type === "descriptive" ? <div class="col-md-12"><label class="labels">{answer.title}</label><input type="text" class="form-control" placeholder={answer.label} value={answers.response} onChange={(e) => {
                        let tempAnswers = [];
                        tempAnswers.push(...answers);
                        tempAnswers[index].response = e.target.value;
                        setAnswers(tempAnswers);
                    }}></input></div> : 
                    <div class="form-check" onChange={(e) => {
                      let tempAnswers = [];
                      tempAnswers.push(...answers);
                      tempAnswers[index].response = e.target.value;
                      setAnswers(tempAnswers);
                      console.log(answers);
                    }}>
                      <div class="form-check form-check-inline"> 
                    <input class="form-check-input" type="radio" name={"inLineRadioOptions" + answer.title}  value={answer.title.split("/")[0]}  />
                    <label class="form-check-label" for="inlineRadio1">{answer.title.split("/")[0]}</label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name={"inLineRadioOptions" + answer.title}  value={answer.title.split("/")[1]} />
                    <label class="form-check-label" for="inlineRadio2">{answer.title.split("/")[1]}</label>
                  </div></div>
                    ))}
                  </div>
                  <div class="mt-5 text-center"><button class="btn btn-primary profile-button" type="button" onClick={handleSubmit}>Save Profile</button></div>
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