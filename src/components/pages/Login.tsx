import React, { useState, MouseEvent, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../../context/authContext';
import { RouteComponentProps } from 'react-router-dom';
import styles from './Login.module.css';

const Login: React.FC<RouteComponentProps> = ({ history }) => {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const context = useContext(AuthContext);

  const onSubmit = async (e: MouseEvent<HTMLButtonElement>): Promise<void> => {
    e.preventDefault();
    axios
      .post(`${process.env.REACT_APP_SERVER}/api/auth/login/`, {
        email,
        password
      })
      .then(() => {
        if (context !== undefined) {
          context.setAuthStatus(true);
          history.push('/dashboard');
        }
      });
  };

  return (
    <div className="container">
      {console.log('this is authstatus', context)}
      <div>
        <div>
          <h2 className={styles.h2}>Login</h2>
          <form className="container form">
            <input
              type="text"
              name="email"
              placeholder="Please enter a valid email address"
              id=""
              onChange={(e: React.FormEvent<HTMLInputElement>): void =>
                setEmail(e.currentTarget.value)
              }
            />
            <input
              type="password"
              name="password"
              placeholder="Please a enter password"
              id=""
              onChange={(e: React.FormEvent<HTMLInputElement>): void =>
                setPassword(e.currentTarget.value)
              }
            />
            <button
              className={styles.button}
              onClick={(e): Promise<void> => onSubmit(e)}
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Login;
