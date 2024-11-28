import React, { useState } from "react";
import { useRouter } from "next/navigation"; // Import for routing
import SidebarToggleButton from "../ui/sidebartoggle"; // Import the toggle button component
import TabsCard from "../ui/tabscard"; // Import the tabs card component
import ThemeToggle from "./themetoggle";
import Profile from "./profile"; // Assuming Profile component is imported here

const Sidebar = ({ sidebarOpen, toggleSidebar }: { sidebarOpen: boolean, toggleSidebar: () => void }) => {
  const [showTabsCard, setShowTabsCard] = useState(false); // State to control tabs card visibility
  const router = useRouter();

  const toggleTabsCard = () => {
    setShowTabsCard(!showTabsCard); // Toggle the visibility of the tabs card
  };

  const navigateTo = (path: string) => {
    router.push(path);
  };

  return (
    <div className="relative">
    
      <div
        className={`${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out fixed top-0 left-0 h-full w-64 bg-white text-white z-30`}
      >
      
        <div className="flex justify-end p-4">
          <ThemeToggle />
        </div>

      
        <div className="flex flex-col h-full p-4">
          <h2 className="text-xl font-semibold mb-6">Dashboard</h2>
          
          {/* Sidebar Buttons */}
          <div className="flex flex-col space-y-4">
            <button
              onClick={() => router.push("/dashboard/task")}
              className="text-black hover:bg-gray-700 p-6 rounded-md"
            >
              Task
            </button>
            <button
              onClick={toggleTabsCard}
              className="text-black hover:bg-gray-700 p-6 rounded-md"
            >
              Models
            </button>
            <button
              onClick={() => router.push("/dashboard/history")}
              className="text-black hover:bg-gray-700 p-6 rounded-md"
            >
              History
            </button>
            <button
              onClick={() => router.push("/dashboard/bill")}
              className="text-black hover:bg-gray-700 p-6 rounded-md"
            >
              Billing
            </button>
          </div>

          {/* Profile Section */}
          <div className="mt-auto p-8 border-t border-gray-200">
            <Profile
              name="John Doe"
              email="johndoe@example.com"
              avatarUrl="/images/burn.png"
              onLogout={() => console.log("Logout")}
            />
          </div>
        </div>
      </div>

      {/* Sidebar Toggle Button */}
      <SidebarToggleButton sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />

      {/* Show Tabs Card */}
      <TabsCard showTabsCard={showTabsCard} navigateTo={navigateTo} />
    </div>
  );
};

export default Sidebar;
