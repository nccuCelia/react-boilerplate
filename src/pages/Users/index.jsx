import React, { useState, useEffect } from 'react';
import { Table } from 'antd';

const columns = [
  {
    title: 'Avatar',
    render: (avatarUrl) => <img src={avatarUrl} alt="avatar" />,
  },
  {
    title: 'Id',
    dataIndex: 'id',
  },
  {
    title: 'First Name',
    dataIndex: 'first_name',
  },
  {
    title: 'Last Name',
    dataIndex: 'last_name',
  },
  {
    title: 'Email',
    dataIndex: 'email',
  },
];

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchUsersData() {
      const response = await fetch('https://reqres.in/api/users');
      const data = await response.json();
      setUsers(data.data);
    }

    fetchUsersData();
  }, []);

  return (
    <Table columns={columns} dataSource={users} />
  );
}

export default UserList;
