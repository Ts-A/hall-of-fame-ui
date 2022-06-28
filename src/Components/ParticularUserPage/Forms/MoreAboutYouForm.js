import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import InputLabel from '@mui/material/InputLabel';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';

export default function AddressForm() {
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
          />
        </Grid>
        <Grid item xs={12}>
        <InputLabel>Can you share your spotify playlist here?</InputLabel>
          <TextField
            id="playlist"
            name="playlist"
            fullWidth
            variant="outlined"
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
          />
        </Grid>
        <Grid item xs={12}>
        <InputLabel>What is a behaviour you find strangely attractive? </InputLabel>
          <TextField
            id="behaviour"
            name="behaviour"
            fullWidth
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12}>
        <InputLabel> If you could go back and change a moment, what would it be?</InputLabel>
          <TextField
            id="behaviour"
            name="behaviour"
            multiline
            rows={2}
            fullWidth
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12}>
        <InputLabel> If you were an artist, what would you paint on your first day?</InputLabel>
          <TextField
            id="behaviour"
            name="behaviour"
            multiline
            rows={2}
            fullWidth
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12}>
        <InputLabel> If you could learn on skill instantly, what would it be?</InputLabel>
          <TextField
            id="behaviour"
            name="behaviour"
            multiline
            rows={2}
            fullWidth
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12}>
        <InputLabel> What is the one thing you would change about your daily routine?</InputLabel>
          <TextField
            id="behaviour"
            name="behaviour"
            multiline
            rows={2}
            fullWidth
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12}>
        <InputLabel>What is your dream profile you want to pursue?</InputLabel>
          <TextField
            id="behaviour"
            name="behaviour"
            multiline
            rows={2}
            fullWidth
            variant="outlined"
          />
        </Grid>
        <Grid item xs={14}>
        <InputLabel> If you suddenly had powers of invisibility, what would you use them for?</InputLabel>
          <TextField
            id="behaviour"
            name="behaviour"
            multiline
            rows={2}
            fullWidth
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12}>
        <InputLabel> What was your favourite TV show growing up?</InputLabel>
          <TextField
            id="behaviour"
            name="behaviour"
            multiline
            rows={2}
            fullWidth
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12}>
        <InputLabel> What is the one thing you would change about your daily routine?</InputLabel>
          <TextField
            id="behaviour"
            name="behaviour"
            multiline
            rows={2}
            fullWidth
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12}>
        <InputLabel>If you were to bring a fictional character to life, what would it be?</InputLabel>
          <TextField
            id="behaviour"
            name="behaviour"
            multiline
            rows={2}
            fullWidth
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl>
          <FormLabel id="demo-row-radio-buttons-group-label">This or That?</FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
              <FormControlLabel value="Android" control={<Radio />} label="Android" />
              <FormControlLabel value="IOS " control={<Radio />} label="IOS" />
            </RadioGroup>
            </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl>
          <FormLabel id="demo-row-radio-buttons-group-label">This or That?</FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
              <FormControlLabel value="Day" control={<Radio />} label="Day" />
              <FormControlLabel value="Night " control={<Radio />} label="Night" />
            </RadioGroup>
            </FormControl>
        </Grid>

        <Grid item xs={12} sm={6}>
          <FormControl>
          <FormLabel id="demo-row-radio-buttons-group-label">This or That?</FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
              <FormControlLabel value="Summer" control={<Radio />} label="Summer" />
              <FormControlLabel value="Winter " control={<Radio />} label="Winter" />
            </RadioGroup>
            </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl>
          <FormLabel id="demo-row-radio-buttons-group-label">This or That?</FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
              <FormControlLabel value="Coffee" control={<Radio />} label="Coffee" />
              <FormControlLabel value="Tea " control={<Radio />} label="Tea" />
            </RadioGroup>
            </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl>
          <FormLabel id="demo-row-radio-buttons-group-label">This or That?</FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
              <FormControlLabel value="Fiction" control={<Radio />} label="Fiction" />
              <FormControlLabel value="Non-Fiction " control={<Radio />} label="Non-Fiction" />
            </RadioGroup>
            </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl>
          <FormLabel id="demo-row-radio-buttons-group-label">This or That?</FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
              <FormControlLabel value="Call" control={<Radio />} label="Call" />
              <FormControlLabel value="Text " control={<Radio />} label="Text" />
            </RadioGroup>
            </FormControl>
        </Grid>

        <Grid item xs={12} sm={6}>
         <FormControl>
          <FormLabel id="demo-row-radio-buttons-group-label">This or That?</FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
              <FormControlLabel value="Whey" control={<Radio />} label="Whey" />
              <FormControlLabel value="Wine " control={<Radio />} label="Wine" />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl>
          <FormLabel id="demo-row-radio-buttons-group-label">This or That?</FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
              <FormControlLabel value="Money" control={<Radio />} label="Money" />
              <FormControlLabel value="Fame" control={<Radio />} label="Fame" />
            </RadioGroup>
            </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl>
          <FormLabel id="demo-row-radio-buttons-group-label">This or That?</FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
              <FormControlLabel value="Dog" control={<Radio />} label="Dog" />
              <FormControlLabel value="Cat " control={<Radio />} label="Cat" />
            </RadioGroup>
            </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
         <FormControl>
          <FormLabel id="demo-row-radio-buttons-group-label">This or That?</FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
              <FormControlLabel value="Introvert" control={<Radio />} label="Introvert" />
              <FormControlLabel value="Extrovert " control={<Radio />} label="Extrovert" />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl>
          <FormLabel id="demo-row-radio-buttons-group-label">This or That?</FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
              <FormControlLabel value="Friendship" control={<Radio />} label="Friendship" />
              <FormControlLabel value="Romance" control={<Radio />} label="Romance" />
            </RadioGroup>
            </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
        <FormControl>
          <FormLabel id="demo-row-radio-buttons-group-label">This or That?</FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
              <FormControlLabel value="In-store shopping" control={<Radio />} label="In-store shopping" />
              <FormControlLabel value="Online shopping " control={<Radio />} label="Online shopping" />
            </RadioGroup>
            </FormControl>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}