import React, {useState, useEffect, useRef} from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default function AboutYouForm(props) {


  const [userData, setUserData] = useState({
    firstname : props.userData.firstname,
    lastname : props.userData.lastname,
    college : props.userData.college,
    soeid : props.userData.soeid,
    profile : props.userData.profile,
    homeTown : props.userData.homeTown,
    state : props.userData.state,
    country : props.userData.country,
    bio : props.userData.bio,
    firstday : props.userData.firstday,
    liked : props.userData.liked,
    disliked : props.userData.disliked,
    internshipPreference : props.userData.internshipPreference,
    takeaway : props.userData.takeaway,
    trutilie : props.userData.trutilie,
    song : props.userData.song,
    playlist : props.userData.playlist,
    money : props.userData.money,
    behaviour : props.userData.behaviour,
    moment : props.userData.moment,

  });


  props.func(userData);


  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        We'd like to know about you!
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth
            autoComplete="given-name"
            variant="standard"
            value = {userData.firstname}
            onChange = { (e) => {
              let tempData = {...userData};
              tempData.firstname = e.target.value;
              setUserData(tempData);

            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            autoComplete="family-name"
            variant="standard"
            value = {userData.lastname}
            onChange = { (e) => {
              let tempData = {...userData};
              tempData.lastname = e.target.value;
              setUserData(tempData);

            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="College"
            name="College"
            label="College"
            fullWidth
            autoComplete="shipping address-line1"
            variant="standard"
            value = {userData.college}
            onChange = { (e) => {
              let tempData = {...userData};
              tempData.college = e.target.value;
              setUserData(tempData);

            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="SOEID"
            name="SOEID"
            label="SOEID"
            fullWidth
            variant="standard"
            value = {userData.soeid}
            onChange = { (e) => {
              let tempData = {...userData};
              tempData.soeid = e.target.value;
              setUserData(tempData);

            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="Profile"
            name="Profile"
            label="Linkedin/Insta Profile"
            fullWidth
            autoComplete="shipping address-line2"
            variant="standard"
            value = {userData.profile}
            onChange = { (e) => {
              let tempData = {...userData};
              tempData.profile = e.target.value;
              setUserData(tempData);

            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="Hometown"
            name="Hometown"
            label="Hometown"
            fullWidth
            autoComplete="shipping address-level2"
            variant="standard"
            value = {userData.homeTown}
            onChange = { (e) => {
              let tempData = {...userData};
              tempData.homeTown = e.target.value;
              setUserData(tempData);

            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="state"
            name="state"
            label="State/Province/Region"
            fullWidth
            variant="standard"
            value = {userData.state}
            onChange = { (e) => {
              let tempData = {...userData};
              tempData.state = e.target.value;
              setUserData(tempData);

            }}
          />
        </Grid>
        
        </Grid>
        <Grid item xs={12} >
          <TextField
            required
            id="country"
            name="country"
            label="Country"
            fullWidth
            autoComplete="shipping country"
            variant="standard"
            onChange = { (e) => {
              let tempData = {...userData};
              tempData.country = e.target.value;
              setUserData(tempData);

            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="Bio"
            name="Bio"
            label="A bio that describes you"
            fullWidth
            variant="standard"
            value = {userData.bio}
            onChange = { (e) => {
              let tempData = {...userData};
              tempData.bio = e.target.value;
              setUserData(tempData);

            }}
          />   
        {/* <Grid item xs={12} sm={6}>
          <TextField
            required
            id="zip"
            name="zip"
            label="Zip / Postal code"
            fullWidth
            autoComplete="shipping postal-code"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="country"
            name="country"
            label="Country"
            fullWidth
            autoComplete="shipping country"
            variant="standard"
          />
        </Grid> */}
      </Grid>
    </React.Fragment>
  );
}