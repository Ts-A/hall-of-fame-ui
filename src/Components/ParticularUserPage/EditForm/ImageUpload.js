import React, {useState} from 'react'
import axios from 'axios';

 
function ImageUpload(){
 
      const [file, setFile] = useState();
      const [fileName, setFileName] = useState("");
      const [isUploaded, setIsUploaded] = useState(false);
      const saveFile = (e) => {
        setFile(e.target.files[0]);
        
      };
 
      const uploadFile = () => {
        const formData = new FormData();
        formData.append("display_picture", file);
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
              setIsUploaded(true);
            }
          }) 
          .catch(e => {
            console.log(e);
          })
      };
 
    
      return ( <div> 
        { isUploaded ? <p>Image Uploaded Successfully!</p> : <div><input type="file" onChange={saveFile} />
          <button onClick={uploadFile}>Upload</button></div>}
           
        </div>
      );
    
}
export default ImageUpload;
