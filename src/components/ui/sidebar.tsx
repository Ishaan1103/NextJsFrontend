import React, { useState } from "react";
import { useRouter } from "next/navigation"; // Import for routing
import SidebarToggleButton from "../ui/sidebartoggle"; // Import the toggle button component
import TabsCard from "../ui/tabscard"; // Import the tabs card component
import { Button } from "./button";
import Image from "next/image";

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
      {/* Sidebar */}
      <div
        className={`${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out fixed top-0 left-0 h-full w-64 bg-white text-white z-30`}
      >
        <div className="flex justify-end p-4">
          <Button className="bg-white text-black p-2 rounded-full" onClick={toggleSidebar}>
            <Image src={"/images/burn.png"} alt="Toggle Sidebar" width={24} height={24} />
          </Button>
        </div>

        <div className="flex flex-col h-full p-4">
          <h2 className="text-xl font-semibold mb-6"></h2>
          <div className="flex flex-col space-y-4">
          
            <button onClick={toggleTabsCard} className="text-black hover:bg-gray-700 p-6 rounded-md">Navbar</button>
            <button onClick={toggleTabsCard} className="text-black hover:bg-gray-700 p-6 rounded-md">Models</button>
            <button onClick={toggleTabsCard} className="text-black hover:bg-gray-700 p-6 rounded-md">History</button>
            <button onClick={toggleTabsCard} className="text-black hover:bg-gray-700 p-6 rounded-md">Theme</button>
            <button onClick={toggleTabsCard} className="text-black hover:bg-gray-700 p-6 rounded-md">Billing</button>
          </div>
        </div>
      </div>

      {/* Button to open/close sidebar */}
      <SidebarToggleButton sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />

      {/* Show Tabs Card */}
      <TabsCard showTabsCard={showTabsCard} navigateTo={navigateTo} />
    </div>
  );
};

export default Sidebar;
