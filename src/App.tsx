import React from 'react';
import './App.css';
import Login from './components/login';
import Header from './components/header';
import Register from './components/register';
import Dashboard from './components/dashboard';
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
