import React from "react";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className=" dark:text-slate-300">
      <Outlet />
    </div>
  );
}
