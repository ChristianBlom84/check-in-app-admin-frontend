import React, { useEffect, MouseEvent, useContext } from 'react';
import styles from './Header.module.css';
import { withRouter } from 'react-router';

import { RouteComponentProps } from 'react-router-dom';
import { AuthContext } from '../../context/authContext';

const Header: React.FC<RouteComponentProps> = ({ history }) => {
  const context = useContext(AuthContext);

  useEffect(() => {}, [context]);

  const handleLogout = (e: MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    context!.setAuthStatus(false);
    history.push('/');
  };

  const goToMessage = (e: MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    history.push('/message');
  };
  const goToDashBoard = (e: MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    history.push('/dashboard');
  };

  return (
    <header className={styles.header}>
      <div className={styles.buttonContainer}>
        {context !== undefined && context.authStatus !== false ? (
          <div>
            <button
              className={styles.headerButton}
              onClick={(e): void => handleLogout(e)}
            >
              Logout
            </button>
            <button
              className={styles.headerButton}
              onClick={(e): void => goToMessage(e)}
            >
              Message
            </button>
            <button
              className={styles.headerButton}
              onClick={(e): void => goToDashBoard(e)}
            >
              Dashboard
            </button>
          </div>
        ) : (
          <div></div>
        )}
      </div>
      <div className={styles.headerContainer}>
        {' '}
        <h1>Check-In App Admin Panel</h1>
      </div>
    </header>
  );
};

export default withRouter(Header);
