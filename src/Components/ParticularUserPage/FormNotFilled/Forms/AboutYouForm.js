import React, {useState, useEffect, useRef} from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import InputLabel from '@mui/material/InputLabel';


export default function AboutYouForm(props) {


  const [userData, setUserData] = useState(Object.entries(props.userData));
  const [data, setData] = useState(userData);


  props.func(data);


  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        We'd like to know about you!
      </Typography>
      <Grid container spacing={3}>
      {data.map((question, index) => (
                <Grid item xs={12}>
                <InputLabel>{question[0]}</InputLabel>
                  <TextField
                    required
                    id="truthlie"
                    name="truthlie"
                    fullWidth
                    variant="outlined"
                    value = {question[1]}
                    onChange = { (e) => {
                      let tempData = data;
                      console.log(tempData[index][1]);
                      tempData[index][1] = e.target.value;
                      setData(tempData);
        
                    }}
                  />
                </Grid>

            ))}
      </Grid>
    </React.Fragment>
  );
}