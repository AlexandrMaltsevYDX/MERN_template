import type { MenuProps } from "antd";
import { TeamOutlined } from "@ant-design/icons";

type MenuItem = Required<MenuProps>["items"][number];

export const items: MenuItem[] = [
  {
    key: "sub1",
    label: "Administration",
    icon: <TeamOutlined />,
    children: [
      { key: "home", label: "Home" },
      { key: "about", label: "About" },
      { key: "users", label: "Users" },
    ],
  },
];
