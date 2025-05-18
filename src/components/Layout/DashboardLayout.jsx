import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 md:ml-[250px] p-4">
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
