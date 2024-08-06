import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Register from './components/Register';
import ViewBalance from './components/ViewBalance';
import ListService from './components/ListService';
import VerifyService from './components/VerifyService';
import TransferCredits from './components/TransferCredits';
import Dashboard from './components/Dashboard';
import ServiceList from './components/ServiceList';
import RequestService from './components/RequestService';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/register" component={Register} />
        <Route path="/view-balance" component={ViewBalance} />
        <Route path="/list-service" component={ListService} />
        <Route path="/verify-service" component={VerifyService} />
        <Route path="/transfer-credits" component={TransferCredits} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/services" component={ServiceList} />
        <Route path="/request-service" component={RequestService} />
      </Switch>
    </Router>
  );
}

export default App;
