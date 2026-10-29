"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";


export default function LoginPage() {
    const [toast, setToast] = useState("");

    const handleForgotPassword = () => { 
        setToast(
            "A reset link would be sent in a full application."
        );

        setTimeout(() => {
            setToast("");
        }, 3000);
    }
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
            <div className="w-full h-[130vh] flex ">
                <div className="w-[50%] ">
                    <Image
                        src="/leera_damnn.jpg"
                        alt=""
                        width={500}
                        height={400}
                        className="w-full h-full"
                    />
                    <p>LEÉRA</p>
                </div>
                <div className="w-[50%]  flex flex-col gap-10 justify-center px-20 py-10 ">
                    <p className="text-[#702d43] font-medium text-[14px] ">
                        WELCOME BACK
                    </p>
                    <h3 className="text-[80px] leading-20  ">
                        {" "}
                        GOOD TO SEE
                        <span className="text-[#702d43] italic "> YOU AGAIN .</span>
                    </h3>
                    <p className="text-[13px] ">
                        Your saved perspectives, visual notes, and a little more <br />{" "}
                        inspiration are waiting.
                    </p>
                    <form className="flex flex-col gap-5">
                        <p className="text-black/70 text-[12px] tracking-wider">
                            EMAIL ADDRESS
                        </p>
                        <input
                            type="email"
                            className="w-100 bg-none border-b  outline-none text-[14px] "
                        />
                        <p className="text-black/70 text-[12px] tracking-wider">PASSWORD</p>
                        <input
                            type="password"
                            className="w-100 bg-none border-b  outline-none text-[14px] "
                        />
                        <div className="flex items-center gap-50 text-[11px] relative">
                            <label className="flex items-center gap-2">
                                <input type="checkbox" />
                                Remember me
                            </label>
                            <button type="button" onClick={handleForgotPassword} className="" >Forgot Password?</button>
                            {toast && (
                                <div className="fixed right-5 top-5 z-50 rounded-lg bg-[#702d43] text-white p-4 shadow-lg border border-gray-200 ">
                                    <p className="text-sm text-white"> { toast} </p>
                                </div>
                            )}
                        </div>
                        <button className="bg-[#702d43] w-100 h-10 text-[#f7f5f0] font-medium text-[13px]  ">
                            SIGN IN
                        </button>
                        <p className="text-[12px] flex items-center gap-2  pl-25">
                            New to LEÉRA?
                            <span className="text-[#702d43] ">
                                <Link href="/signUp">Create an account</Link>
                            </span>
                        </p>
                    </form>
                    <Link href="/" className="text-[12px]">
                        ← BACK TO HOME
                    </Link>
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
