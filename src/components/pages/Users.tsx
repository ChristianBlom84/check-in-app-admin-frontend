import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { UserRoles } from '../../context/authContext';
import UserList from '../partials/UserList';
import Spinner from '../partials/Spinner';
import styles from './Users.module.scss';

export interface User {
  _id?: string;
  name: string;
  email: string;
  role: UserRoles;
}

const Users: React.FC = () => {
  const [users, setUsers] = useState([]);
  const [editing, setEditing] = useState(false);
  const [editInfo, setEditInfo] = useState<User | undefined>();

  const fetchUsers = async (): Promise<void> => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_SERVER}/api/users/all`
      );
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
        <UserList
          setEditing={setEditing}
          setEditInfo={setEditInfo}
          users={users}
        />
      </div>
    </main>
  ) : (
    <Spinner />
  );
};

export default Users;
