import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SubscriberList from '../partials/SubscriberList';
import Spinner from '../partials/Spinner';
import styles from './Subscribers.module.scss';

const Subscribers: React.FC = () => {
  const [subscribers, setSubscribers] = useState([]);

  const fetchSubscribers = async (): Promise<void> => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_SERVER}/api/subscribers/all`
      );
      setSubscribers(res.data.subscribers);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchSubscribers();
  }, []);

  return subscribers ? (
    <main className={styles.main}>
      <div className={styles.userList}>
        <h2>Organization Name</h2>
        <h3>Subscribers:</h3>
        <SubscriberList subscribers={subscribers} />
      </div>
    </main>
  ) : (
    <Spinner />
  );
};

export default Subscribers;
