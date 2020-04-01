import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Menu.module.scss';

interface Props {
  menuOpen: boolean;
}

const Menu: React.FC<Props> = ({ menuOpen }) => {
  const [delayedOpen, setDelayedOpen] = useState(false);
  useEffect(() => {
    if (menuOpen) {
      setTimeout(() => {
        setDelayedOpen(true);
      }, 50);
    }
  }, [menuOpen]);

  return (
    <nav className={`${styles.menu} ${delayedOpen ? styles.open : ''}`}>
      <Link to="/message">Send</Link>
      <Link to="/message">Subscribers</Link>
      <Link to="/message">Users</Link>
    </nav>
  );
};

export default Menu;
