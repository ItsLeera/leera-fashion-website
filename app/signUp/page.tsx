import Image from "next/image";
import Link from "next/link";

export default function signUp() {
    return (
        <>
            <nav className="w-full h-20 justify-between px-20 py-11 flex items-center bg-[#f7f5f0] border-b border-b-gray-300/80 ">
                <h2 className="font-bodoni text-4xl tracking-widest ">LEÉRA</h2>
                <div className="flex items-center gap-10 text-black/85 text-[11px]  font-robto  tracking-widest">
                    <Link href={"/"} className="hover:border-b-[0.2px] hover:border-b-[#702d43] ">HOME</Link>
                    <Link href={"/discover"} className="hover:border-b-[0.2px] hover:border-b-[#702d43] ">DISCOVER</Link>
                    <Link href={"/stories"} className="hover:border-b-[0.2px] hover:border-b-[#702d43] ">STORIES</Link>
                    <hr className="h-3 bg-gray-900/70 w-px" />
                    <Link href={"/login"}>SIGN IN</Link>
                </div>
            </nav>
            <div className="w-full h-[140vh] flex">
                <div className="w-[50%]  flex flex-col gap-7 justify-center px-20 py-10 ">
                    <p className="text-[#702d43] font-medium text-[14px] " >JOIN THE JOURNAL</p>
                    <h3 className="text-[80px] leading-20  "> MAKE YOURSELF
                        <span className="text-[#702d43] italic "> AT HOME .</span>
                    </h3>
                    <p className="text-[13px] " >Sign up for a considered edit of fashion, culture, and the people changing the way we see both.</p>
                    <form className="flex flex-col gap-3" >
                        <p className="text-black/70 text-[12px] tracking-wider">FULL NAME</p>
                        <input type="text" className="w-100 bg-none border-b  outline-none text-[14px] " />
                        <p className="text-black/70 text-[12px] tracking-wider">EMAIL ADDRESS</p>
                        <input type="email" className="w-100 bg-none border-b  outline-none text-[14px] " />
                        <p className="text-black/70 text-[12px] tracking-wider">PASSWORD</p>
                        <input type="password" className="w-100 bg-none border-b  outline-none text-[14px] " />
                        <p className="text-black/70 text-[12px] tracking-wider">CONFIRM PASSWORD</p>
                        <input type="password" className="w-100 bg-none border-b  outline-none text-[14px] " />
                        <div className="flex items-center gap-50 text-[11px] ">
                            <label className="flex items-center gap-2" >
                                <input type="checkbox" />
                                I agree to terms and conditions
                            </label>
                        </div>
                        <button className="bg-[#702d43] w-100 h-10 text-[#f7f5f0] font-medium text-[13px]  ">CREATE ACCOUNT</button>
                        <p className="text-[12px] flex items-center gap-2  pl-25">ALready have an account?
                            <span className="text-[#702d43] ">
                                <Link href="/login" className="border-b border-b-[#702d43]">Sign In</Link>
                            </span>
                        </p>
                    </form>
                    <Link href="/" className="text-[12px] text-black" >← BACK TO HOME</Link>
                </div>
                <div className="w-[50%] relative">
                    <Image
                        src="/leera_gown.jpg"
                        alt=""
                        width={500}
                        height={400}
                        className="w-full h-full relative" />
                    <div className="absolute p-5 top-0 text-white flex flex-col justify-between gap-190" >
                        <p className="-top-30 left-0 tracking-widest font-bodoni">LEÉRA</p>
                        <p className="bottom-0 left-0">A JOURNAL FOR THE INDIVIDUAL <br /> ISSUE 01 — 2026</p>
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

