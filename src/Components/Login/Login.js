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
import { Card, CardContent } from '@mui/material';
import login from '../../Assets/login.svg';
import Alert from '@mui/material/Alert';

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

export default function Login() {

  const navigate = useNavigate();
  const [soeid, setSoeid] = useState("");
  const [password, setPassword] = useState("");
  const [isSignedIn, setisSignedIn] = useState(true);
  

  const handleRegister = () => {
    navigate("/register");
  }
  const handleSignIn = (event) => {
    axios({
      method: 'POST',
      url: "https://0d92-223-178-110-162.in.ngrok.io/user/login/",
      data : { 
        soe_id : soeid,
        password : password
        
      }
    })
    .then(response => {
      console.log();
      if(response.status === 200) {
        console.log("User logged in Successfully");
        setisSignedIn(true);
        localStorage.setItem('soeid', response.data.user.soe_id);
        localStorage.setItem('token', response.data.token);
      
        navigate("/user/" + localStorage.getItem('soeid'));
      }
    }) 
    .catch(e => {
      console.log(e);
      setisSignedIn(false);
    }
     );
  }
    
  return (
    <ThemeProvider theme={theme}>
      
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Card sx={{marginTop: 2}} style={{ border: "3px outset #7584c333", borderRadius: "15px" }}>
          <CardContent>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          {/* <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar> */}
          <img src={login} width="300px" height="500px"  style={{marginTop:"-100px", marginBottom:"-100px"}}/>
          <Typography component="h1" variant="h5">
            Sign In
          </Typography>
          <Box  noValidate  sx={{ mt: 1 }}>
            <Grid container spacing={2} >
              <Grid item xs={12} sm={6}>
                
              </Grid>
              <Grid item xs={12} sm={6}>
                
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
                  onFocus= {() => {
                    setisSignedIn(true);
                  }}
                  onChange= { (e) => {
                        
                        setSoeid(e.target.value);
                  }}
                  autoFocus
                />
                
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
              onClick ={handleSignIn}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 0, mb: 0 }}
            >
              Sign In
            </Button>
            {isSignedIn ?<br /> : <Alert severity="error">Can't login! Wrong credentials.</Alert>}
            <Button
              onClick ={handleRegister}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 1, mb: 1 }}
            >
             Don't have an account, Register
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
        <Copyright sx={{ mt: 5 }} />
      </Container>

    </ThemeProvider>
  );
}