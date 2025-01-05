"use client";

import { useScrollDirection } from "@/hooks/useScrollDirection";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";
import { useRef } from "react";
import { PiEquals } from "react-icons/pi";

const Navbar = () => {
    const { scrollDirection, isScrolled } = useScrollDirection();

    const buttonRef = useRef(null);
    const text1Ref = useRef(null);
    const text2Ref = useRef(null);
    const buttonRef2 = useRef(null);
    const text1Ref2 = useRef(null);
    const text2Ref2 = useRef(null);

    useGSAP(() => {
        // Button 1 Animation
        const button = buttonRef.current;
        const text1 = text1Ref.current;
        const text2 = text2Ref.current;

        if (button && text1 && text2) {
            // Set initial state
            gsap.set(text1, { y: 0, opacity: 1 });
            gsap.set(text2, { y: 20, opacity: 0 });

            button.addEventListener("mouseenter", () => {
                gsap.to(text1, {
                    y: -20,
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
                // Reset positions for the next hover
                gsap.set(text1, { y: 0, opacity: 1 });
                gsap.set(text2, { y: 20, opacity: 0 });
            });
        }

        // Button 2 Animation
        const button2 = buttonRef2.current;
        const text1_2 = text1Ref2.current;
        const text2_2 = text2Ref2.current;

        if (button2 && text1_2 && text2_2) {
            gsap.set(text1_2, { y: 0, opacity: 1 });
            gsap.set(text2_2, { y: 20, opacity: 0 });

            button2.addEventListener("mouseenter", () => {
                gsap.to(text1_2, {
                    y: -20,
                    opacity: 0,
                    duration: 0.3,
                    ease: "power1.out",
                });
                gsap.to(text2_2, {
                    y: 0,
                    opacity: 1,
                    duration: 0.3,
                    ease: "power1.out",
                    delay: 0.1,
                });
            });

            button2.addEventListener("mouseleave", () => {
                gsap.set(text1_2, { y: 0, opacity: 1 });
                gsap.set(text2_2, { y: 20, opacity: 0 });
            });
        }
    }, []);

    return (
        <nav
            className={`fixed w-full transition-all duration-300 z-50 ${
                scrollDirection === "down" ? "-top-[100px]" : "top-0"
            } ${
                isScrolled
                    ? "bg-white/70 backdrop-blur-md shadow-sm"
                    : "bg-transparent"
            }`}
        >
            <div className="mx-[90px] px-4 py-6 flex justify-between items-center h-[100px]">
                <Link href="/" className="text-2xl font-bold">
                    ML
                </Link>
                <div className="flex items-center gap-4">
                    <button
                        ref={buttonRef}
                        className="relative px-6 py-3 text-base font-medium rounded-full border border-[#545cff] overflow-hidden inline-block w-[143px] h-[38px]"
                    >
                        <span
                            ref={text1Ref}
                            className="absolute w-full text-center top-1/2 left-0 -translate-y-1/2"
                        >
                            Get in touch
                        </span>
                        <span
                            ref={text2Ref}
                            className="absolute w-full text-center top-1/2 left-0 -translate-y-1/2"
                        >
                            Get in touch
                        </span>
                    </button>

                    <button
                        ref={buttonRef2}
                        className="p-2 rounded-full border border-[#71777e] inline-block relative w-[40px] h-[40px]"
                    >
                        <span
                            ref={text1Ref2}
                            className="absolute w-full flex justify-center items-center top-1/2 left-0 -translate-y-1/2"
                        >
                            <PiEquals className="h-6 w-6" />
                        </span>
                        <span
                            ref={text2Ref2}
                            className="absolute w-full flex justify-center items-center top-1/2 left-0 -translate-y-1/2"
                        >
                            <PiEquals className="h-6 w-6" />
                        </span>
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
