"use client";

import React from "react"; 
import AdminLeftNav from "./admincomponents/AdminLeftNav";
import AdminNav from "./admincomponents/AdminNav";

export default function RegistroLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <AdminNav />
      <div className="flex flex-row w-full ">
      <AdminLeftNav/>
      <div className="flex flex-col w-full">
      {children}
      </div>
      </div>
    </>
  );
} 