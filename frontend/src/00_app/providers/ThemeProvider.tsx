import { ConfigProvider } from "antd";

type Props = {
  children: React.ReactNode;
};
// Create a custom theme provider
export const ThemeProvider: React.FC<Props> = (props) => (
  <ConfigProvider
    theme={{
      token: {},
    }}
  >
    {props.children}
  </ConfigProvider>
);
