import  React, {useState} from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from "axios";
import { Card, CardContent, IconButton, Input, InputLabel } from '@mui/material';
import uploadImage from '../../Assets/uploadImage.svg';
import Alert from '@mui/material/Alert';
import { useNavigate, useLocation } from "react-router-dom";
import { red } from '@mui/material/colors';
import Footer from '../Footer/Footer';


function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Hall Of Fame
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme({
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
  palette:{
    primary:{
      main: '#7584c3'
    }
  }
});

//========================not sure about this plis check==============================
//   const [soeid, setSoeid] = useState("");
//   const [password, setPassword] = useState("");
//   const [isSignedIn, setisSignedIn] = useState(true);
  
 
export default function PhotoUpload(){
    const navigate = useNavigate();
    const [file, setFile] = useState();
    const [fileName, setFileName] = useState("");
    const [isUploaded, setIsUploaded] = useState(false);
    const[uploadText, setUploadText] = useState("Please choose a picture*");

    const changeUploadText = (text) => setUploadText(text);

    const saveFile = (e) => {
      setFile(e.target.files[0]);

      changeUploadText("")

      const formData = new FormData();
      formData.append("display_picture", file);
      setIsUploaded(true);
      axios({
          method: 'POST',
          url: "https://hall-of-fame-server-hall-of-fame-server.linuxops-pune-a2.conygre.com/user/image-upload",
          data : formData,
          headers: {
            'Authorization': localStorage.getItem('token') 
          }
        })
        .then(response => {
          console.log();
          if(response.status === 200) {
            console.log(response);
            console.log("Image Uploaded Successfully");
            
            //replace with URL to user page########################################
            navigate("/user/" + localStorage.getItem('soeid') + "/edit")
          }
        }) 
        .catch(e => {
          console.log(e);
        })
      
      
    };
    
  return (
    <ThemeProvider theme={theme}>
      
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Card sx={{marginTop: 4}} style={{ border: "3px outset #7584c333", borderRadius: "15px" }}>
          <CardContent>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <img src={uploadImage} width="300px" height="500px"  style={{marginTop:"-100px", marginBottom:"-100px"}}/>
          {isUploaded ? "" : <Typography component="h1" variant="h5">
            Upload Photo
          </Typography>}
          <Box  noValidate  sx={{ mt: 1 }}>
            <Grid container spacing={2} >
              <Grid item xs={12} sm={6}>
                
              </Grid>
              <Grid item xs={12}>
               
              </Grid>
            </Grid>
            {/* <Button
              onChange={saveFile}
              type="button"
              fullWidth
              variant="contained"
              sx={{ mt: 0, mb: 0 }}
            >
             Upload
            <input type="file" onChange={saveFile}/>
            </Button> */}
            <label htmlFor="contained-button-file">
            <input accept="image/*" id="contained-button-file" multiple type="file" hidden onChange={saveFile}/>
            <Button variant="contained" component="span" sx={{ ml:5, mt:-2}} fullWidth>
                Upload
            </Button>
            </label>
            <Grid item xs={12}>
            <Typography sx={{ml:2}} component="h6" fullWidth color={red[500]}>{uploadText}
                </Typography>   
            </Grid>
            <Button onClick={() => {
              navigate("/");
            }}>Return back to Home Page</Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
               
              </Grid>
            </Grid>
          </Box>
        </Box>
        </CardContent>
        </Card>
        <Footer />
      </Container>

    </ThemeProvider>
  )
};