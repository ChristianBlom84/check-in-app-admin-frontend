import React, { useState, MouseEvent, useContext } from 'react';
import { AuthContext } from '../../context/authContext';
import { RouteComponentProps } from 'react-router-dom';

import axios from 'axios';
import styles from './Login.module.css';

const Message: React.FC<RouteComponentProps> = ({ history }) => {
  const [message, setMessage] = useState();
  const context = useContext(AuthContext);

  const onSubmit = (e: MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    axios
      .post(`${process.env.REACT_APP_SERVER}/api/push/send`, {
        message
      })
      .then(() => {
        console.log('messaeg sent');
        setMessage('');
      })
      .catch(error => console.log(error));
  };

  return (
    <div className="container">
      {context !== undefined && context.authStatus !== false ? (
        <div>
          <div>
            <h2 className={styles.h2}>Message subscribers</h2>
            <form className="container form">
              <textarea
                name="message"
                rows={8}
                cols={55}
                placeholder="Please enter a message"
                onChange={(e: React.FormEvent<HTMLTextAreaElement>): void =>
                  setMessage(e.currentTarget.value)
                }
              />
              <button
                className={styles.button}
                onClick={(e): void => onSubmit(e)}
              >
                Send
              </button>
            </form>
          </div>
        </div>
      ) : (
        <div>Please log in</div>
      )}
    </div>
  );
};

export default Message;
