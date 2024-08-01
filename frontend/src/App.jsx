// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import UserLayout from './UserLayout';
import Home from './pages/Home/Home';
import Auth from "./pages/Auth/Auth";
import Profile from "./pages/Profile/Profile";
import Feed from './pages/Feed/Feed';
import Chatbox from './pages/Chatbox/Chatbox';
import Error from './pages/Error/Error';

const App = () => {
  return (
    <Router>
      
        <Routes>
         <Route path="/" element={<Home />} />
         <Route path="*" element={<Error />} />
         <Route path="/login" element={<Auth />} />
         <Route path="/profile" element={<Profile />} />
         <Route path="/feed" element={<Feed/>} />
         <Route path="/chatbox" element={<Chatbox/>} />
        </Routes>
    
    </Router>
  );
};

export default App;
