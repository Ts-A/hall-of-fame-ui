import React, {useState, useEffect, useRef} from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import InputLabel from '@mui/material/InputLabel';

export default function AddressForm(props) {

  const [questions, setQuestions] = useState(props.questions);

  
  props.func(questions);

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Tell us more about you!
      </Typography>
      <Grid container spacing={3}>
      {questions.map((question, index) => (
                <Grid item xs={12}>
                <InputLabel>{question.q}</InputLabel>
                  <TextField
                    required
                    id= "question"
                    name="question"
                    fullWidth
                    variant="outlined"
                    value = {question.a}
                    onChange = { (e) => {
                      let tempData = questions;
                      tempData[index].a = e.target.value;
                      console.log(tempData);
                      setQuestions(tempData);
        
                    }}
                  />
                </Grid>

            ))}
      </Grid>
    </React.Fragment>
  );
}