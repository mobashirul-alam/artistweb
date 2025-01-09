"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useEffect, useRef, useState } from "react";
import WorkCard from "../cards/workCard";
import WorkCardSkeleton from "../cards/workCardSkeleton";

const Work = () => {
    const [works, setWorks] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const buttonRef = useRef(null);
    const text1Ref = useRef(null);
    const text2Ref = useRef(null);
    const workRef = useRef(null);
    const triggerRef = useRef(null);

    useEffect(() => {
        const fetchWorks = async () => {
            try {
                setIsLoading(true);
                const response = await fetch(
                    `${process.env.NEXT_PUBLIC_API_URL}/work`
                );
                if (!response.ok) {
                    throw new Error("Failed to fetch works");
                }
                const data = await response.json();
                setWorks(data || []); // Assuming the API returns { works: [...] }
            } catch (error) {
                console.error("Error fetching works:", error);
                setWorks([]);
            } finally {
                setIsLoading(false);
            }
        };

        fetchWorks();
    }, []);

    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);

        const button = buttonRef.current;
        const text1 = text1Ref.current;
        const text2 = text2Ref.current;
        const work = workRef.current;
        const trigger = triggerRef.current;

        if (!isLoading && workRef.current) {
            const work = workRef.current;
            const trigger = triggerRef.current;

            // Calculate scroll width after cards are rendered
            const workWidth = work.scrollWidth;
            const viewportWidth = window.innerWidth;
            const translateXValue = Math.max(workWidth - viewportWidth, 0);

            gsap.set(work, { transform: "translateX(0)" }); // Initial state
            gsap.to(work, {
                transform: `translateX(-${translateXValue + 150}px)`, // Dynamically calculated width
                scrollTrigger: {
                    trigger: trigger,
                    start: "top 15%",
                    end: `+=${translateXValue}`,
                    scrub: 2,
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
    }, [isLoading]);

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
                                    {isLoading ? (
                                        <div className="w-8 h-8 rounded-full border-4 border-gray-300 border-t-[#545CFF] animate-spin" />
                                    ) : (
                                        works.length
                                    )}
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

                    {isLoading ? (
                        <>
                            <WorkCardSkeleton />
                            <WorkCardSkeleton />
                            <WorkCardSkeleton />
                        </>
                    ) : (
                        works.map((work) => (
                            <WorkCard
                                key={work._id}
                                image={work.image}
                                title={work.title}
                                tags={work.tags}
                                isLatest={work.isLatest}
                            />
                        ))
                    )}

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
