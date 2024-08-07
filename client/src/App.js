import React from 'react';
import { Link } from 'react-router-dom';

const App = () => {
  return (
    <div className="container">
      <h1>Welcome to the Home Page</h1>
      <Link to="/register" className="btn btn-primary">Register</Link>
    </div>
  );
};

export default App;
