"use client";

import React from "react";
import RegistroNav from "./registrocomponents/registronav";
import RegistroLeftMenu from "./registrocomponents/registroLeftMenu";

export default function RegistroLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <RegistroNav />
      <div className="flex flex-row w-full ">
      <RegistroLeftMenu/>
      <div className="flex flex-col w-full">
      {children}
      </div>
      </div>
    </>
  );
} 