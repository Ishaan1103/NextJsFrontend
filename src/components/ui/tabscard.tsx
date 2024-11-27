"use client";
import React from "react";

const TabsCard = ({
  showTabsCard,
  navigateTo,
}: {
  showTabsCard: boolean;
  navigateTo: (path: string) => void;
}) => {
  if (!showTabsCard) return null;

  return (
    <div className="fixed top-20 left-1/3 transform -translate-x-1/2 p-4 w-80 bg-white rounded-md shadow-lg z-50">
      <h3 className="text-xl font-semibold mb-4">Tabs</h3>
      <div className="flex flex-col space-y-4">
        <button
          onClick={() => navigateTo("/")}
          className="text-black hover:bg-gray-200 p-2 rounded-md"
        >
          Home
        </button>
        <button
          onClick={() => navigateTo("/about")}
          className="text-black hover:bg-gray-200 p-2 rounded-md"
        >
          About
        </button>
        <button
          onClick={() => navigateTo("/services")}
          className="text-black hover:bg-gray-200 p-2 rounded-md"
        >
          Services
        </button>
        <button
          onClick={() => navigateTo("/contact")}
          className="text-black hover:bg-gray-200 p-2 rounded-md"
        >
          Contact
        </button>
      </div>
    </div>
  );
};

export default TabsCard;
