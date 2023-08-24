import React, { useState, useEffect } from 'react';
import { Table, Space, Button } from 'antd';
import { useUsers } from '../../api/users';

function UserList() {
  /*
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await users();
      const usersData = result?.data?.data;
      setData(usersData);
    };
    fetchData();
  }, []);
  // 補 pagination（page, size)、在api設定onchange等等 比較好，不然資料多效能不好

  return (
    <div>
      <Table rowKey={(r) => r.id} columns={columns} dataSource={data} />
    </div>
  );
  */
  const { users, updateUserById, deleteUserById } = useUsers();

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
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <Button onClick={() => updateUserById(record.id, record.data)}>Edit</Button>
          <Button onClick={() => deleteUserById(record.id, record.data)}>Delete</Button>
        </Space>
      ),
    },
  ];

  return (
    <div>
      <Table rowKey={(r) => r.id} columns={columns} dataSource={users} />
    </div>
  );
}

export default UserList;
