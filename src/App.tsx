import React from 'react';
import './App.css';
import Login from './components/pages/Login';
import Header from './components/partials/Header';
import Register from './components/pages/Register';
import Dashboard from './components/pages/Dashboard';
import { BrowserRouter, Route } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <Route path="/" exact component={Login} />
      <Route path="/register" exact component={Register} />
      <Route path="/dashboard" exact component={Dashboard} />
    </BrowserRouter>
  );
};

export default App;
