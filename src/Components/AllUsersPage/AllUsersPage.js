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
import { useNavigate } from "react-router-dom";


function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Hall of Fame
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const usernames = 
const theme = createTheme();

export default function Album() {

  const navigate = useNavigate();
  const [users, setUsers] = useState(tempUsers);
  const [token, setToken] = useState("");
  const [navigateToNewUser, setNavigateToNewUser] = useState(false);
  const usersContainer = useRef(null);

  function getUsers() {
    axios
      .get(URL + "users", {
        token: token
      })
      .then((response) => {
        console.log(response.data);
        setUsers(response.data);
        
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  function goToParticularUser(user){
    navigate("/user/" + user.username, {state : {user: user}});
  }
  function goToLandingPage(){
    navigate("/");
  } 
  function focusOnusersContainer() {
    usersContainer.current.focus();
  }
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Hall of Fame
          </Typography>
          
          <Box
            m={1}
            width="90%"
            display="flex"
            justifyContent="flex-end"
            alignItems="flex-end"
            
           >
            <Button onClick={() => { goToLandingPage()}}  variant="contained" color="primary" sx={{ height: 40 }}>
            Logout
            </Button>
            
          </Box>
      
         
        </Toolbar>
       
      </AppBar>
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
              Something short and leading about the collection below—its contents,
              the creator, etc. Make it short and sweet, but not too short so folks
              don&apos;t simply skip over it entirely.
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button variant="contained">Ready to answer some questions?</Button>
              <Button onClick={() => {focusOnusersContainer()}} variant="outlined">I am scared. Let's see some examples, shall we?</Button>
            </Stack>
          </Container>
        </Box>
        <Container ref= {usersContainer} sx={{ py: 10 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={10}>
            {users.map((user, index) => (
              <Grid item key={user} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '400px', width: '350px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
                >
                  
                  <Avatar sx={{ width: 150, height: 150 }} alt="Remy Sharp" src={user.imageURL} />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {user.username}
                    </Typography>
                    <Typography>
                      {user.about}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button onClick ={() => goToParticularUser(user)} size="small">View</Button>
                    
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Something here to give the footer a purpose!
        </Typography>
        <Copyright />
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}