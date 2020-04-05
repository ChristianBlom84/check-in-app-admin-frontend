import React, { useEffect, useState } from 'react';
import axios from 'axios';
import UserList from '../partials/UserList';
import Spinner from '../partials/Spinner';
import styles from './Users.module.scss';

const Users: React.FC = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = async (): Promise<void> => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_SERVER}/api/users/all`
      );
      console.log(res.data);
      setUsers(res.data.users);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return users ? (
    <main className={styles.main}>
      <div className={styles.userList}>
        <h2>Organization Name</h2>
        <h3>Users:</h3>
        <UserList users={users} />
      </div>
    </main>
  ) : (
    <Spinner />
  );
};

export default Users;
