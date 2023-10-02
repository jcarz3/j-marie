import { Space } from "antd";
import { Fragment } from "react";
import "./App.css";
import AppFooter from "./Components/AppFooter";
import AppHeader from "./Components/AppHeader";
import PageContent from "./Components/PageContent";
import SideMenu from "./Components/SideMenu";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import AppRoutes from "./Components/AppRoutes";
import Customers from "./Pages/Customers";

function App() {
  return (
    <Fragment>
      <AppHeader />
      <AppRoutes />
      {/* <Customers /> */}
      <AppFooter />
    </Fragment>
  );
}

export default App;
