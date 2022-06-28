import React, {useState, useEffect, useRef} from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import InputLabel from '@mui/material/InputLabel';

export default function AddressForm(props) {

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
        Tell us more about you!
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
        <InputLabel>Tell us 2 truths and a lie</InputLabel>
          <TextField
            required
            id="truthlie"
            name="truthlie"
            fullWidth
            variant="outlined"
            value = {userData.truthlie}
            onChange = { (e) => {
              let tempData = {...userData};
              tempData.truthlie = e.target.value;
              setUserData(tempData);

            }}
          />
        </Grid>
        <Grid item xs={12}>
        <InputLabel>What song best sums you up?</InputLabel>
          <TextField
            required
            id="song"
            name="song"
            fullWidth
            variant="outlined"
            value = {userData.song}
            onChange = { (e) => {
              let tempData = {...userData};
              tempData.song = e.target.value;
              setUserData(tempData);

            }}
          />
        </Grid>
        <Grid item xs={12}>
        <InputLabel>Can you share your spotify playlist here?</InputLabel>
          <TextField
            id="playlist"
            name="playlist"
            fullWidth
            variant="outlined"
            value = {userData.playlist}
            onChange = { (e) => {
              let tempData = {...userData};
              tempData.playlist = e.target.value;
              setUserData(tempData);

            }}
          />
        </Grid>
        <Grid item xs={12}>
        <InputLabel>If money were no object, what would you do?</InputLabel>
          <TextField
            required
            id="money"
            name="money"
            fullWidth
            variant="outlined"
            value = {userData.moeny}
            onChange = { (e) => {
              let tempData = {...userData};
              tempData.money = e.target.value;
              setUserData(tempData);

            }}
          />
        </Grid>
        <Grid item xs={12}>
        <InputLabel>What is a behaviour you find strangely attractive? </InputLabel>
          <TextField
            id="behaviour"
            name="behaviour"
            fullWidth
            variant="outlined"
            value = {userData.behaviour}
            onChange = { (e) => {
              let tempData = {...userData};
              tempData.behaviour = e.target.value;
              setUserData(tempData);

            }}
          />
        </Grid>
        <Grid item xs={12}>
        <InputLabel> If you could go back and change a moment, what would it be?</InputLabel>
          <TextField
            id="moment"
            name="moment"
            multiline
            rows={2}
            fullWidth
            variant="outlined"
            value = {userData.moment}
            onChange = { (e) => {
              let tempData = {...userData};
              tempData.moment = e.target.value;
              setUserData(tempData);

            }}

          />
        </Grid>
        
        
       
      </Grid>
    </React.Fragment>
  );
}