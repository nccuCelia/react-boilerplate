import React, { useState, useEffect } from 'react';
import { Table } from 'antd';
import { users } from '../../api/users';

const columns = [
  {
    title: 'Avatar',
    render: (avatarUrl) => <img src={avatarUrl} alt="avatar" />,
    key: 'avatar',
  },
  {
    title: 'Id',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'First Name',
    dataIndex: 'first_name',
    key: 'first_name',
  },
  {
    title: 'Last Name',
    dataIndex: 'last_name',
    key: 'last_name',
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
  },
];

function UserList() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await users();
      const usersData = result?.data?.data;
      setData(usersData);
    };
    fetchData();
  }, []);

  return (
    <div>
      <Table rowKey={(r) => r.id} columns={columns} dataSource={data} />
    </div>
  );
}

export default UserList;
