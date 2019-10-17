import React, { useState, MouseEvent } from 'react';
import axios from 'axios';
import { RouteComponentProps } from 'react-router-dom';

const Login: React.FC<RouteComponentProps> = ({ history }) => {
  const [password, setPassword] = useState<string>();
  const [email, setEmail] = useState<string>();

  const onSubmit = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    axios
      .post('http://localhost:7000/api/auth/login/', {
        email,
        password,
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
              onChange={(e: React.FormEvent<HTMLInputElement>) =>
                setEmail(e.currentTarget.value)
              }
            />
            <label>Password</label>
            <input
              type="text"
              name="password"
              placeholder="Please a enter password"
              id=""
              onChange={(e: React.FormEvent<HTMLInputElement>) =>
                setPassword(e.currentTarget.value)
              }
            />
            <button onClick={(e) => onSubmit(e)}>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Login;
