"use client";

import React from "react";
import RegistroNav from "./registrocomponents/registronav";

export default function RegistroLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <RegistroNav />
      {children}
    </>
  );
} 