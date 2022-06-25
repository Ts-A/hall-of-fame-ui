import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

import ParticularUserPage from "./Components/ParticularUserPage/ParticularUserPage.js";

import AllUsersPage from "./Components/AllUsersPage/AllUsersPage.js";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";


const App = () => {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<AllUsersPage />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/user/:username" element={<ParticularUserPage />}/>
          {/* <Route exact path="/login" element={<Login/>}/>
          <Route exact path="/recovery-password" element={<RecoveryPassword/>}/>
          <Route path="*" element={<NotFound/>}/> */}
        </Routes>
    </Router>
  );
}

export default App;
