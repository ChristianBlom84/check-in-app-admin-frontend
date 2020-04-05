import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Menu.module.scss';

interface Props {
  menuOpen: boolean;
  menuClosing: boolean;
}

const Menu: React.FC<Props> = ({ menuOpen, menuClosing }) => {
  const [delayedOpen, setDelayedOpen] = useState(false);
  useEffect(() => {
    if (menuOpen) {
      setTimeout(() => {
        setDelayedOpen(true);
      }, 50);
    }
  }, [menuOpen]);

  return (
    <nav
      className={`${styles.menu} ${
        delayedOpen && !menuClosing ? styles.open : ''
      }`}
    >
      <Link to="/message">Send</Link>
      <Link to="/subscribers">Subscribers</Link>
      <Link to="/users">Users</Link>
    </nav>
  );
};

export default Menu;
