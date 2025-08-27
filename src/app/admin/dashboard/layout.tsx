"use client";

import React from "react"; 
import AdminNav from "./admincomponents/AdminNav";
import LoggedLeftMenu from "@/app/general_components/loggedLeftMenu";

export default function RegistroLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <AdminNav />
      <div className="flex flex-row w-full ">
      <LoggedLeftMenu/>
      <div className="flex flex-col w-full">
      {children}
      </div>
      </div>
    </>
  );
} 