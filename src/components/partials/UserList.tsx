import React from 'react';
import { UserRoles } from '../../context/authContext';
import EditIcon from '@material-ui/icons/Edit';
import styles from './UserList.module.scss';

interface User {
  _id?: string;
  name: string;
  email: string;
  role: UserRoles;
}

interface Props {
  users: User[];
  setEditing: (editing: boolean) => void;
  setEditInfo: (user: User) => void;
}

const UserList: React.FC<Props> = ({
  users,
  setEditing,
  setEditInfo
}: Props) => {
  const openModal = (user: User): void => {
    setEditInfo({ name: user.name, email: user.email, role: user.role });
    setEditing(true);
  };

  return users ? (
    <ul className={styles.list}>
      {users.map(user => (
        <li className={styles.user} key={user._id}>
          <div>
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
          </div>
          <button onClick={(): void => openModal(user)}>
            <EditIcon />
          </button>
        </li>
      ))}
    </ul>
  ) : (
    <div>Loading...</div>
  );
};

export default UserList;
