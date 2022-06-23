import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import LandingPage from "./Components/LandingPage/LandingPage.js";
import ParticularUserPage from "./Components/ParticularUserPage/ParticularUserPage.js";
import Pricing from "./Components/AllUsersPage/AllUsersPage.js";
// import {CreateUser} from "Components/CreateUser";

const App = () => {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<LandingPage />}/>
          <Route path="/users" element={<Pricing />}/>
          <Route path="/user/:username" element={<ParticularUserPage />}/>
          {/* <Route exact path="/login" element={<Login/>}/>
          <Route exact path="/recovery-password" element={<RecoveryPassword/>}/>
          <Route path="*" element={<NotFound/>}/> */}
        </Routes>
    </Router>
  );
}

export default App;
