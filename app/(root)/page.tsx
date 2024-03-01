import React from "react";
import { UserButton } from "@clerk/nextjs";

const Home = () => {
  return (
    <div className='h-screen'>
      <p>Home</p>
      <UserButton afterSignOutUrl='/' />
    </div>
  );
};

export default Home;
