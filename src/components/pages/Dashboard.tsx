import React, { useEffect, useState } from 'react';
import axios from 'axios';
import UserList from '../partials/UserList';
import SubscriberList from '../partials/SubscriberList';
import styles from './Dashboard.module.scss';

const Dashboard: React.FC = () => {
  const [users, setUsers] = useState([]);
  const [subscribers, setSubscribers] = useState([]);

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

  const fetchSubscribers = async (): Promise<void> => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_SERVER}/api/subscribers/all`
      );
      console.log(res.data);
      setSubscribers(res.data.subscribers);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchUsers();
    fetchSubscribers();
  }, []);

  return users && subscribers ? (
    <main className={styles.dashboard}>
      <div className={styles.userList}>
        <h2>Users:</h2>
        <UserList users={users} />
      </div>
      <div className={styles.subscriberList}>
        <h2>Subscribers:</h2>
        <SubscriberList subscribers={subscribers} />
      </div>
    </main>
  ) : (
    <div>Loading...</div>
  );
};

export default Dashboard;
