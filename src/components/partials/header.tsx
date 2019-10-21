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

  return (
    <header className={styles.header}>
      {context !== undefined && context.authStatus !== false ? (
        <button onClick={(e): void => handleLogout(e)}>LOG ME OUT</button>
      ) : null}
      <h1>Check-In App Admin Panel</h1>
    </header>
  );
};

export default withRouter(Header);
