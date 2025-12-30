import React from "react";
import { Avatar, Button, Layout, theme } from "antd";
import "../commonHeader/aheader.css";
import { MenuFoldOutlined } from "@ant-design/icons";
import icon from "../../assets/icon.png";

const { Header } = Layout;

function Aheader() {
  return (
    <Header className="header-container">
      <Button
        type="text"
        icon={<MenuFoldOutlined />}
        // icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        // onClick={() => setCollapsed(!collapsed)}
        style={{
          fontSize: "16px",
          width: 64,
          height: 32,
          backgroundColor: "#fff",
        }}
      />
      <Avatar size={36} src={icon} />
    </Header>
  );
}

export default Aheader;
