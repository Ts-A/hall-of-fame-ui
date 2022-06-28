import React, {useState, useEffect, useRef} from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Checkbox from '@mui/material/Checkbox';
import { InputLabel, Radio, RadioGroup } from '@mui/material';

export default function ExperienceForm(props) {

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
        Tell us more about your experience @ Citi!
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            id="firstDay"
            name="firstDay"
            label="Describe your day one"
            fullWidth
            autoComplete="given-name"
            variant="standard"
            value = {userData.firstday}
            onChange = { (e) => {
              let tempData = {...userData};
              tempData.firstday = e.target.value;
              setUserData(tempData);

            }}
          />
        </Grid>
        <Grid item xs={12}>
        {/* <Typography variant="subtitle2"> What is the one thing you liked the most about Citi? </Typography> */}
          <TextField
            id="liked"
            name="liked"
            label="What is the one thing you liked the most about Citi?"
            fullWidth
            variant="standard"
            value = {userData.liked}
            onChange = { (e) => {
              let tempData = {...userData};
              tempData.liked = e.target.value;
              setUserData(tempData);

            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="disliked"
            name="disliked"
            label="What is the one thing you disliked?"
            fullWidth
            variant="standard"
            value = {userData.disliked}
            onChange = { (e) => {
              let tempData = {...userData};
              tempData.disliked = e.target.value;
              setUserData(tempData);

            }}
          />
          
        </Grid>
        <Grid item xs={12}>
        <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">Given a choice, which one would you prefer?</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        onChange={(e) => {
          let tempData = {...userData};
              tempData.internshipPreference = e.target.value;
              setUserData(tempData);
         }}  
      >
          <FormControlLabel value="virtual" control={<Radio />} label="Virtual internship" />
          <FormControlLabel value="offline" control={<Radio />} label="In-Office internship" />
         </RadioGroup>
        </FormControl>
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="takeaway"
            name="takeaway"
            label="What would be one key takeaway from your internship?"
            fullWidth
            variant="standard"
            value = {userData.takeway}
            onChange = { (e) => {
              let tempData = {...userData};
              tempData.takeaway = e.target.value;
              setUserData(tempData);

            }}
            
          />
        </Grid>
       
      </Grid>
    </React.Fragment>
  );
}