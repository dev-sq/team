import React from "react";
import { Outlet } from "react-router";
import Navbar from "../sharedComponents/Navbar";
import Footer from "../sharedComponents/Footer";

const RootLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default RootLayout;
