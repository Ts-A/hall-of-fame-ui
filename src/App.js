import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";


import AllUsersPage from "./Components/AllUsersPage/AllUsersPage.js";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import Checkout from "./Components/ParticularUserPage/FormNotFilled/Checkout";
import User from "./Components/ParticularUserPage/FormFilled/FormFilled";

const App = () => {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<AllUsersPage />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/user/:username" element={<User />}/>
          <Route path="/user/:username/edit" element={<Checkout />}/>
          {/* <Route exact path="/login" element={<Login/>}/>
          <Route exact path="/recovery-password" element={<RecoveryPassword/>}/>
          <Route path="*" element={<NotFound/>}/> */}
        </Routes>
    </Router>
  );
}

export default App;
