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
          <p>
            Email: <span className={styles.subInfo}>{user.email}</span>
          </p>
          <p>
            User Role:{' '}
            <span className={styles.subInfo}>
              {user.role === 0 ? 'Standard' : 'Administrator'}
            </span>
          </p>
        </li>
      ))}
    </ul>
  ) : (
    <div>Loading...</div>
  );
};

export default UserList;
