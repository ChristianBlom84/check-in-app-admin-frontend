import React, { Fragment } from 'react';
import styles from './SubscriberList.module.scss';

interface Subscriber {
  _id: string;
  name: string;
  email: string;
  pushToken: number;
}

interface Props {
  subscribers: Subscriber[];
}

const SubscriberList: React.FC<Props> = ({ subscribers }: Props) => {
  return subscribers ? (
    <ul className={styles.list}>
      {subscribers.map(subscriber => (
        <li key={subscriber._id}>
          <p>
            Name: <span className={styles.subInfo}>{subscriber.name}</span>
          </p>
          <p>
            Email: <span className={styles.subInfo}>{subscriber.email}</span>
          </p>
          <p>
            Push Token:{' '}
            <span className={styles.subInfo}>{subscriber.pushToken}</span>
          </p>
        </li>
      ))}
    </ul>
  ) : (
    <div>Loading...</div>
  );
};

export default SubscriberList;
