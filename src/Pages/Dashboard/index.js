import React, { useEffect, useState } from "react";
import {
  DollarCircleOutlined,
  ShoppingCartOutlined,
  ShoppingOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Card, Space, Statistic, Table, Typography } from "antd";
import { getCustomers, getInventory, getOrders, getRevenue } from "../../API";
import "./Dashboard.css"; // Import CSS file for styling

const Dashboard = () => {
  const [orders, setOrders] = useState(0);
  const [inventory, setInventory] = useState(0);
  const [customers, setCustomers] = useState(0);
  const [revenue, setRevenue] = useState(0);

  useEffect(() => {
    getOrders().then((res) => {
      setOrders(res.total);
      setRevenue(res.discountedTotal);
    });
    getInventory().then((res) => {
      setInventory(res.total);
    });
    getCustomers().then((res) => {
      setCustomers(res.total);
    });
  }, []);

  return (
    <Space size={50} direction="vertical" className="dashboard-container">
      <Typography.Title level={4}>D A S H B O A R D</Typography.Title>
      <Space direction="horizontal">
        <DashboardCard
          icon={<ShoppingCartOutlined className="dashboard-icon" />}
          title={"Orders"}
          value={orders}
        />
        <DashboardCard
          icon={<ShoppingOutlined className="dashboard-icon" />}
          title={"Inventory"}
          value={inventory}
        />
        <DashboardCard
          icon={<UserOutlined className="dashboard-icon" />}
          title={"Customer"}
          value={customers}
        />
        <DashboardCard
          icon={<DollarCircleOutlined className="dashboard-icon" />}
          title={"Revenue"}
          value={revenue}
        />
      </Space>
      <Space>
        <RecentOrders />
      </Space>
    </Space>
  );
};

const DashboardCard = ({ title, value, icon }) => {
  return (
    <Card className="dashboard-card">
      <Space direction="horizontal">
        {icon}
        <Statistic title={title} value={value} />
      </Space>
    </Card>
  );
};

const RecentOrders = () => {
  const [dataSource, setDataSource] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getOrders().then((res) => {
      setDataSource(res.products.splice(0, 3));
      setLoading(false);
    });
  }, []);

  return (
    <>
      <Typography.Text>Recent Orders</Typography.Text>
      <Table
        columns={[
          {
            title: "Title",
            dataIndex: "title",
          },
          {
            title: "Quantity",
            dataIndex: "quantity",
          },
          {
            title: "Price",
            dataIndex: "discountedPrice",
          },
        ]}
        loading={loading}
        dataSource={dataSource}
        pagination={false}
        className="recent-orders-table"
      />
    </>
  );
};

export default Dashboard;
