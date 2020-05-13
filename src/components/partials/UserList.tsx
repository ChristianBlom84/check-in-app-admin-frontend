import React, { Fragment, useState, useEffect } from 'react';
import { UserRoles } from '../../context/authContext';
import { User } from '../pages/Users';
import EditIcon from '@material-ui/icons/Edit';
import styles from './UserList.module.scss';

interface Props {
  users: User[];
  newUser: boolean;
  setNewUser: (isNewUser: boolean) => void;
  setEditing: (editing: boolean) => void;
  setEditInfo: (user: User) => void;
}

const UserList: React.FC<Props> = ({
  users,
  setNewUser,
  setEditing,
  setEditInfo
}: Props) => {
  const [notificationsExpanded, setNotificationsExpanded] = useState<boolean[]>(
    []
  );

  useEffect(() => {
    console.log('Useeffect');
    const notificationArrows: boolean[] = [];

    users.forEach(() => {
      notificationArrows.push(false);
    });

    setNotificationsExpanded(notificationArrows);
  }, [users]);

  const openModal = (user: User): void => {
    setEditInfo({ name: user.name, email: user.email, role: user.role });
    setEditing(true);
  };

  const handleShowNotifications = (index: number): void => {
    const newNotificationsExpanded = notificationsExpanded;
    newNotificationsExpanded[index] = !newNotificationsExpanded[index];
    setNotificationsExpanded(newNotificationsExpanded);
    console.log(index);
  };

  return users ? (
    <Fragment>
      <ul className={styles.list}>
        {users.map((user, index) => (
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
              <div onClick={(): void => handleShowNotifications(index)}>
                <div className={styles.notificationsBox}>
                  Sent notifications:{' '}
                  <div className={styles.arrowBox}>
                    <i
                      className={
                        notificationsExpanded[index] ? 'arrow-up' : 'arrow-down'
                      }
                    ></i>
                  </div>
                </div>
                {user.notifications && notificationsExpanded[index]
                  ? user.notifications.map(notification => (
                      <p key={notification._id}>
                        Message:{' '}
                        <span className={styles.subInfo}>
                          {notification.message}
                        </span>
                      </p>
                    ))
                  : null}
              </div>
            </div>
            <button onClick={(): void => openModal(user)}>
              <EditIcon />
            </button>
          </li>
        ))}
      </ul>
      <button
        className={styles.button}
        type="button"
        onClick={(): void => {
          setNewUser(true);
          setEditing(true);
        }}
      >
        Add New User
      </button>
    </Fragment>
  ) : (
    <div>Loading...</div>
  );
};

export default UserList;
