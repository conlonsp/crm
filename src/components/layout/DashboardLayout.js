import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import Breadcrumbs from "./BreadCrumbs";
import { Outlet } from "react-router-dom"

function DashboardLayout() {
  return (
    <div className="app-layout flex flex-col h-screen">
      <Navbar />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <div className="flex flex-col flex-1 p-4 overflow-y-auto">
          <Breadcrumbs />
          <Outlet /> {/* This is where the active page will render */}
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default DashboardLayout;