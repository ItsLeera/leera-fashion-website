import Image from "next/image";
import Link from "next/link";


export default function page() {
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
      <div className="w-full h-[100vh] flex flex-col gap-10 px-30 p-10 bg-[#f7f5f0]  ">
        <p className="text-[11px] text-[#702d43] ">THE VISUAL INDEX</p>
        <h2 className="text-[160px] leading-30 font-bodoni  ">
          FIND YOUR <br /> OWN <br />
          <span className="text-[#702d43] italic ">AESTHETIC .</span>
        </h2>
        <p className="text-[15px] ">
          There are no rules to personal style, only points of view.
          <br /> Browse the pieces, moods, and gestures that make us look <br />{" "}
          twice.
        </p>
      </div>
      <div className="w-full h-[10vh] bg-[#f7f5f0] px-30  py-5 text-[12px] text-black/60 border-b border-b-gray-300/80 border-t border-t-gray-300/80 flex gap-15 items-center">
        <p className="text-black/80">ALL</p>
        <p>STREET STYLE</p>
        <p>MINIMAL</p>
        <p>VINTAGE</p>
        <p>EXPERIMENTAL</p>
        <p></p>
      </div>
      <div className="w-full bg-[#f7f5f0] px-30 py-15 flex flex-col gap-15">
        <div className="w-full flex  justify-between">
          <div className="w">
            <Image
              src="/leera_slacks.jpg"
              alt=""
              width={500}
              height={700}
              className="w-87 h-[75vh] "
            />
            <p className="text-xs text-[#702d43] ">STYLE ESSAY · 06 MIN</p>
            <h2 className="text-2xl">
              The Art of Being <br /> Unapologetically You
            </h2>
          </div>
          <div className="pt-20">
            <Image
              src="/leera_shorts.jpg"
              alt=""
              width={500}
              height={700}
              className="w-110 h-[85vh] "
            />
            <p className="text-xs text-[#702d43] ">PERSPECTIVE</p>
            <h2 className="text-2xl">A different kind of beautiful</h2>
          </div>
          <div className="">
            <Image
              src="/leera_satinSkirt.jpg"
              alt=""
              width={500}
              height={700}
              className="w-87 h-[70vh] "
            />
            <p className="text-xs text-[#702d43] ">STREET STYLE</p>
            <h2 className="text-2xl">When style becomes personal</h2>
          </div>
          {/*  */}
        </div>
        <div className="w-full flex  justify-between">
          <div className="pt-10">
            <Image
              src="/leera_maxi.jpg"
              alt=""
              width={500}
              height={700}
              className="w-95 h-[90vh] "
            />
            <p className="text-xs text-[#702d43] ">STYLE ESSAY · 06 MIN</p>
            <h2 className="text-2xl">
              The Art of Being <br /> Unapologetically You
            </h2>
          </div>
          <div className="w">
            <Image
              src="/leera_summerGown.jpg"
              alt=""
              width={500}
              height={700}
              className="w-95 h-[90vh] "
            />
            <p className="text-xs text-[#702d43] ">PERSPECTIVE</p>
            <h2 className="text-2xl">A different kind of beautiful</h2>
          </div>
          <div className="pt-30">
            <Image
              src="/leera_dark.jpg"
              alt=""
              width={500}
              height={700}
              className="w-95 h-[80vh] "
            />
            <p className="text-xs text-[#702d43] ">STREET STYLE</p>
            <h2 className="text-2xl">When style becomes personal</h2>
          </div>
        </div>
        {/* {} */}
        <div className="w-full flex  justify-between">
          <div className="w">
            <Image
              src="/leera_chic.jpg"
              alt=""
              width={500}
              height={700}
              className="w-92 h-[80vh] "
            />
            <p className="text-xs text-[#702d43] ">STYLE ESSAY · 06 MIN</p>
            <h2 className="text-2xl">
              The Art of Being <br /> Unapologetically You
            </h2>
          </div>
          <div className="pt-15">
            <Image
              src="/leera_longGown.jpg"
              alt=""
              width={500}
              height={700}
              className="w-92 h-[80vh] "
            />
            <p className="text-xs text-[#702d43] ">PERSPECTIVE</p>
            <h2 className="text-2xl">A different kind of beautiful</h2>
          </div>
          <div className="pt-30">
            <Image
              src="/leera_fashion.jpg"
              alt=""
              width={500}
              height={700}
              className="w-92 h-[80vh] "
            />
            <p className="text-xs text-[#702d43] ">STREET STYLE</p>
            <h2 className="text-2xl">When style becomes personal</h2>
          </div>
        </div>
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

