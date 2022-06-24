//import axios from "axios";
import React, {useState, useEffect, useRef} from 'react';
import SignUp from './SignUp';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import SignIn from "./SignIn";


function LandingPage() {

    const [boolSignUpDialouge, setBoolSignUpDialouge] = useState(false);
    const [boolSignInDialouge, setBoolSignInDialouge] = useState(false);
    
    const handleDialougelSignUpClose = () => {
      setBoolSignUpDialouge(false);
    }
    const handleDialougelSignInClose = () => {
      setBoolSignInDialouge(false);
    }
    const handleSignUp = () => {
      setBoolSignUpDialouge(true);
    }
    const handleSignIn = () => {
      setBoolSignInDialouge(true);
    }
    
    return (
      <div class = "helloworld">
        <Dialog open={boolSignUpDialouge} onClose={handleDialougelSignUpClose}>
        <DialogTitle>SignUp</DialogTitle>
        <DialogContent>
          <SignUp />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialougelSignUpClose}>Cancel</Button>
          
        </DialogActions>
      </Dialog>
      <Dialog open={boolSignInDialouge} onClose={handleDialougelSignInClose}>
        <DialogTitle>SignIn</DialogTitle>
        <DialogContent>
          <SignIn />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialougelSignInClose}>Cancel</Button>
          
        </DialogActions>
      </Dialog>
        <p>Hello there! This is the landing Page.</p>
        <Button onClick={() => { handleSignUp()}}  variant="contained" color="primary" sx={{ height: 40 }}>SignUp</Button>
        <Button onClick={() => { handleSignIn()}}  variant="contained" color="primary" sx={{ height: 40 }}>SignIn</Button>
      </div>
    );
  
}
export default LandingPage;
