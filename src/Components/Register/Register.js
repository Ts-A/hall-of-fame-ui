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
import { useLocation, useNavigate } from "react-router-dom";
import { Card, CardContent } from '@mui/material';
import signup from '../../Assets/signup.svg';
import Alert from '@mui/material/Alert';
import createPalette from '@mui/material/styles/createPalette';
import Footer from '../Footer/Footer';

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

export default function Register() {

  const navigate = useNavigate();
  const [soeid, setSoeid] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [password, setPassword] = useState("");
  const [region, setRegion] = useState("");
  const [bio, setBio] = useState("");
  const [college, setCollege] = useState("");
  const [email, setEmail] = useState("");
  const [profile, setProfile] = useState("");
  const [isRegistered, setIsRegistered] = useState(true);
  

  const handleLogin = () => {
    navigate("/login");
  }
  
  const handleSignUp = () => {
    axios({
      method: 'POST',
      url: "http://ec2-3-109-213-26.ap-south-1.compute.amazonaws.com/register",
      data : { user : {
        soe_id : soeid,
        first_name : firstname,
        last_name: lastname,
        password : password,
        region: region,
        bio: bio,
        college: college,
        profile_url: profile,
        email: email
      } }
    })
    .then(response => {
      console.log(response.data);
      if(response.data.message === "User Created") {
        console.log("User Registered Successfully");

        localStorage.setItem('soeid', response.data.user.soe_id);
        localStorage.setItem('token', response.data.token);
      
        navigate("/user/upload");
        // navigate("/user/" + localStorage.getItem('soeid') + "/edit");
      }
    }) 
    .catch(e => {
      console.log(e);
      setIsRegistered(false);
    });
};
    
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Card sx={{marginTop: 2}} style={{ border: "3px outset #7584c333", borderRadius: "15px" }}>
        <CardContent>
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          {/* <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar> */}
           <img src={signup} width="200px" height="300px"  style={{marginTop:"-100px", marginBottom:"-50px"}}/>
          <Typography component="h1" variant="h5" style={{marginBottom:"10px"}}>
            Sign up
          </Typography>
          <Box  noValidate  sx={{ mt: 1 }} onFocus={() => { setIsRegistered(true)}}>
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
                  id="soeid"
                  label="soeid"
                  name="soeid"
                  autoComplete="soeid"
                  value={soeid}
                  onChange= { (e) => {
                        
                        setSoeid(e.target.value);

                  }}
                />
              </Grid>
              <Grid item xs={12} style={{marginTop: "-15px"}}>
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
              <Grid item xs={12} >
                <TextField
                  required
                  fullWidth
                  name="region"
                  label="region"
                  id="region"
                  autoComplete="region"
                  value = {region}
                  onChange= { (e) => {
                    setRegion(e.target.value);
                    }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="bio"
                  label="bio" 
                  id="bio"
                  autoComplete="bio"
                  value = {bio}
                  onChange= { (e) => {
                    setBio(e.target.value);
                    }}
                />
              </Grid>
              <Grid item xs={12} >
                <TextField
                  required
                  fullWidth
                  name="college"
                  label="college"
                  id="college"
                  value = {college}
                  onChange= { (e) => {
                    setCollege(e.target.value);
                    }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="email"
                  label="email"
                  type="email"
                  id="email"
                  value = {email}
                  onChange= { (e) => {
                    setEmail(e.target.value);
                    }}
                />
              </Grid>
              <Grid item xs={12} >
                <TextField
                  required
                  fullWidth
                  name="profile"
                  label="profile"
                  type="profile"
                  id="profile"
                  value = {profile}
                  onChange= { (e) => {
                    setProfile(e.target.value);
                    }}
                />
              </Grid>
            </Grid>
            <Button
              onClick ={handleSignUp}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 1, mb: 1 }}
            >
              Sign Up
            </Button>
            {isRegistered ?<br /> : <Alert severity="error">Registration failed.</Alert>}
            <Button
              onClick ={handleLogin}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 1, mb: 1 }}
            >
             Already have an account, Login
            </Button>
            <Button onClick={() => {
              navigate("/");
            }}>Return back to Home Page</Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                {/* <Button onClick={() => { goToLandingPage()}}  variant="contained" color="primary" sx={{ height: 40 }}>
                    Already have an account, SignIn?            
                </Button> */}
              </Grid>
            </Grid>
          </Box>
        </Box>
        </CardContent>
        </Card>
        <Footer/>
      </Container>
    </ThemeProvider>
  );
}