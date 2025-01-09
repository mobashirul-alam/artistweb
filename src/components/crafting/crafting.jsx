"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

const Crafting = () => {
    const firstTextRef = useRef(null);
    const secondTextRef = useRef(null);
    const thirdTextRef = useRef(null);
    const sectionRef = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 40%",
                end: "bottom bottom",
            },
        });

        tl.from(firstTextRef.current, {
            y: 20,
            opacity: 0,
            duration: 0.6,
        })
            .from(
                secondTextRef.current,
                {
                    y: 20,
                    opacity: 0,
                    duration: 0.6,
                },
                "-=0.4"
            )
            .from(
                thirdTextRef.current,
                {
                    y: 20,
                    opacity: 0,
                    duration: 0.6,
                },
                "-=0.4"
            );
    });

    return (
        <section
            ref={sectionRef}
            className="w-full h-[70vh] flex items-center bg-no-repeat bg-cover bg-center"
            style={{
                backgroundImage: `url('/images/crafting-bg.svg')`,
            }}
        >
            {/* Content */}
            <div className="py-36 max-w-3xl mx-auto">
                <h1 className="text-[108px] font-semibold leading-[123px] flex flex-col">
                    <span ref={firstTextRef}>Crafting digital</span>
                    <span
                        ref={secondTextRef}
                        className="pl-36 bg-[linear-gradient(45deg,_rgb(84,92,255),_rgb(31,34,70)_80%)] bg-clip-text text-transparent"
                    >
                        experiences
                    </span>
                    <span ref={thirdTextRef}>since 2004</span>
                </h1>
            </div>
        </section>
    );
};

export default Crafting;
