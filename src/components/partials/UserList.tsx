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
    <table className={styles.table}>
      <thead>
        <tr>
          <th>Username:</th>
          <th>Email:</th>
        </tr>
      </thead>
      <tbody>
        {users.map(user => (
          <Fragment key={user._id}>
            <tr>
              <td key={user._id}>{user.name}</td>
              <td key={user.email}>{user.email}</td>
            </tr>
          </Fragment>
        ))}
      </tbody>
    </table>
  ) : (
    <div>Loading...</div>
  );
};

export default UserList;
