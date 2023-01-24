import React from 'react'
import { Avatar, Dropdown, Space } from "antd";
import { UserOutlined,DownOutlined } from "@ant-design/icons"
import Logout from './logout'
import '../assets/styles/style.css'

const items = [
    {
      label: <Logout />,
      key: '0',
    },

    {
        label: <p>Setting</p>,
        key: '1',
    },

    {
        label: <p>Your Account</p>,
        key: '2',
      },
  ];
const Avatare = () => {
  return (
    <>
    <Dropdown
    menu={{
        items,
    }}
    trigger={['click']}
    
  >
      <Space >
        <Avatar icon={<UserOutlined />} />
        <DownOutlined /> 
      </Space>
  </Dropdown>


   
    </>
  )
}

export default Avatare




