import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import Navbar from './components/Navbar';
import RegisterUser from './components/RegisterUser';
import UserDashboard from './components/UserDashboard';
import ListService from './components/ListService';
import ServiceList from './components/ServiceList';
import RequestService from './components/RequestService';

ReactDOM.render(
  <Router>
    <Navbar />
    <Switch>
      <Route path="/" exact component={App} />
      <Route path="/register" component={RegisterUser} />
      <Route path="/dashboard" component={UserDashboard} />
      <Route path="/list-service" component={ListService} />
      <Route path="/services" component={ServiceList} />
      <Route path="/request-service" component={RequestService} />
    </Switch>
  </Router>,
  document.getElementById('root')
);
