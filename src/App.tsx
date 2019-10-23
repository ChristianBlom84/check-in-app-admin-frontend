import React from 'react';
import axios from 'axios';
import './App.css';
import Login from './components/pages/Login';
import Header from './components/partials/Header';
import Register from './components/pages/Register';
import Dashboard from './components/pages/Dashboard';
import Message from './components/pages/Message';
import PrivateRoute from './components/routing/PrivateRoute';
import { BrowserRouter, Route } from 'react-router-dom';
import AuthContextProvider from './context/authContext';

const App: React.FC = () => {
  axios.defaults.withCredentials = true;

  return (
    <AuthContextProvider>
      <BrowserRouter>
        <Header />
        <Route path="/" exact component={Login} />
        <Route path="/register" exact component={Register} />
        <PrivateRoute path="/dashboard" exact component={Dashboard} />
        <PrivateRoute path="/message" exact component={Message} />
      </BrowserRouter>
    </AuthContextProvider>
  );
};

export default App;
