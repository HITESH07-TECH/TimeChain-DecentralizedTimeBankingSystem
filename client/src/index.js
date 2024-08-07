import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import Navbar from './components/Navbar';
import RegisterUser from './components/RegisterUser';
import UserDashboard from './components/UserDashboard';
import ListService from './components/ListService';
import ServiceList from './components/ServiceList';
import RequestService from './components/RequestService';

const Root = () => {
  const [isRegistered, setIsRegistered] = useState(false);

  const handleRegister = () => {
    setIsRegistered(true);
  };

  return (
    <Router>
      {isRegistered && <Navbar />}
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/register" element={<RegisterUser onRegister={handleRegister} />} />
        {isRegistered && (
          <>
            <Route path="/dashboard" element={<UserDashboard />} />
            <Route path="/list-service" element={<ListService />} />
            <Route path="/services" element={<ServiceList />} />
            <Route path="/request-service" element={<RequestService />} />
          </>
        )}
      </Routes>
    </Router>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Root />);
