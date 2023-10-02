import {
  AppstoreOutlined,
  ShopOutlined,
  ShoppingCartOutlined,
  UserOutlined,
  ClockCircleOutlined,
  ShoppingOutlined,
} from "@ant-design/icons";
// import { MdProductionQuantityLimits } from 'react-icons/fa';
import { Menu } from "antd";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./sidemenu.css";
import { routes } from "../../constant/route";

function SideMenu() {
  const location = useLocation();
  const [selectedKeys, setSelectedKeys] = useState("/");

  useEffect(() => {
    const pathName = location.pathname;
    setSelectedKeys(pathName);
  }, [location.pathname]);

  const navigate = useNavigate();
  return (
    <div className="SideMenu" style={{ width: "200px" }}>
      <Menu
        className="SideMenuVertical"
        mode="vertical"
        onClick={(item) => {
          //item.key
          navigate(item.key);
        }}
        selectedKeys={[selectedKeys]}
        items={[
          {
            label: "Dashboard",
            icon: <AppstoreOutlined />,
            key: "/",
          },
          {
            label: "Inventory",
            key: "/inventory",
            icon: <ShopOutlined />,
          },
          {
            label: "Products",
            key: "/products",
            icon: <ShoppingCartOutlined />,
          },
          {
            label: "Orders",
            key: "/orders",
            icon: <ShoppingOutlined />,
          },
          {
            label: "Customers",
            key: routes.CUSTOMERS,
            icon: <UserOutlined />,
          },
          {
            label: "Booking",
            key: "/appointments",
            icon: <ClockCircleOutlined />,
          },
        ]}
      ></Menu>
    </div>
  );
}
export default SideMenu;
