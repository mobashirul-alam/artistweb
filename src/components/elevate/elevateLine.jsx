"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const ElevateLine = () => {
    const textRef = useRef(null);

    useGSAP(() => {
        gsap.set(textRef.current, { x: "50%" });
        gsap.to(textRef.current, {
            x: "-50%",
            scrollTrigger: {
                trigger: textRef.current,
                start: "top 75%",
                end: "top 0%",
                scrub: 2,
            },
        });
    }, []);

    return (
        <div
            data-scroll
            data-scroll-speed="0.5"
            className="py-28 overflow-x-hidden"
        >
            <h1
                ref={textRef}
                className="text-[180px] font-semibold leading-[208px] whitespace-nowrap will-change-transform"
                data-scroll
                data-scroll-speed="0.1"
            >
                Elevate your digital presence
            </h1>
        </div>
    );
};

export default ElevateLine;
