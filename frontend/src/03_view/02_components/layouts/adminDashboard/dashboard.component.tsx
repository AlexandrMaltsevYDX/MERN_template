import { useNavigate } from "@tanstack/react-router";
import { Breadcrumb, Layout, Menu, type MenuProps, theme } from "antd";
import { useState } from "react";
import { items } from "./menu";

const { Header, Content, Footer, Sider } = Layout;

type Props = {
  children: React.ReactNode;
};

// Component that uses the theme configuration
export const DashboardLayout: React.FC<Props> = (props) => {
  const [collapsed, setCollapsed] = useState(false);
  const [current, setCurrent] = useState("/about");

  const navigate = useNavigate({ from: current });
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
    navigate({ to: `/${e.key === "home" ? "" : e.key}` });
    setCurrent(e.key);
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className="demo-logo-vertical" />
        <Menu
          onClick={onClick}
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={items}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }} />
        <Content style={{ margin: "0 16px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            {props.children}
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};
