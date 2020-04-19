import React, { Fragment } from 'react';
import { Subscriber } from '../pages/Subscribers';
import styles from './SubscriberList.module.scss';
import EditIcon from '@material-ui/icons/Edit';

interface Props {
  subscribers: Subscriber[];
  setEditing: (editing: boolean) => void;
  setEditInfo: (subscriber: Subscriber) => void;
}

const SubscriberList: React.FC<Props> = ({
  subscribers,
  setEditing,
  setEditInfo
}: Props) => {
  const openModal = (subscriber: Subscriber): void => {
    setEditInfo({
      name: subscriber.name,
      email: subscriber.email,
      organization: subscriber.organization,
      pushToken: subscriber.pushToken
    });
    setEditing(true);
  };

  return subscribers ? (
    <ul className={styles.list}>
      {subscribers.map(subscriber => (
        <li className={styles.subscriber} key={subscriber._id}>
          <div>
            <h4>{subscriber.name}</h4>
            <p>
              Email: <span className={styles.subInfo}>{subscriber.email}</span>
            </p>
            <p>
              Organization:{' '}
              <span className={styles.subInfo}>{subscriber.organization}</span>
            </p>
            <p>
              Push Token:{' '}
              <span className={styles.subInfo}>{subscriber.pushToken}</span>
            </p>
          </div>
          <button onClick={(): void => openModal(subscriber)}>
            <EditIcon />
          </button>
        </li>
      ))}
    </ul>
  ) : (
    <div>Loading...</div>
  );
};

export default SubscriberList;
