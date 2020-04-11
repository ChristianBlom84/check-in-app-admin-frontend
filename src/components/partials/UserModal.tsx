import React, { useState } from 'react';
import Spinner from './Spinner';
import styles from './UserModal.module.scss';
import { User } from '../pages/Users';

interface Props {
  editInfo: User;
  setEditing: (state: boolean) => void;
}

const UserModal: React.FC<Props> = ({ editInfo, setEditing }: Props) => {
  const [formData, setFormData] = useState({
    name: editInfo.name,
    email: editInfo.email,
    role: editInfo.role
  });

  const handleCloseModal = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ): void => {
    e.stopPropagation();
    setEditing(false);
  };

  return (
    <div
      className={styles.background}
      onClick={(e): void => handleCloseModal(e)}
    >
      <div className={styles.modal} onClick={(e): void => e.stopPropagation()}>
        {editInfo ? (
          <form className={styles.form} action="post">
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
            <label htmlFor="role">Role:</label>
            <select
              name="role"
              id="role"
              value={formData.role}
              onChange={(e): void =>
                setFormData({
                  ...formData,
                  role: Number(e.currentTarget.selectedIndex)
                })
              }
            >
              <option value={0}>Standard</option>
              <option value={1}>Administrator</option>
            </select>
          </form>
        ) : (
          <Spinner />
        )}
      </div>
    </div>
  );
};

export default UserModal;
