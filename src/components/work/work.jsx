"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useRef } from "react";
import WorkCard from "../cards/workCard";

const Work = () => {
    const buttonRef = useRef(null);
    const text1Ref = useRef(null);
    const text2Ref = useRef(null);
    const workRef = useRef(null);
    const triggerRef = useRef(null);

    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);

        const button = buttonRef.current;
        const text1 = text1Ref.current;
        const text2 = text2Ref.current;
        const work = workRef.current;
        const trigger = triggerRef.current;

        // ScrollTrigger Animation for the Section
        if (work) {
            gsap.set(work, { transform: "translateX(0)" }); // Set initial state
            gsap.to(work, {
                transform: "translateX(-165%)",
                scrollTrigger: {
                    trigger: trigger,
                    start: "top 15%",
                    end: "top -200%",
                    scrub: 1,
                    pin: true,
                },
            });
        }

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
            <div ref={triggerRef} className="min-h-screen overflow-x-hidden">
                <div
                    ref={workRef}
                    className="ml-[90px] flex items-center gap-x-12"
                >
                    <div className="min-w-[625px] h-[598px] flex flex-col justify-between">
                        <div>
                            <div className="flex items-center gap-4">
                                <h1 className="text-[68px] leading-[94px] font-semibold">
                                    Work
                                </h1>
                                <div className="w-[70px] h-[70px] text-2xl rounded-full border border-[#0000004d] flex items-center justify-center">
                                    13
                                </div>
                            </div>
                            <p className="text-[28px] mt-4 max-w-sm">
                                A selection of our crafted work, built from
                                scratch by our talented in-house team.
                            </p>
                        </div>
                        <button
                            ref={buttonRef}
                            className="text-2xl font-medium px-12 border border-[#545CFF] rounded-[100px] relative overflow-hidden h-[72px] w-[244px]"
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

                    <WorkCard />
                    <WorkCard />
                    <WorkCard />
                    <WorkCard />

                    <div className="min-w-[625px] h-[598px] flex flex-col justify-center items-center">
                        <h1 className="text-[68px] leading-[94px] font-semibold">
                            View More
                        </h1>

                        <button
                            ref={buttonRef}
                            className="text-2xl font-medium px-12 border border-[#545CFF] rounded-[100px] relative overflow-hidden h-[72px] w-[244px] mt-6"
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
            </div>
        </div>
    );
};

export default Work;
