import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import InputLabel from '@mui/material/InputLabel';

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
        <Grid item xs={12} sm={6}>
          <TextField
            id="state"
            name="state"
            label="State/Province/Region"
            fullWidth
            variant="filled"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
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
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="Use this address for payment details"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}