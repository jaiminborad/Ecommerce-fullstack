import React from "react";
import { Outlet } from "react-router-dom";
import Topbar from "../components/topbar/Topbar";
import Sidebar from "../components/sidebar/Sidebar";

const Layout = () => {
  return (
    <div>
      <Topbar />

      <div className="container">
        <Sidebar />

        <div className="pageContainer">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
