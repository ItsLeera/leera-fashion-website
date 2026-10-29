"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { stories, type Story } from "../data/stories";


export default function StoriesPage() {
    const [selectedStory, getSelectedStory] = useState<Story | null>(null);

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
            <div className="w-full bg-[#f7f5f0] flex justify-between px-30 py-10">
                <div className="w-[50%] flex flex-col gap-10">
                    <p className="text-[#702d43]">COVER STORY · 08 OCTOBER 2026</p>
                    <h1 className="text-[97px] leading-20 font-bodoni">
                        FASHION IS MORE <br /> THAN <br />
                        <span className="text-[#702d43] italic">
                            WHAT YOU <br /> WEAR.
                        </span>
                    </h1>
                    <p>
                        A closer look at the quiet, powerful ways clothing shapes
                        identity, memory, and the way we move through the world.
                    </p>
                    <button className="w-40 h-10 bg-gray-900/40 border-b text-white">
                        READ THE STORY ↗
                    </button>
                </div>
                <div className="w-[50%]">
                    <Image
                        src="/leera_bunPiece.jpg"
                        alt=""
                        width={500}
                        height={400}
                        className="w-150 h-[97vh] "
                    />
                </div>
            </div>
            <div className="w-full px-30 py-10 border-b-[0.5px] border-b-gray-400/70 tracking-wider text-black/50 flex gap-5 text-[12px] bg-[#f7f5f0]">
                <p className="text-[#702d43]">ALL</p>
                <p>STYLE ESSAY</p>
                <p>CULTURE</p>
                <p>PERSPECTIVE</p>
            </div>
            <div className="w-full px-30 py-20 bg-[#f7f5f0]  ">
                {stories.map((story) => (
                    <div className="w-full h-[40vh] py-10 flex justify-between items-center border-t-[0.5px] border-t-gray-400/70  " key={story.id}>
                        <div>
                            <Image
                                src={story.image}
                                alt=""
                                width={400}
                                height={400}
                                className="w-40 h-[30vh]  "
                            />
                        </div>
                        <div className="h-[20vh] flex flex-col justify-center gap-2">
                            <p className="text-[#702d43] font-medium tracking-wider ">{story.category} {story.date} </p>
                            <h2 className="text-[43px] font-bodoni  "> {story.title} </h2>
                            <p> {story.excerpt} </p>
                        </div>
                        <button
                            className="w-40 h-10 bg-gray-900/40 border-b text-white "
                            onClick={() => getSelectedStory(story)}> READ STORY ↗ </button>
                    </div>
                ))}
            </div>

            <footer className="w-full h-[10vh] px-20 py-10 bg-[#f7f5f0]  flex justify-between items-center border-t border-t-gray-300/80">
                <p className="text-xl font-bodoni tracking-wider">LEÉRA</p>
                <p className="text-[10px] text-black/60 ">© 2026 LEÉRA JOURNAL </p>
                <p className=" text-[9px] text-black/70 tracking-wide font-bodoni">
                    Instagram / Pinterest
                </p>
            </footer>

            {/* Story Modal */}
            {selectedStory && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
                    onClick={() => getSelectedStory(null)}
                >
                    <div
                        className="relative grid max-h-[95vh] w-[70%] max-w-6xl grid-cols-1 overflow-y-auto bg-[#f7f5f0] md:grid-cols-2 md:overflow-hidden"
                        onClick={(event) => event.stopPropagation()}
                    >
                        {/* Close button */}
                        <button
                            onClick={() => getSelectedStory(null)}
                            className="absolute right-4 top-3 z-10 text-3xl text-black"
                            aria-label="Close story"
                        >
                            ×
                        </button>

                        {/* Story image */}
                        <div className="relative min-h-[300px] md:min-h-[600px] bg-[#f7f5f0]">
                            <Image
                                src={selectedStory.image}
                                alt={selectedStory.title}
                                fill
                                sizes="(max-width: 768px) 100vw, 50vw"
                                className="object-cover"
                            />
                        </div>

                        {/* Story text */}
                        <div className="flex flex-col justify-center gap-5 p-8 md:p-12">
                            <p className="text-xs tracking-[0.2em] text-[#702d43]">
                                {selectedStory.category} · {selectedStory.date}
                            </p>

                            <h2 className="font-bodoni text-4xl leading-tight">
                                {selectedStory.title}
                            </h2>

                            <p className="text-gray-600 leading-relaxed">
                                {selectedStory.excerpt}
                            </p>

                            {selectedStory.paragraphs.map((paragraph, index) => (
                                <p
                                    key={index}
                                    className="text-sm leading-7 text-gray-600"
                                >
                                    {paragraph}
                                </p>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
