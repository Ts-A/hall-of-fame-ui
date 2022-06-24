//import axios from "axios";
import React, {useState, useEffect} from "react";
import { useNavigate, useLocation, useParams } from "react-router-dom";


import axios from "axios";

export default function ParticularUserPage() {
  
    const [user, setUser] = useState({});
    const [isFormFIlled, setIsFormFIlled] = useState(false);
    let token = "";
    let {username} = useParams();
    const getUser = () => {
      axios
      .get(URL + "user/" + {username}, {
        token: token
      })
      .then((response) => {
        console.log(response.data);
        setUser(response.data.user);
        
      })
      .catch(function (error) {
        console.log(error);
      });
    }

    // useEffect(() => {
    //   getUser(); 
    // })
    return (
      <div>
        <p>You have filled the form.</p>
      </div>
    );
}


