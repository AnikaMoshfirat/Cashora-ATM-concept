import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import ATMPanel from './components/ATMPanel';
import AdminPanel from './components/AdminPanel';

function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  return (
    <Router>
     <Routes>
  <Route path="/" element={<Login setAuthenticated={setAuthenticated} setIsAdmin={setIsAdmin} />} />
  <Route path="/register" element={<Register />} />
  {authenticated && (
    <>
      <Route path="/atm" element={<ATMPanel />} />
      {isAdmin && <Route path="/admin" element={<AdminPanel />} />}
    </>
  )}
</Routes>

    </Router>
  );
}

export default App;
