import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
import Login from "./Pages/Login";
import ErrorPage from "./Pages/ErrorPage";
import MatchScreen from "./Pages/MatchScreen";
import Navbar from "./components/Navigationbar/Navbar";
import Form from "./Pages/Form";
import Maps from "./Pages/Maps";
import Statistics from "./Pages/Statistics";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<Form />} />
        <Route path="/maps" element={<Maps />} />
        <Route path="/login" element={<Login />} />
        <Route path="/statistics" element={<Statistics />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/matchscreen" element={<MatchScreen />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
