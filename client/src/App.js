import "./App.css";
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
import Login from "./Pages/Login";
import ErrorPage from "./Pages/ErrorPage";
import MatchScreen from "./Pages/MatchScreen";
import Form from "./Pages/Form";
import Maps from "./Pages/Maps";
import Statistics from "./Pages/Statistics";
import Navbar from "./components/Navigationbar/Navbar";
import AuthApi from "./api/AuthApi";

function App() {
  const [auth, setAuth] = useState(false);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/maps" element={<Maps />} />
        <Route path="/statistics" element={<Statistics />} />
        <Route path="/login" element={<Login />} />
        <Route path="/form" element={<Form />} />
        <AuthApi.Provider value={{ auth, setAuth }}>
          <Route
            path="/profile"
            element={
              <RouteProtected>
                <Profile />
              </RouteProtected>
            }
          />
          <Route
            path="/matchscreen"
            element={
              <RouteProtected>
                <MatchScreen />
              </RouteProtected>
            }
          ></Route>
        </AuthApi.Provider>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

function RouteProtected({ children }) {
  const authApi = React.useContext(AuthApi);
  return authApi ? children : <Navigate to="/login" />;
}

// function RouteRegistration({ children }) {
//   const authApi = React.useContext(AuthApi);
//   return (
//     <Route
//       {...rest}
//       render={(props) =>
//         !authApi.auth ? <Component {...props} /> : <Navigate to="/" />
//       }
//     />
//   );
// };

export default App;
