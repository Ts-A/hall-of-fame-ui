import React,  {useState, useEffect} from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import AboutYouForm from './Forms/AboutYouForm';
import MoreAboutYouForm from './Forms/MoreAboutYouForm'
import axios from "axios";
import { useNavigate, useLocation, useParams, Navigate } from "react-router-dom";
import {tempQuestions} from './Forms/tempQuestions';
import { User} from './Forms/tempUser';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const steps = ['About You', 'Spicy Questions'];


const theme = createTheme();

export default function Checkout() {

  const pullUserData = (data) => {
    console.log(data);
    setUserData(data);
    
  }
  const pullQuestions = (questions) => {
    console.log(questions);
    setQuestions(questions);
    
  }
  const navigate = useNavigate();
  const [user, setUser] = useState("");
  let token = "";
  let {username} = useParams();
  const getUser = () => {
    axios
    .get(URL + "user/" + {username}, {
      token: token
    })
    .then((response) => {
      console.log(response.data);
      setUser(response.data.user);
      
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  const [questions, setQuestions] = useState([
    {
        q: "Tera naam kya hai?",
        a: "Nai pata",
        example: "Tony Stark"
    },
    {
        q: "Pata",
        a: "Nai pata",
        example: "10880, Malibu Point"
    },
    {
        q: "Phone Number",
        a: "Nai pata",
        example: "212-970-4133"
    },
    {
        q: "Date Of Birth",
        a: "Nai pata",
        example: "1970, May 29th"
    },
    {
        q: "Tera naam kya hai?",
        a: "Nai pata",
        example: "Tony Stark"
    },
    {
        q: "Tera naam kya hai?",
        a: "Nai pata",
        example: "Tony Stark"
    },
]);
  const [activeStep, setActiveStep] = React.useState(0);
  const [userData, setUserData] = useState( {
    firstname : "",
    lastname : "",
    college : "",
    soeid : "",
    profile : "",
    homeTown : "",
    state :"",
    country : "",
  });

  const handleNext = () => {

    if(steps.length === activeStep) {
      //    axios
      //   .post(URL + "user/" + username  , {
      //     username : localStorage.getIten(username),
      //     token: token,
      //     userData = userData
      //   })
      //   .then((response) => {
      //     navigate("/ParticularUserPage");
          
      //   })
      //   .catch(function (error) {
      //     console.log(error);
      //   });
    }
    else {
      Promise.resolve()
      .then(() => { setUserData({userData})})
      .then(() => {setActiveStep(activeStep + 1)})
      console.log(userData);
    }
    
    }
    
  // useEffect(() => {
  //   axios
  //   .get(URL + "user/"  , {
  //     username : localStorage.getIten(username),
  //     token: token
  //   })
  //   .then((response) => {
  //     setIsSignedIn(response.data.isSignedIn)
  //     setUserData(response.userData);
      
  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //   });
      
  // });

  const handleBack = () => {

    setActiveStep(activeStep - 1);
  };
  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return <AboutYouForm  func={pullUserData} userData = {userData} />;    
      case 1:
        return <MoreAboutYouForm  func={pullQuestions} questions = {questions}/>;
      default:
        throw new Error('Unknown step');
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar
        position="absolute"
        color="default"
        elevation={0}
        sx={{
          position: 'relative',
          borderBottom: (t) => `1px solid ${t.palette.divider}`,
        }}
      >
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Hall of Fame
          </Typography>
        </Toolbar>
      </AppBar>
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          <Typography component="h1" variant="h4" align="center">
            Questionnaire
          </Typography>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography variant="h5" gutterBottom>
                  Thank you !.
                </Typography>
                <Typography variant="subtitle1">
                 You have filled the form successfully.
                </Typography>
                {/* <Button onClick= {() => {
                  navigate("/user/" +{user.username});
                }}>Check your profile</Button> */}
                <Button onClick= {() => {
                  navigate("/user/" + username);
                }}>Have a look!</Button>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {getStepContent(activeStep)}
                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                      Back
                    </Button>
                  )}

                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 3, ml: 1 }}
                  >
                    {activeStep === steps.length - 1 ? 'Done' : 'Next'}
                  </Button>
                </Box>
              </React.Fragment>
            )}
          </React.Fragment>
        </Paper>
        <Copyright />
      </Container>
    </ThemeProvider>
  );
}


 