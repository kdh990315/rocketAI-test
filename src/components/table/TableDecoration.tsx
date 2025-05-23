import React from "react";

export default function TableDecoration() {
  return (
    <>
      <div className="w-full h-[1px] bg-[#2c4d79] absolute top-2 left-0"></div>
      <div className="w-full h-[1px] bg-[#2c4d79] absolute bottom-2 left-0"></div>
      <div className="w-[1px] h-full bg-[#2c4d79] absolute top-0 left-2"></div>
      <div className="w-[1px] h-full bg-[#2c4d79] absolute bottom-0 right-2"></div>
    </>
  );
}
