import React, { useEffect, useState } from 'react';
import axios from 'axios';
import UserList from '../partials/UserList';

const Dashboard: React.FC = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
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

    fetchUsers();
  }, []);

  return users ? (
    <main>
      <UserList users={users} />
    </main>
  ) : (
    <div>Loading...</div>
  );
};

export default Dashboard;
