import React from "react";
import {
  BarChartOutlined,
  NotificationOutlined,
  ClockCircleOutlined,
  EditOutlined,
  EyeOutlined,
  TeamOutlined,
  FundOutlined,
  UserOutlined
} from "@ant-design/icons";
import logo from "../img/logo.png";
import user from "../img/user.png";


import { Layout, Menu, theme , Avatar, notification} from "antd";
const { Header, Content, Footer, Sider } = Layout;

import AppHeader from "./AppHeader.jsx";
import AppHero from "./AppHero.jsx";

const items = [
  BarChartOutlined,
  NotificationOutlined,
  ClockCircleOutlined,
  EditOutlined,
  EyeOutlined,
  TeamOutlined,
  FundOutlined,
].map((icon, index) => ({
  key: String(index + 1),
  icon: React.createElement(icon),
  label: `nav ${index + 1}`,
}));
const AppLayout = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <>
      <Layout hasSider className="bg-white">
  <Sider
    style={{
      overflow: "auto",
      height: "100vh",
      position: "fixed",
      left: 0,
      top: 0,
      bottom: 0,
      background: colorBgContainer,
    }}
    defaultCollapsed
  >
    <div className="demo-logo-vertical flex items-center justify-center">
      <img src={logo} className="w-1/3 mt-3 mb-3" />
    </div>

    <Menu
      theme="light"
      mode="inline"
      defaultSelectedKeys={["4"]}
      items={items}
    />

<div className="flex justify-center items-end w-full mt-32">
          <Avatar icon={<UserOutlined />} size={32} src={user}/>
        </div>

  </Sider>

  <Layout
    className="site-layout"
    style={{
      marginLeft: 100,
      background: "white", // Set the background color to white
    }}
  >
    <Header
      style={{
        padding: 0,
        background: colorBgContainer,
      }}
    >
      <AppHeader />
    </Header>

    <Content className="mt-14">
      <AppHero />
    </Content>
  </Layout>
</Layout>

    </>
  );
};

export default AppLayout;
