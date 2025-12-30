import React from "react";
import * as Icon from "@ant-design/icons";
import { Layout, Menu } from "antd";
import MenuConfig from "../../config";
const { Sider } = Layout;

//icon
const iconToElement = (name) => React.createElement(Icon[name]);

const items = MenuConfig.map((item) => {
  const child = {
    key: item.path,
    icon: iconToElement(item.icon),
    label: item.label,
  };
  if (item.children) {
    child.children = item.children.map((icon) => {
      return {
        key: icon.path,
        label: icon.label,
      };
    });
  }
  return child;
});


function Aside() {
  return (
    <Sider trigger={null}>
      <h3 className="ant-layout-header">Management System</h3>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["1"]}
        items={items}
      />
    </Sider>
  );
}

export default Aside;
