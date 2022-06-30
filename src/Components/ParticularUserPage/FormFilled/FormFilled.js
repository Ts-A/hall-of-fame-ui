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
import "./module.css";

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
    <div class="container rounded bg-white mt-5 mb-5">
      <div class="row">
          <div class="col-md-3 border-right">
              <div class="d-flex flex-column align-items-center text-center p-3 py-5"><img class="rounded-circle mt-5" width="150px" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"></img><span class="font-weight-bold">Edogaru</span><span class="text-black-50">edogaru@mail.com.my</span><span> </span></div>
          </div>
          <div class="col-md-5 border-right">
              <div class="p-3 py-5">
                  <div class="d-flex justify-content-between align-items-center mb-3">
                      <h4 class="text-right">Profile Settings</h4>
                  </div>
                  <div class="row mt-2">
                      <div class="col-md-6"><label class="labels">Name</label><input type="text" class="form-control" placeholder="first name" value=""></input></div>
                      <div class="col-md-6"><label class="labels">Surname</label><input type="text" class="form-control" value="" placeholder="surname"></input></div>
                  </div>
                  <div class="row mt-3">
                      <div class="col-md-12"><label class="labels">Mobile Number</label><input type="text" class="form-control" placeholder="enter phone number" value=""></input></div>
                      <div class="col-md-12"><label class="labels">Address Line 1</label><input type="text" class="form-control" placeholder="enter address line 1" value=""></input></div>
                      <div class="col-md-12"><label class="labels">Address Line 2</label><input type="text" class="form-control" placeholder="enter address line 2" value=""></input></div>
                      <div class="col-md-12"><label class="labels">Postcode</label><input type="text" class="form-control" placeholder="enter address line 2" value=""></input></div>
                      <div class="col-md-12"><label class="labels">State</label><input type="text" class="form-control" placeholder="enter address line 2" value=""></input></div>
                      <div class="col-md-12"><label class="labels">Area</label><input type="text" class="form-control" placeholder="enter address line 2" value=""></input></div>
                      <div class="col-md-12"><label class="labels">Email ID</label><input type="text" class="form-control" placeholder="enter email id" value=""></input></div>
                      <div class="col-md-12"><label class="labels">Education</label><input type="text" class="form-control" placeholder="education" value=""></input></div>
                  </div>
                  <div class="row mt-3">
                      <div class="col-md-6"><label class="labels">Country</label><input type="text" class="form-control" placeholder="country" value=""></input></div>
                      <div class="col-md-6"><label class="labels">State/Region</label><input type="text" class="form-control" value="" placeholder="state"></input></div>
                  </div>
                  <div class="mt-5 text-center"><button class="btn btn-primary profile-button" type="button">Save Profile</button></div>
              </div>
          </div>
          <div class="col-md-4">
              <div class="p-3 py-5">
                  <div class="d-flex justify-content-between align-items-center experience"><span>Edit Experience</span><span class="border px-3 p-1 add-experience"><i class="fa fa-plus"></i>&nbsp;Experience</span></div><br></br>
                  <div class="col-md-12"><label class="labels">Experience in Designing</label><input type="text" class="form-control" placeholder="experience" value=""></input></div> <br></br>
                  <div class="col-md-12"><label class="labels">Additional Details</label><input type="text" class="form-control" placeholder="additional details" value=""></input></div>
              </div>
          </div>
      </div>
  </div>
   
  );
}




// {defaultUser !== username ? <Button variant="contained" onClick={(
          
//   ) => {navigate("/user/" + username + "/edit") }}>Edit</Button> :  <p>Only for view</p> }