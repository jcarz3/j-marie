import { Route, Routes, BrowserRouter, Router } from "react-router-dom";
import Customers from "../../Pages/Customers";
import Dashboard from "../../Pages/Dashboard";
import Inventory from "../../Pages/Inventory";
import Orders from "../../Pages/Orders";
import SideMenu from "../SideMenu";
import Products from "../../Pages/Products/Products";
import { routes } from "../../constant/route";

function AppRoutes() {
  return (
    <BrowserRouter>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <SideMenu />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/orders" element={<Orders />} />
          <Route path={routes.CUSTOMERS} element={<Customers />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default AppRoutes;
