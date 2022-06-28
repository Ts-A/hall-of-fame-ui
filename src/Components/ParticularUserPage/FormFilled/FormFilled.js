//import axios from "axios";
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

import { useNavigate, useLocation, Navigate, useParams } from "react-router-dom";




export default function User() {
  
    //const [defaultUser, setdefaultUser] = useState(localStorage.getItem("user"));
    const [defaultUser, setdefaultUser] = useState("");
    const [userData, setUserData] = useState("");
    const navigate = useNavigate();
    let token = "";
    let {username} = useParams();
    const getUser = () => {
      axios
      .get(URL + "user/" + {username}, {
        token: token,


      })
      .then((response) => {
        console.log(response.data);
        setUserData(userData);
        

        
      })
      .catch(function (error) {
        console.log(error);
      });
    }

    //  useEffect(() => {
    //   Promise.resolve()
    //   .then(() => { getUser()})
    //   .then(() => {
    //     if(userData.isFormFilled !== true && username === defaultUser) {
    //       navigate("/user/" + defaultuser + "/edit");
    //     }
    //     }) 

    // })
    return (
      <div>
        {defaultUser !== username ? <Button variant="contained" onClick={(
          
        ) => {navigate("/user/" + username + "/edit") }}>Edit</Button> :  <p>Only for view</p> }
        
        <p>You have filled the form.</p>
      </div>
    );
}


