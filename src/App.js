import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./Components/LandingPage/LandingPage.js";
import AllUsersPage from "./Components/AllUsersPage/AllUsersPage.js";
import FormFillingPage from "./Components/FormFillingPage/FromFillingPage.js";
import Pricing from "./Components/AllUsersPage/AllUsersPage.js";
// import {CreateUser} from "Components/CreateUser";

const App = () => {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<LandingPage />}/>
          <Route path="/users" element={<Pricing />}/>
          <Route path="/newuser" element={<FormFillingPage />}/>
          {/* <Route exact path="/login" element={<Login/>}/>
          <Route exact path="/recovery-password" element={<RecoveryPassword/>}/>
          <Route path="*" element={<NotFound/>}/> */}
        </Routes>
    </Router>
  );
}

export default App;
