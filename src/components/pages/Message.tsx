import React, { useState, MouseEvent, useContext, useEffect } from 'react';
import { AuthContext } from '../../context/authContext';
import { RouteComponentProps, Redirect } from 'react-router-dom';

import axios from 'axios';
import styles from './Message.module.scss';

const Message: React.FC<RouteComponentProps> = ({ history }) => {
  const [message, setMessage] = useState('');
  const [isDisabled, setDisabled] = useState(false);

  useEffect(() => {}, [message]);

  const context = useContext(AuthContext);

  const onSubmit = (e: MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    setDisabled(true);
    axios
      .post(`${process.env.REACT_APP_SERVER}/api/push/send`, {
        message
      })
      .then(() => {
        setTimeout(() => {
          setMessage('');
          setDisabled(false);
        }, 5000);
      })
      .catch(error => console.log(error));
  };

  return (
    <main className="container">
      {context !== undefined && context.authStatus !== false ? (
        <div>
          <div>
            <h2 className={styles.h2}>Message subscribers</h2>
            <form className="container form">
              <textarea
                name="message"
                rows={8}
                cols={55}
                value={message}
                placeholder="Please enter a message"
                onChange={(e: React.FormEvent<HTMLTextAreaElement>): void =>
                  setMessage(e.currentTarget.value)
                }
              />
              <button
                className={styles.button}
                disabled={isDisabled}
                onClick={(e): void => onSubmit(e)}
              >
                {' '}
                Send
              </button>
            </form>
          </div>
        </div>
      ) : context && !context.authStatus ? (
        <Redirect to="/" />
      ) : (
        <div>Loading...</div>
      )}
    </main>
  );
};

export default Message;
