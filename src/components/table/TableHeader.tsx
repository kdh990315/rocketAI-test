import Image from "next/image";

interface TableHeaderProps {
  name: string;
  birthDate: string;
}

export default function TableHeader({ name, birthDate }: TableHeaderProps) {
  return (
    <div className="flex flex-col items-center gap-3 mt-[40px] relative">
      <Image
        className="absolute top-[5px] left-[0]"
        src="/images/table-deco.png"
        alt="테이블 데코"
        width={56}
        height={138}
        style={{ width: "auto", height: "auto" }}
      />
      <Image
        className="absolute top-[-14px] right-[0]"
        src="/images/table-deco2.png"
        alt="테이블 데코"
        width={56}
        height={138}
        style={{ width: "auto", height: "auto" }}
      />
      <p>{name}님의 사주</p>
      <p className="text-[20px] font-bold">{birthDate}</p>
    </div>
  );
}
