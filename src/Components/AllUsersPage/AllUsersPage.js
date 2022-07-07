import React, {useState, useEffect, useRef} from 'react';
import ReactDOM from 'react-dom/client';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import axios from "axios";
import { tempUsers } from './tempUsers';
import { useNavigate, useLocation } from "react-router-dom";

import Header from '../Header/ResponsiveAppBar.js';
import Footer from '../Footer/Footer.js';


// const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const usernames = 
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

export default function AllUsersPage() {

  const navigate = useNavigate();
  const location = useLocation();
  const [isSignedIn, setIsSignedIn] = useState(false);
  
  const [users, setUsers] = useState(tempUsers);
  const [defaultUser, setDefaultUser] = useState(users[0]);
  const [navigateToNewUser, setNavigateToNewUser] = useState(false);
  const usersContainer = useRef(null);
  const viewRef = useRef(null);

  const handleSignUp = () => {
    navigate("/register");
  }
  const handleSignIn = () => {
    navigate("/login");
  }
  const handleLogout = () => {
    setIsSignedIn(false);
  }
  const scrollToElement = () => viewRef.current.scrollIntoView();
  
  useState(() => {
    const getUsers = () => {
      axios({
        method: 'GET',
        url: "http://hall-of-fame-server-hall-of-fame-server.linuxops-pune-a2.conygre.com/user",
        data : {  }
      })
      .then(response => {
        console.log(response.data);
        if(response.status === 200) {
          
          setUsers(response.data.users);
        }
      }) 
      .catch(e => {
        console.log(e);
        
      });
    }
    getUsers();
  },[])
  
  function goToParticularUser(id){
    navigate("/user/"+ id);
  }
  
  function focusOnusersContainer() {
    usersContainer.current.focus();
  
  }

  const handleProfile = () => {
    if(localStorage.getItem('token')) {
      navigate("/user/" + localStorage.getItem('soeid'));
    }
    else
    navigate("/register");
  }
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
        <Header props={isSignedIn}/>

      {/* ################################################################################# */}
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="lg">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Welcome to Hall Of Fame
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              A place to share and know more about your fellow Citi interns!
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button variant="contained" color="primary" onClick={() => handleProfile()}>{localStorage.getItem('token') ? "View Your Profile": "Ready to answer some questions?" }</Button>
              {/* <Button onClick={scrollToElement} variant="outlined">I am scared. Let's see some examples, shall we?</Button> */}
            </Stack>
          </Container>
        </Box>
        <Container ref= {viewRef} sx={{ py: 10 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={10}>
            {users.map((user, index) => (
              <Grid item key={user} xs={12} sm={6} md={4}>
                <Card style={{ border: "3px outset #7584c333", borderRadius: "10px"}}
                  sx={{ height: '350px', width: '300px', display: 'flex', flexDirection: 'column', alignItems: 'center', py: 4}}
                >
                  
                  <Avatar sx={{ width: 125, height: 125}} alt="Remy Sharp" src={user.display_picture ? user.display_picture : "https://source.unsplash.com/random"} />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {user.soe_id}
                    </Typography>
                    <Typography>
                      {user.first_name +  " " + user.last_name} 
                    </Typography>
                    <Typography>
                       {user.college}
                    </Typography>   
                    <Typography>
                      {user.bio}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button onClick ={() => goToParticularUser(user.soe_id)} sx={{mb:-4}}>View</Button>
                    
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <Footer />
      {/* End footer */}
    </ThemeProvider>
  );
}