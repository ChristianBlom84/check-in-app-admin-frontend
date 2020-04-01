import React, { useState, useContext, FormEvent } from 'react';
import axios from 'axios';
import { AuthContext } from '../../context/authContext';
import { RouteComponentProps } from 'react-router-dom';
import styles from './Login.module.scss';

const Login: React.FC<RouteComponentProps> = ({ history }) => {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const context = useContext(AuthContext);

  const onSubmit = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();
    const res = await axios.post(
      `${process.env.REACT_APP_SERVER}/api/auth/login/`,
      {
        email,
        password
      }
    );
    if (context !== undefined) {
      context.setAuthStatus(true);
      history.push('/dashboard');
    }
  };

  return (
    <main className="container">
      <h2>Organization Name</h2>
      <p className="preamble">
        Sign in to administrate your organization and send out push
        notifications.
      </p>
      <form
        className={styles.form}
        onSubmit={(e): Promise<void> => onSubmit(e)}
      >
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            name="email"
            placeholder="John@Doe.com"
            onChange={(e: React.FormEvent<HTMLInputElement>): void =>
              setEmail(e.currentTarget.value)
            }
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            placeholder="Password123"
            onChange={(e: React.FormEvent<HTMLInputElement>): void =>
              setPassword(e.currentTarget.value)
            }
          />
          <button className={styles.button} type="submit">
            Login
          </button>
        </div>
      </form>
    </main>
  );
};
export default Login;
