import Navbar from "./components/navbar/Navbar";
import React, { useEffect, useState } from 'react';
import { Outlet } from "react-router-dom"

export default function App() {


  return (
    <>
      <Navbar></Navbar>
      <div>
        <Outlet />
      </div>
    </>
  );
}
