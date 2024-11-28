"use client";
import React, { useState } from "react";
import CustomSidebar from "../../components/ui/sidebar"; // Ensure this is correctly imported
import { ThemeProvider } from "@/context/themecontext";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false); // Track the sidebar state

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen); // Toggle the sidebar state
  };


  return (
  
    <div className="flex h-screen">
      {/* Custom Sidebar with toggle */}
      <CustomSidebar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />

      <div
        className={`flex-1 transition-all duration-300 ${
          sidebarOpen ? "ml-64" : "ml-0"
        }`}
      >
        
        {children}
       
      </div>
    </div>
    
  );
}
