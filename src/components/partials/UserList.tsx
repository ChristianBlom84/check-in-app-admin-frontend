import React, { Fragment } from 'react';
import styles from './UserList.module.scss';

interface User {
  _id: string;
  name: string;
  email: string;
  role: number;
}

interface Props {
  users: User[];
}

const UserList: React.FC<Props> = ({ users }: Props) => {
  return users ? (
    <ul className={styles.list}>
      {users.map(user => (
        <li key={user._id}>
          <h4>{user.name}</h4>
          <p className={styles.subInfo}>{user.email}</p>
          <p className={styles.subInfo}>
            User Role: {user.role === 0 ? 'Standard' : 'Administrator'}
          </p>
        </li>
      ))}
    </ul>
  ) : (
    <div>Loading...</div>
  );
};

export default UserList;
