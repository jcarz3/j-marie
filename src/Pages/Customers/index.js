import React, { useCallback, useEffect, useState } from "react";
import { Avatar, Space, Table, Typography } from "antd";
import { getCustomers } from "../../API";
import "./Customer.css";

function Customers() {
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);

  const sendRequest = useCallback(async () => {
    try {
      setLoading(true);

      const response = await getCustomers();
      console.log(response);
      setDataSource(response.users);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    sendRequest();
  }, []);

  return (
    <Space size={25} direction="vertical" className="customers-container">
      <Typography.Title level={4}>Customers</Typography.Title>
      <Table
        loading={loading}
        columns={[
          {
            title: "Photo",
            dataIndex: "image",
            render: (link) => <Avatar src={link} />,
          },
          {
            title: "First Name",
            dataIndex: "firstName",
          },
          {
            title: "LastName",
            dataIndex: "lastName",
          },
          {
            title: "Email",
            dataIndex: "email",
          },
          {
            title: "Phone",
            dataIndex: "phone",
          },
          {
            title: "Address",
            dataIndex: "address",
            render: (address) => (
              <span>
                {address.address}, {address.city}
              </span>
            ),
          },
        ]}
        dataSource={dataSource}
        pagination={{
          pageSize: 5,
        }}
      />
      <p>HI</p>
    </Space>
  );
}

export default Customers;
