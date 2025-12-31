import React from "react";
import { Avatar, Button, Layout, Dropdown } from "antd";
import "../commonHeader/aheader.css";
import { MenuFoldOutlined } from "@ant-design/icons";
import icons from "../../assets/icon.png";
import {} from "react-redux";

const { Header } = Layout;

function Aheader({ collapsed }) {
  const logout = () => {};
  const itemss = [
    {
      key: "1",
      label: (
        <a target="_blank" rel="noopener noreferrer">
          User Profile
        </a>
      ),
    },
    {
      key: "2",
      label: (
        <a onClick={() => logout} target="_blank" rel="noopener noreferrer">
          Exit
        </a>
      ),
    },
  ];
  const setCollapsed = () => {
    console.log(collapsed);
  };
  return (
    <Header className="header-container">
      <Button
        type="text"
        icon={<MenuFoldOutlined />}
        // icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        onClick={() => setCollapsed()}
        style={{
          fontSize: "16px",
          width: 64,
          height: 32,
          backgroundColor: "#fff",
        }}
      />
      <Dropdown menu={{ items: itemss }}>
        <Avatar size={36} src={icons} />
      </Dropdown>
    </Header>
  );
}

export default Aheader;
