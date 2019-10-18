import React from 'react';
import styles from './UserList.module.css';

interface User {
  _id: string;
  email: string;
  role: number;
}

interface Props {
  users: User[];
}

const UserList: React.FC<Props> = ({ users }: Props) => {
  return users ? (
    <div>
      <ul className={styles.list}>
        {users.map(user => (
          <li key={user._id}>{user.email}</li>
        ))}
      </ul>
    </div>
  ) : (
    <div>Loading...</div>
  );
};

export default UserList;
