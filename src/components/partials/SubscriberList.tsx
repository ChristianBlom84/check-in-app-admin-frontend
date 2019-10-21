import React, { Fragment } from 'react';
import styles from './SubscriberList.module.css';

interface Subscriber {
  _id: string;
  email: string;
  pushToken: number;
}

interface Props {
  subscribers: Subscriber[];
}

const SubscriberList: React.FC<Props> = ({ subscribers }: Props) => {
  return subscribers ? (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>Email:</th>
          <th>Push Token:</th>
        </tr>
      </thead>
      <tbody>
        {subscribers.map(subscriber => (
          <Fragment key={subscriber._id}>
            <tr>
              <td key={subscriber._id}>{subscriber.email}</td>
              <td key={subscriber.pushToken}>{subscriber.pushToken}</td>
            </tr>
          </Fragment>
        ))}
      </tbody>
    </table>
  ) : (
    <div>Loading...</div>
  );
};

export default SubscriberList;
