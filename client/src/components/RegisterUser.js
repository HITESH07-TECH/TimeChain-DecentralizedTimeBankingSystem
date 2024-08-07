import React from 'react';
import { useNavigate } from 'react-router-dom';

const RegisterUser = ({ onRegister }) => {
  const navigate = useNavigate();

  const handleRegisterClick = () => {
    // Perform registration logic here

    // Call the onRegister function to update the state
    onRegister();

    // Navigate to the dashboard after registration
    navigate('/dashboard');
  };

  return (
    <div>
      <h2>Register User</h2>
      <button onClick={handleRegisterClick} className="btn btn-primary">Register</button>
    </div>
  );
};

export default RegisterUser;

