"use client";
import { twMerge } from "tailwind-merge";
import Button from "./Button";

import { useRouter } from "next/navigation";

interface Headerprops {
  children: React.ReactNode;
  className?: string;
}

const Header: React.FC<Headerprops> = ({ children, className }) => {
  const router = useRouter();
  return (
    <div
      className={twMerge(
        `
      h-fit 
      bg-gradient-to-b 
      from-indigo-800 
      p-6
      `,
        className
      )}
    >
       <h1> DashBoard(Protected)</h1>
      <div className="flex justify-end items-start gap-x-4 fixed top-0 right-0 p-4">
  <div className="flex justify-between items-center gap-x-4">
    <div className="flex justify-between items-center gap-x-4">
      <div className="flex gap-x-4 items-center">
        <Button
          // onClick={handleLogout}
          className="bg-white px-6 py-2"
        >
          Click
        </Button>
      </div>
    </div>
  </div>
</div>

    </div>
  );
};
export default Header;
