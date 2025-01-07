"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

const Banner = () => {
    const buttonRef = useRef(null);
    const text1Ref = useRef(null);
    const text2Ref = useRef(null);

    useGSAP(() => {
        const button = buttonRef.current;
        const text1 = text1Ref.current;
        const text2 = text2Ref.current;

        if (button && text1 && text2) {
            // Set initial state
            gsap.set(text1, { y: 0, opacity: 1 });
            gsap.set(text2, { y: 50, opacity: 0 });

            button.addEventListener("mouseenter", () => {
                gsap.to(text1, {
                    y: -50,
                    opacity: 0,
                    duration: 0.3,
                    ease: "power1.out",
                });
                gsap.to(text2, {
                    y: 0,
                    opacity: 1,
                    duration: 0.3,
                    ease: "power1.out",
                    delay: 0.1,
                });
            });

            button.addEventListener("mouseleave", () => {
                gsap.set(text1, { y: 0, opacity: 1 });
                gsap.set(text2, { y: 50, opacity: 0 });
            });
        }
    }, []);

    return (
        <div>
            <main className="mx-[90px] px-4 mt-[240px] mb-[144px]">
                <h1 className="text-[148px] font-semibold leading-[172px] max-w-6xl">
                    Crafting{" "}
                    <span className="bg-[linear-gradient(45deg,_rgb(84,92,255),_rgb(31,34,70)_80%)] bg-clip-text text-transparent">
                        Digital
                    </span>
                    <br />
                    Experiences
                </h1>

                <div className="mt-36 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
                    <div className="flex items-center gap-4">
                        <div className="bg-black text-white rounded-full w-[72px] h-[72px] flex items-center justify-center text-2xl">
                            20
                        </div>
                        <span className="text-[#71777E] text-2xl">
                            Years on the market
                        </span>
                    </div>
                    <div className="flex gap-[100px]">
                        <p className="text-[28px] leading-10 max-w-[503px]">
                            We build engaging websites, brands & innovative
                            e-commerce solutions.
                        </p>

                        <button
                            ref={buttonRef}
                            className="text-2xl font-medium px-12 bg-[#545CFF] text-white rounded-[100px] relative overflow-hidden h-[72px] w-[244px] hover:scale-105 transition-all duration-500"
                        >
                            <span
                                ref={text1Ref}
                                className="absolute w-full text-center top-1/2 left-0 -translate-y-1/2"
                            >
                                Case Studies
                            </span>
                            <span
                                ref={text2Ref}
                                className="absolute w-full text-center top-1/2 left-0 -translate-y-1/2"
                            >
                                Case Studies
                            </span>
                        </button>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Banner;
