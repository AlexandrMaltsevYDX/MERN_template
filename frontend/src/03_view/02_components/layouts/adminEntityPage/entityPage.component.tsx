import { Tabs } from "antd";

type Props = {
  children: React.ReactNode;
};

const EntityPageLayout: React.FC<Props> = (props: Props) => {
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  const onChange = (e: any) => {
    console.log("tab ", e);
  };

  return (
    <div>
      <Tabs
        defaultActiveKey="1"
        type="card"
        size="small"
        onChange={onChange}
        items={[
          {
            label: "Users",
            key: "user",
            children: <>{props.children}</>, // <---- как передать props в children
          },
          {
            label: "Photo",
            key: "photo",
            children: <>{props.children}</>,
          },
        ]}
      />
    </div>
  );
};

export default EntityPageLayout;
