import React from "react";
import TableHeader from "./TableHeader";
import TableColumnHeader from "./TableColumnHeader";
import TableRow from "./TableRow";
import TableDecoration from "./TableDecoration";

export default function Table() {
  const columnHeaders = ["", "時", "日", "月", "年"];
  const rowHeaders = [
    { title: "십성1", hanja: "十星" },
    { title: "천간", hanja: "天干" },
    { title: "지지", hanja: "地支" },
    { title: "십성2", hanja: "十星" },
    { title: "십이운성", hanja: "十二運星" },
    { title: "십이신살", hanja: "十二神殺" },
    { title: "귀인", hanja: "貴人" },
  ];

  return (
    <article className="relative top-[-30px] z-1000 max-w-[calc(100%-40px)] mx-auto bg-main-background border-[3px] border-[#1b2f49] border-solid shadow-[0_4px_4px_rgba(0,0,0,0.25)] pb-[33px] px-[20px]">
      <TableHeader name="김로켓" birthDate="1980년 8월27일 08:10" />

      <div className="border-b-2 border-r">
        <TableColumnHeader columnHeaders={columnHeaders} />
        {rowHeaders.map((row) => (
          <TableRow
            key={row.title}
            row={row}
            columns={["時", "日", "月", "年"]}
          />
        ))}
      </div>

      <TableDecoration />
    </article>
  );
}
