import React from "react";
import Image from "next/image";

interface ProfileCardProps {
  name: string;
  email: string;
  avatarUrl: string;
  onLogout: () => void;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ name, email, avatarUrl, onLogout }) => {
  return (
    <div className="bg-white shadow-lg rounded-md p-4">
      <div className="flex items-center mb-4">
        <Image
          src={avatarUrl}
          alt={`${name}'s avatar`}
          width={50}
          height={50}
          className="rounded-full"
        />
        <div className="ml-4">
          <h3 className="text-lg font-semibold text-black">{name}</h3>
          <p className="text-gray-500 text-sm">{email}</p>
        </div>
      </div>
      <button
        onClick={onLogout}
        className="w-full bg-red-500 text-white p-2 rounded-md hover:bg-red-600"
      >
        Logout
      </button>
    </div>
  );
};

export default ProfileCard;
