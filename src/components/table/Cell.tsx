import { CellProps, jijangGan } from "@/type";

export default function Cell({ type, data, index = 0 }: CellProps) {
  const renderText = (hanja: string, title: string) => (
    <div className="flex flex-col items-center">
      <p className="text-[15px]">{hanja}</p>
      <p className="text-[10px]">({title})</p>
    </div>
  );

  const renderColor = (item: jijangGan) => (
    <div
      className="rounded-[12px] w-[55px] h-[55px] flex flex-col items-center justify-center text-white relative"
      style={
        item.fiveCircleColor === "none"
          ? {
              backgroundColor: "#f9f9f9",
              border: "1px solid #000",
              color: "#000",
            }
          : { backgroundColor: item.fiveCircleColor }
      }
    >
      <p className="text-[8px] absolute top-[2px]">{item.title}</p>
      <p className="text-[25px]">{item.hanja}</p>
      <p className="text-[8px] absolute bottom-[2px]">({item.subHanja})</p>
    </div>
  );

  const renderGoodGuys = () => {
    if (data.귀인.length === 0) {
      return <div className="text-[10px]">(없음)</div>;
    }

    return (
      <div className="flex flex-col gap-1.5">
        {data.귀인.map((item, idx) => (
          <div key={idx}>
            <p className="text-[10px]">{item.title}</p>
            <p className="text-[15px]">{item.hanja}</p>
          </div>
        ))}
      </div>
    );
  };

  switch (type) {
    case "십성":
      return renderText(data.십성[index].hanja, data.십성[index].title);
    case "천간":
      return renderColor(data.천간);
    case "지지":
      return renderColor(data.지지);
    case "십이운성":
      return renderText(data.십이운성.hanja, data.십이운성.title);
    case "십이신살":
      return renderText(data.십이신살.hanja, data.십이신살.title);
    case "귀인":
      return renderGoodGuys();
    default:
      return null;
  }
}
