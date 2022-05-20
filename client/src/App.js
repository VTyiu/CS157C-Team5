import "./App.css";
import Axios from "axios";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
import Login from "./Pages/Login";
import ErrorPage from "./Pages/ErrorPage";
import MatchScreen from "./Pages/MatchScreen";
import TestMatch from "./Pages/testMatch";
import Navbar from "./components/Navigationbar/Navbar";
import Form from "./Pages/Form";
import Maps from "./Pages/Maps";
import Statistics from "./Pages/Statistics";
import { useEffect, useState } from "react";

const App = () => {
  const [isAuth, setAuth] = useState(false);

  // useEffect(() => {}, [isAuth]);

  let logUser = async (email, password, setAuth) => {
    try {
      const res = await Axios.post("http://localhost:3001/loginUser", {
        email: email,
        password: password,
      });

      if (res.data.status === 100) {
        console.log("auth");
        setAuth(true);
        return true;
      } else {
        console.log("failed");
        return false;
      }
    } catch (err) {
      console.log(err);
      return false;
    }
  };

  return (
    <Router>
      <Navbar isAuth={isAuth} setAuth={setAuth} />
      <Routes>
        <Route path="/" element={<Home isAuth={isAuth} setAuth={setAuth} />} />
        <Route path="/form" element={<Form />} />
        <Route path="/maps" element={<Maps />} />
        <Route
          path="/login"
          element={
            <Login isAuth={isAuth} setAuth={setAuth} logUser={logUser} />
          }
        />
        <Route path="/statistics" element={<Statistics />} />
        <Route
          path="/profile"
          element={<Profile isAuth={isAuth} setAuth={setAuth} />}
        />
        <Route path="/matchscreen" element={<MatchScreen />} />
        <Route path="/testmatch" element={<TestMatch />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
};

export default App;
