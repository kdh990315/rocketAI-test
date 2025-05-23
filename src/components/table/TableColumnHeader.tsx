import React from "react";

interface TableColumnHeaderProps {
  columnHeaders: string[];
}

export default function TableColumnHeader({
  columnHeaders,
}: TableColumnHeaderProps) {
  return (
    <div className="grid grid-cols-5 w-full mx-auto mt-[26px] text-center">
      {columnHeaders.map((col) => (
        <div
          key={col}
          className="font-bold py-2 text-[21px] border-r-1"
          style={{
            borderRightWidth: col === "" ? "2px" : col === "年" ? "0px" : "1px",
            borderColor: col === "" ? "#000" : "#8a8a8a",
          }}
        >
          {col}
        </div>
      ))}
    </div>
  );
}
