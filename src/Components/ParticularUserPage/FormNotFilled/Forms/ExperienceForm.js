import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Checkbox from '@mui/material/Checkbox';
import { InputLabel, Radio, RadioGroup } from '@mui/material';

export default function ExperienceForm() {
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
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="disliked"
            name="disliked"
            label="What is the one thing you disliked?"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
        <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">Given a choice, which one would you prefer?</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
          <FormControlLabel value="Virtual" control={<Radio />} label="Virtual internship" />
          <FormControlLabel value="Offline " control={<Radio />} label="In-Office internship" />
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
          />
        </Grid>
       
      </Grid>
    </React.Fragment>
  );
}