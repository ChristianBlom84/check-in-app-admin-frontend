import React, { useState, useEffect, MouseEvent, useContext } from 'react';
import axios from 'axios';
import styles from './Header.module.scss';
import { withRouter } from 'react-router';
import { RouteComponentProps } from 'react-router-dom';
import { AuthContext } from '../../context/authContext';
import Menu from './Menu';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import icon from '../../assets/images/icon-transparent.png';

const Header: React.FC<RouteComponentProps> = ({ history }) => {
  const context = useContext(AuthContext);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {}, [context]);

  const handleLogout = async (
    e: MouseEvent<HTMLButtonElement>
  ): Promise<void> => {
    e.preventDefault();
    const res = await axios.get(
      `${process.env.REACT_APP_SERVER}/api/auth/logout`
    );
    if (context) {
      context.setAuthStatus(false);
    }
    history.push('/');
  };

  return (
    <header className={styles.header}>
      {context && context.authStatus ? (
        <button
          className={styles.menuIcon}
          onClick={(): void => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      ) : null}
      <div className={styles.headerContainer}>
        <img src={icon} alt="" />
        <h1>Check-In App Admin Panel</h1>
      </div>
      {menuOpen ? <Menu menuOpen={menuOpen} /> : null}
    </header>
  );
};

export default withRouter(Header);
