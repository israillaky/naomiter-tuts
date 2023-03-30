import { useRouter } from "next/router";
import React from "react";
import { BsTwitter } from "react-icons/bs";

const SidebarLogo = () => {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push("/")}
      className="rounded-full h-14 w-14 p- flex items-center justify-center hover:bg-blue-300 hover:bg-opacity-10 cursor-pointer transition"
    >
      <BsTwitter className="text-white" size={35} />
    </div>
  );
};

export default SidebarLogo;
