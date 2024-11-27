import React from "react";
import Image from "next/image";

const SidebarToggleButton = ({
  sidebarOpen,
  toggleSidebar,
}: {
  sidebarOpen: boolean;
  toggleSidebar: () => void;
}) => {
  return (
    <button
      onClick={toggleSidebar}
      className="fixed top-4 left-4 bg-white text-white p-2 rounded-full z-40"
    >
      <Image
        src={sidebarOpen ? "/images/open.png" : "/images/open.png"}
        alt={sidebarOpen ? "Close Sidebar" : "Open Sidebar"}
        width={24}
        height={24}
      />
    </button>
  );
};

export default SidebarToggleButton;
