import React, { useState, MouseEvent } from 'react';
import axios from 'axios';
import { RouteComponentProps } from 'react-router-dom';

const Login: React.FC<RouteComponentProps> = ({ history }) => {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const onSubmit = (e: MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    axios
      .post(`${process.env.REACT_APP_SERVER}api/auth/login/`, {
        email,
        password
      })
      .then(() => {
        history.push('/dashboard');
      });
  };

  return (
    <div className="container">
      <h1>Welcome to Checkin Admin Panel</h1>
      <div>
        <div>
          <h2>Login</h2>
          <form className="container form">
            <label>Email</label>
            <input
              type="text"
              name="email"
              placeholder="Please enter a valid email address"
              id=""
              onChange={(e: React.FormEvent<HTMLInputElement>): void =>
                setEmail(e.currentTarget.value)
              }
            />
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Please a enter password"
              id=""
              onChange={(e: React.FormEvent<HTMLInputElement>): void =>
                setPassword(e.currentTarget.value)
              }
            />
            <button onClick={(e): void => onSubmit(e)}>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Login;
