import React from "react";
import sajuData from "@/mock/sajuData.json";
import Cell from "./Cell";
import { CellType } from "@/type";

interface TableRowProps {
  row: {
    title: string;
    hanja: string;
  };
  columns: string[];
}

export default function TableRow({ row, columns }: TableRowProps) {
  const getCellType = (title: string): CellType => {
    if (title === "십성1" || title === "십성2") return "십성";
    return title as CellType;
  };

  const getCellIndex = (title: string): number => {
    return title === "십성2" ? 1 : 0;
  };

  return (
    <div
      className="grid grid-cols-5 w-full mx-auto text-center"
      style={{
        borderTopWidth: row.title === "지지" ? "1px" : "2px",
        borderColor: row.title === "지지" ? "#8a8a8a" : "#000",
      }}
    >
      <div className="font-bold py-2 text-[12px] flex flex-col items-center justify-center border-r-2">
        <p className="text-[12px]">{row.hanja}</p>
        <p className="text-[8px]">({row.title.replace(/[0-9]/g, "")})</p>
      </div>
      {columns.map((col) => (
        <div
          key={col}
          className="py-2 text-[13px] flex justify-center items-center border-r-1 border-[#8a8a8a] bg-white"
          style={{
            borderRightWidth: col === "年" ? "0" : "1px",
          }}
        >
          <Cell
            type={getCellType(row.title)}
            data={sajuData[col as keyof typeof sajuData]}
            index={getCellIndex(row.title)}
          />
        </div>
      ))}
    </div>
  );
}
