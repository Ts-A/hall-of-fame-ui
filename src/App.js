import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

import AllUsersPage from "./Components/AllUsersPage/AllUsersPage.js";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import Form from "./Components/ParticularUserPage/EditForm/Form";
import User from "./Components/ParticularUserPage/User/User";
import NotFound from "./Components/NotFound/PageNotFound";
import PhotoUpload from "./Components/Register/PhotoUpload.js";


const App = () => {
  return (
      <Router>
          <Routes>
            <Route path="/" element={<AllUsersPage />}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/user/upload" element={<PhotoUpload/>}/>
            <Route path="/user/:soeid" element={<User />}/>
            <Route path="/user/:soeid/edit" element={<Form />}/>
            <Route path="*" element={<NotFound />} />
          </Routes>
      </Router>
  );
}

export default App;
