import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/login'; 
import Dashboard from './pages/dashboard1';
import Announcement from './pages/dashboard3';
import Document from './pages/dashboard4';
import Organization from './pages/dashboard5';
import Users from './pages/dashboard6';
import BackupRestore from './pages/dashboard7';
import './login.css';
// import './dashboard.css'



const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/announcement" element={<Announcement />} />
        <Route path="/document-approval" element={<Document />} />
        <Route path="/organization" element={<Organization />} />
        <Route path="/users" element={<Users />} />
        <Route path="/backup-restore" element={<BackupRestore />} />
      </Routes>
    </Router>
  );
};

export default App;
