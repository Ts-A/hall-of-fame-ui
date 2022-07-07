//import axios from "axios";
import React, {useState, useEffect, useRef} from 'react';

import Avatar from '@mui/material/Avatar';
import axios from "axios";
import "./module.css";
import { Questions } from './Questions';

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Checkbox from '@mui/material/Checkbox';
import { Button, createTheme, InputLabel, Radio, RadioGroup, ThemeProvider } from '@mui/material';


import { useNavigate, useLocation, Navigate, useParams } from "react-router-dom";
import ResponsiveAppBar from '../../Header/ResponsiveAppBar';
import Footer from '../../Footer/Footer';
import ImageUpload from './ImageUpload';
import Questionnaire from '../../../Assets/questionnaire.svg';



export default function User() {
  
    const [defaultUser, setdefaultUser] = useState(localStorage.getItem("user"));
    const [questions, setQuestions] = useState(Questions);
    const [answers, setAnswers] = useState([]);
    const [userData, setUserData] = useState([]);
    const [isSignedIn, setIsSignedIn] = useState(true);
    const [, updateState] = React.useState();
    const navigate = useNavigate();
    
    let props = {
      isSignedIn: isSignedIn,
      bgColor: '#ffffff',
      textColor: '#7584C3'
    };

    const theme = createTheme({
      typography: {
        fontFamily: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
        ].join(','),
      },
      palette:{
        primary:{
          main: '#7584c3'
        }
      }
    });
   
    let {soeid} = useParams();
    useEffect(() => {
      const back_url = "http://ec2-43-204-149-158.ap-south-1.compute.amazonaws.com/user/" + soeid;
      axios({
        method: 'GET',
        url: back_url
      })
      .then(response => {
        console.log(response.data);
        if(response.status === 200) {
          setUserData(response.data.user);

        }
      }) 
      .catch(e => {
        console.log(e);
        navigate("/notfound");
      }
       );
    },[])
    useEffect(() => {
      axios({
        method: 'GET',
        url: "http://ec2-43-204-149-158.ap-south-1.compute.amazonaws.com/question",
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
    },[userData],[questions])
    // useEffect(() => {
    //   updateState({});
    // },answers)
    const loadAnswers = () => {
      let tempAnswers = [];
          questions.map(question => {
            let tempanswer = "";
            if(userData.responses){
              userData.responses.map((res) => {
                if(res.question.title === question.title)
                  tempanswer = res.answer.response;
              })
            }
            tempAnswers.push({
              title : question.title,
              response : tempanswer,
              type : question.type
            })
          })
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
        url: "http://ec2-43-204-149-158.ap-south-1.compute.amazonaws.com/answer/bulk_upload",
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
        <ResponsiveAppBar {...props}/>
      <ThemeProvider theme={theme}>
    <div class="container rounded bg-white mt-5 mb-5">
      
      <div class="row">
          <div class="col-md-3 border-right">
              
              <div class="d-flex flex-column align-items-center text-center p-3 py-5">
              {/* <ImageUpload /><span class="text-black-50">{}</span>{soeid}<span> </span> */}
              </div>
          </div>
          <div class="col-md-6 border-right">
              <div class="p-3 py-5">
                  
                  <img src={Questionnaire} width="300px" height="500px"  style={{marginTop:"-150px", marginBottom:"-100px", marginLeft:"120px"}}/>
                  <div class="d-flex justify-content-between align-items-center mb-3">    
                      <Typography component="h1" variant="h5" sx={{ml:25}}>Questionnaire</Typography>
                  </div>
                  <div class="row mt-3">
                  {answers.map((answer, index) => (
                     answer.type === "descriptive" ? <div class="col-md-12"><label class="labels">{answer.title}</label><input type="text" class="form-control" placeholder={answer.label} value={answer.response} onChange={(e) => {
                        console.log(answers);
                        let tempAnswers = [];
                        tempAnswers.push(...answers);
                        tempAnswers[index].response = e.target.value;
                        setAnswers(tempAnswers);
                    }}></input></div> : 
                    <div class="form-check" value={answer.response} onChange={(e) => {
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
                  {/* <div class="mt-5 text-center"><button class="btn btn-primary profile-button" type="button">Save Profile</button></div> */}
                  <Button
                    onClick={handleSubmit}
                    type="submit"
                    variant="contained"
                    sx={{ mt: 5, mb: 0, ml:27 }}
                  >
                    Save Profile
                  </Button>
              </div>
          </div>
         
      </div>
  </div>

  <Footer />
  </ThemeProvider>
      </div>
      
   
  );
}

//====================================================
// onClick={handleSubmit}

// {defaultUser !== username ? <Button variant="contained" onClick={(
          
//   ) => {navigate("/user/" + username + "/edit") }}>Edit</Button> :  <p>Only for view</p> }