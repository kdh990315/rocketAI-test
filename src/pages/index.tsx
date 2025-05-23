import Image from "next/image";
import Table from "@/components/table/table";

export default function Home() {
  return (
    <>
      <section className="w-full">
        <div className="w-full h-[752px] aspect-[375/752] bg-[url('/images/intro.png')] bg-cover bg-center relative">
          <Image
            className="absolute max-w-[157px] max-h-[84px] top-[84px] left-[50%] translate-x-[-50%] z-100"
            src="/images/no-1-text.png"
            alt="제 1장"
            width={157}
            height={84}
          />

          {/* 위쪽 그라데이션 */}
          <div className="absolute left-0 top-0 w-full h-[261px] bg-gradient-to-b from-black to-transparent z-10"></div>
          {/* 아래쪽 그라데이션 */}
          <div className="absolute left-0 bottom-0 w-full h-[195px] bg-gradient-to-b from-transparent to-main-background z-10"></div>

          {/* 첫번째 말풍선 */}
          <div className="w-[215px] h-[139px] bg-[url('/images/Union.png')] bg-cover bg-center absolute top-[713px] left-[24px] z-30">
            <p className="text-center leading-[150%] tracking-[-2.5%] mt-[45px]">
              이제 본격적으로 <br />
              OO님의 사주팔자를 <br />
              분석해볼 차례네요.
            </p>
          </div>
        </div>

        <div className="w-[95%] aspect-[351/285] bg-[url('/images/image2.png')] bg-cover bg-center mt-[144px]"></div>

        {/* 두번째 말풍선 */}
        <div className="w-full aspect-[375/306] bg-[url('/images/image3.png')] bg-cover bg-center mt-[20px] relative">
          <div className="w-[239px] h-[138.78px] bg-[url('/images/Union2.png')] bg-cover bg-center absolute top-[-104px] left-[24px] z-30">
            <p className="text-center leading-[150%] tracking-[-2.5%] mt-[34px]">
              제가 oo님의 사주를 <br />
              보기 쉽게 표로 정리했어요
            </p>
          </div>

          {/* 아래쪽 그라데이션 */}
          <div className="absolute left-0 bottom-0 w-full h-[118px] bg-gradient-to-b from-transparent to-main-background z-10"></div>
        </div>
      </section>
      <Table />
    </>
  );
}
