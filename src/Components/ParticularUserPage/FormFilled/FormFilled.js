//import axios from "axios";
import React, {useState, useEffect} from "react";
import { useNavigate, useLocation, useParams } from "react-router-dom";


import axios from "axios";

export default function ParticularUserPage() {
  
    const [defaultUser, setdefaultUser] = useState(localStorage.getItem("user"));
    const [userData, setUserData] = useState("");
    let token = "";
    let {username} = useParams();
    const getUser = () => {
      axios
      .get(URL + "user/" + {username}, {
        token: token,


      })
      .then((response) => {
        console.log(response.data);
        setUserData(userData);
        
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


