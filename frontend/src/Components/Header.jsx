import React from "react";

const Header = () => {
  return (
    <header className="w-full h-[110px] flex items-center justify-center headcolor flex-col  gap-1">
      <a href="/">
        <h1 className=" text-3xl font-bold">Wiz Downloader</h1>
        <p className="text-sm">Download Anytime, Anywhere!</p>
      </a>
    </header>
  );
};

export default Header;
