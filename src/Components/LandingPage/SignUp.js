import  React, {useState} from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Hall Of Fame
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function SignUp() {

  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [password, setPassword] = useState("");
  const [validUsername, setValidUsername] = useState(true);
  const [boolRegistered, setBoolRegistered] = useState(true);
  const handleValidUsername = () => {
    axios
      .get(URL + "checkValidUsername", {
        username: username,
      })
      .then((response) => {
        console.log(response.data);
        if(response.data.validUsername == false) {
            setValidUsername(false);
        }
        
      })
      .catch(function (error) {
        console.log(error);
      });
    }
  
  const handleSignUp = (event) => {
    // axios
    //   .post(URL + "addNewUser", {
    //     username: username,
    //     password: password,
    //     firstname: firstname,
    //     lastname: lastname
    //   })
    //   .then((response) => {
    //     console.log(response.data);
    //     localStorage.setItem({token : token})
        
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
    if(boolRegistered)
        navigate("/users");
    }
    
  

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box  noValidate  sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  value = {firstname}
                  onChange= { (e) => {
                    setFirstname(e.target.value);
                    }}
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                  value = {lastname}
                  onChange= { (e) => {
                    setLastname(e.target.value);
                    }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="username"
                  label="Username"
                  name="username"
                  autoComplete="username"
                  value={username}
                  onChange= { (e) => {
                        setValidUsername(true);
                        setUsername(e.target.value);
                        handleValidUsername();
                  }}
                />
                <p > {validUsername ? "" : "Invalid Username"}</p>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  value = {password}
                  onChange= { (e) => {
                    setPassword(e.target.value);
                    }}
                />
              </Grid>
              <Grid item xs={12}>
                
              </Grid>
            </Grid>
            <Button
              onClick ={handleSignUp}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                {/* <Button onClick={() => { goToLandingPage()}}  variant="contained" color="primary" sx={{ height: 40 }}>
                    Already have an account, SignIn?            
                </Button> */}
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}