import React, { useState, useEffect } from 'react';
import {
  Table, Space, Button, Modal, Form, Input,
} from 'antd';
import { useUsers } from '../../api/users';

const formItemLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 8 },
};

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
  const [form] = Form.useForm();

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
          <Button type="primary" onClick={showModal}>
            Edit
          </Button>
          <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
            <Form form={form} name="dynamic_rule" style={{ maxWidth: 600 }}>
              <Form.Item
                {...formItemLayout}
                name="username"
                label="Name"
                rules={[{ required: true, message: 'Please input your name' }]}
              >
                <Input placeholder="Please input your name" />
              </Form.Item>
            </Form>
          </Modal>
          <Button onClick={() => deleteUserById(record.id, record.data)}>Delete</Button>
        </Space>
      ),
    },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <Table rowKey={(r) => r.id} columns={columns} dataSource={users} />
    </div>
  );
}

export default UserList;
