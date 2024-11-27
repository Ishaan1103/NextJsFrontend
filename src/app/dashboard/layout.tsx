"use client"
import React, { useState } from "react";
import CustomSidebar from "../../components/ui/sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false); // Track the sidebar state

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex h-screen">
      <CustomSidebar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      
      <div
        className={`flex-1  transition-all duration-300 ${
          sidebarOpen ? "ml-64" : "ml-0" 
        }`}
      >
        {children}
      </div>
    </div>
  );
}
