import { Table } from "antd";
import type { TableColumnsType, TableProps } from "antd";
import EntityPageLayout from "../../../02_components/layouts/adminEntityPage/entityPage.component";

interface DataType {
  key: React.Key;
  name: string;
  age: number;
  address: string;
}

const columns: TableColumnsType<DataType> = [
  {
    title: "Name",
    dataIndex: "name",
    showSorterTooltip: { target: "full-header" },
    filters: [
      {
        text: "Joe",
        value: "Joe",
      },
      {
        text: "Jim",
        value: "Jim",
      },
      {
        text: "Joe2",
        value: "Joe2",
      },
      {
        text: "Jim3",
        value: "Jim4",
      },
      {
        text: "Joe23",
        value: "Joe23",
      },
      {
        text: "Jim33",
        value: "Jim34",
      },
      {
        text: "Joe233",
        value: "Joe233",
      },
      {
        text: "Jim333",
        value: "J3im34",
      },
      {
        text: "Jism",
        value: "Jsim",
      },
      {
        text: "Jose2",
        value: "Jose2",
      },
      {
        text: "Jism3",
        value: "Jism4",
      },
      {
        text: "Joes23",
        value: "Jsoe23",
      },
      {
        text: "Jism33",
        value: "Jism34",
      },
      {
        text: "Joe233",
        value: "Jose233",
      },
      {
        text: "Jim3s33",
        value: "J3ism34",
      },
    ],
    filterSearch: true,
    onFilter: (value, record) => record.name.indexOf(value as string) === 0,
    sorter: (a, b) => a.name.length - b.name.length,
  },
  {
    title: "Age",
    dataIndex: "age",
    defaultSortOrder: "descend",
    sorter: (a, b) => a.age - b.age,
  },
  {
    title: "Address",
    dataIndex: "address",
    filters: [
      {
        text: "London",
        value: "London",
      },
      {
        text: "New York",
        value: "New York",
      },
    ],
    filterSearch: true,
    onFilter: (value, record) => record.address.indexOf(value as string) === 0,
  },
];

const data = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sydney No. 1 Lake Park",
  },
  {
    key: "4",
    name: "Jim Red",
    age: 32,
    address: "London No. 2 Lake Park",
  },
];

const onChange: TableProps<DataType>["onChange"] = (
  pagination,
  filters,
  sorter,
  extra,
) => {
  console.log("params", pagination, filters, sorter, extra);
};

const TableTest: React.FC = () => (
  <>
    <EntityPageLayout>
      <Table
        columns={columns}
        dataSource={data}
        onChange={onChange}
        showSorterTooltip={{ target: "sorter-icon" }}
      />
    </EntityPageLayout>
  </>
);

export default TableTest;
