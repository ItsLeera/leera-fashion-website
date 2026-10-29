import Image from "next/image";
import Link from "next/link";

export default function Home() {

  return (
    <>
      <nav className="w-full h-20 justify-between px-20 py-11 flex items-center bg-[#f7f5f0] border-b border-b-gray-300/80 ">
        <h2 className="font-bodoni text-4xl tracking-widest ">LEÉRA</h2>
        <div className="flex items-center gap-10 text-black/85 text-[11px]  font-robto  tracking-widest">
          <Link
            href={"/"}
            className="hover:border-b-[0.2px] hover:border-b-[#702d43] "
          >
            HOME
          </Link>
          <Link
            href={"/discover"}
            className="hover:border-b-[0.2px] hover:border-b-[#702d43] "
          >
            DISCOVER
          </Link>
          <Link
            href={"/stories"}
            className="hover:border-b-[0.2px] hover:border-b-[#702d43] "
          >
            STORIES
          </Link>
          <hr className="h-3 bg-gray-900/70 w-px" />
          <Link href={"/login"}>SIGN IN</Link>
        </div>
      </nav>
      <div className="w-full h-[120vh] bg-[#f7f5f0] flex justify-between gap-10 p-20   ">
        <div className="w-[40%] gap-10 flex flex-col justify-center pl-15 pt-20">
          <p className="text-[10px] text-[#702d43] font-medium ">
            THE CULTURE OF PERSONAL STYLE
          </p>
          <h2 className="text-[107px] leading-25  font-bodoni ">
            DRESS LIKE <br />
            <span className="text-[#702d43] italic  ">YOU MEAN IT.</span>
          </h2>
          <p className="text-[14px]">
            Fashion is not a uniform. It is a language, a <br /> mood, a way of
            taking up space. LEÉRA is a <br /> journal for the wonderfully
            individual.
          </p>
          <button className="w-37 h-15 text-xs flex justify-start gap-3 border-b border-b-black pb-3 ">
            EXPLORE THE WORLD <span> ↗ </span>
          </button>
        </div>
        <div className="w-[50%]">
          <Image
            src="/leera_iLoveeee.jpg"
            alt="Red dress"
            width={700}
            height={500}
            className="w-[460px] h-[97vh]"
          />
          <span className="flex flex-col text-[10px] text-[#702d43] pl-130">
            01 / 05 <br /> PERSONAL STYLE
          </span>
        </div>
      </div>
      <div className="w-full h-[160vh] bg-[#eeeae4] p-30 flex flex-col gap-10 ">
        <div className="w-full flex justify-between items-end ">
          <p className="text-[10px] text-[#702d43] ">01 — LEERA EDIT</p>
          <h2 className="text-[100px] font-bodoni leading-20">
            Stories worth <br />
            <span className="text-[#702d43] font-bodoni italic">wearing.</span>
          </h2>
          <button className="w-33 h-7 text-xs flex justify-start gap-3 border-b border-b-black pb-3 ">
            VIEW ALL STORIES <span> ↗ </span>
          </button>
        </div>
        <div className="w-full flex  justify-between">
          <div className="w">
            <Image
              src="/leera_beachGown.jpg"
              alt=""
              width={500}
              height={700}
              className="w-100 h-[80vh] "
            />
            <p className="text-xs text-[#702d43] ">STYLE ESSAY · 06 MIN</p>
            <h2 className="text-2xl">
              The Art of Being <br /> Unapologetically You
            </h2>
          </div>
          <div className="pt-15">
            <Image
              src="/leera_streeet.jpg"
              alt=""
              width={500}
              height={700}
              className="w-80 h-[63vh] "
            />
            <p className="text-xs text-[#702d43] ">STREET WEAR</p>
            <h2 className="text-2xl">When style becomes personal </h2>
          </div>
          <div className="">
            <Image
              src="/leera_slick.jpg"
              alt=""
              width={500}
              height={700}
              className="w-100 h-[80vh] "
            />
            <p className="text-xs text-[#702d43] ">PERSPECTIVE</p>
            <h2 className="text-2xl">A different kind of beautiful</h2>
          </div>
        </div>
      </div>
      <div className="w-full h-[120vh] bg-[#f7f5f0] p-30 flex justify-between ">
        <div className="w-[45%] text-7xl flex flex-col gap-5  ">
          <p className="text-[#702d43] text-[10px] font-medium  ">
            02 — VISUAL NOTES
          </p>
          <h2 className="font-bodoni text-[100px] leading-20 ">
            Things we can`t <br />
            <span className="text-[#702d43] italic ">stop looking at.</span>
          </h2>
        </div>
        <div className="w-[53%]  flex relative">
          <Image
            src="/leera_office.jpg"
            alt=""
            width={500}
            height={700}
            className="w-120 h-[80vh] relative "
          />
          <Image
            src="/leera.jpg"
            alt=""
            width={500}
            height={700}
            className="w-70 h-[47vh] absolute -right-20 -bottom-13 "
          />
          <p className=" text-[10px] text-[#702d43] pl-7 ">
            THE DETAILS MAKE THE LOOK
          </p>
        </div>
      </div>
      <div className="w-full h-[90vh] bg-[#702d43] text-[#f7f5f0] flex flex-col gap-10 p-30">
        <p className="text-[11px] text-[#d8b8bd] ">A NOTE FROM LEÉRA</p>
        <h2 className="font-bodoni text-8xl">
          Your style doesn`t <br />
          <span className="text-[#d8b8bd] italic ">need permission.</span>
        </h2>
        <Link
          href="/discover"
          className="w-45 h-7 text-xs flex justify-start gap-3 border-b border-b-white/60 pb-3 "
        >
          EXPLORE YOUR AESTHETIC  <span> ↗ </span>
        </Link>
      </div>
      <footer className="w-full h-[10vh] px-20 py-10 bg-[#f7f5f0]  flex justify-between items-center border-t border-t-gray-300/80">
        <p className="text-xl font-bodoni tracking-wider">LEÉRA</p>
        <p className="text-[10px] text-black/60 ">© 2026 LEÉRA JOURNAL </p>
        <p className=" text-[9px] text-black/70 tracking-wide font-bodoni">
          Instagram / Pinterest
        </p>
      </footer>
    </>
  );
}
