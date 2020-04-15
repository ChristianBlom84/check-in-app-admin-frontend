import React, { useState } from 'react';
import axios from 'axios';
import Spinner from './Spinner';
import styles from './UserModal.module.scss';
import { User } from '../pages/Users';

interface Props {
  editInfo: User;
  setEditing: (state: boolean) => void;
  users: User[];
  setUsers: (users: User[]) => void;
}

const UserModal: React.FC<Props> = ({
  editInfo,
  setEditing,
  users,
  setUsers
}: Props) => {
  const [formData, setFormData] = useState({
    name: editInfo.name,
    email: editInfo.email,
    password: '',
    passwordCheck: '',
    role: editInfo.role
  });
  const [error, setError] = useState('');

  const handleCloseModal = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ): void => {
    e.stopPropagation();
    setEditing(false);
  };

  const handleSubmit = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();

    if (formData.password && formData.passwordCheck !== formData.password) {
      setError('Passwords do not match.');
      setTimeout(() => {
        setError('');
      }, 2000);
    } else {
      const res = await axios.put(
        `${process.env.REACT_APP_SERVER}/api/users/update`,
        {
          name: formData.name,
          email: formData.email,
          password: formData.password,
          role: formData.role
        }
      );

      if (res.status === 200) {
        const newUsers = users.map(user => {
          if (user._id === res.data._id) {
            return res.data;
          }
          return user;
        });
        setUsers(newUsers);
      }
    }
  };

  return (
    <div
      className={styles.background}
      onClick={(e): void => handleCloseModal(e)}
    >
      <div className={styles.modal} onClick={(e): void => e.stopPropagation()}>
        {editInfo ? (
          <form className={styles.form} action="post" onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={(e): void =>
                setFormData({ ...formData, name: e.currentTarget.value })
              }
            />
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={(e): void =>
                setFormData({ ...formData, email: e.currentTarget.value })
              }
            />
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              placeholder={'Password123'}
              onChange={(e): void =>
                setFormData({ ...formData, password: e.currentTarget.value })
              }
            />
            <span className={styles.error}>{error ? error : null}</span>
            <label htmlFor="passwordCheck">Retype Password:</label>
            <input
              type="password"
              name="passwordcheck"
              value={formData.passwordCheck}
              placeholder={'Password123'}
              onChange={(e): void =>
                setFormData({
                  ...formData,
                  passwordCheck: e.currentTarget.value
                })
              }
            />
            {error ? <span className={styles.error}>{error}</span> : null}
            <label htmlFor="role">Role:</label>
            <select
              name="role"
              id="role"
              value={formData.role}
              onChange={(e): void => {
                setFormData({
                  ...formData,
                  role: Number(e.currentTarget.value)
                });
              }}
            >
              <option value={0}>Standard</option>
              <option value={1}>Administrator</option>
            </select>
            <button type="submit">Save</button>
          </form>
        ) : (
          <Spinner />
        )}
      </div>
    </div>
  );
};

export default UserModal;
