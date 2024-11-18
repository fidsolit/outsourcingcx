// File: components/OutsourcingCXIcon.tsx
import React from "react";

const OutsourcingCXIcon: React.FC = () => {
  return (
    <div className="flex justify-center items-center w-10 h-10">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 64 64"
        className="w-16 h-16 text-blue-500"
        fill="currentColor"
      >
        <circle cx="32" cy="32" r="30" fill="#1E40AF" />
        <path
          d="M22 44c-1.66 0-3-1.34-3-3v-3.59c0-.89.36-1.75 1-2.41l7-7c.58-.58 1.35-1 2.18-1h9.64c.83 0 1.6.42 2.18 1l7 7c.64.64 1 1.5 1 2.41V41c0 1.66-1.34 3-3 3H22z"
          fill="#60A5FA"
        />
        <circle cx="32" cy="22" r="5" fill="#F9FAFB" />
      </svg>
    </div>
  );
};

export default OutsourcingCXIcon;
