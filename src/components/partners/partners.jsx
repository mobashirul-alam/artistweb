"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import { useRef } from "react";
import SplitType from "split-type";

const Partners = () => {
    const partners = [
        { name: "Deezer", logo: "/logo/deezer.png" },
        { name: "BBC", logo: "/logo/bbc.png" },
        { name: "Richemont", logo: "/logo/richemont.png" },
        { name: "Ferrari", logo: "/logo/ferrari.png" },
        { name: "ITV", logo: "/logo/itv.png" },
    ];

    const textRef = useRef(null);
    const sectionRef = useRef(null);
    const partnersRef = useRef([]);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 80%",
                end: "bottom bottom",
            },
        });

        // split and animate the text
        const textText = new SplitType(textRef.current, {
            types: "words",
            wordClass: "word-split",
        });

        // Add styles for split lines
        gsap.set(textText.words, {
            opacity: 0,
            y: 50,
            display: "inline-block",
        });

        // Set initial state for partner logos
        gsap.set(partnersRef.current, {
            opacity: 0,
            y: 30,
        });

        // Animate the text using the timeline
        tl.to(textText.words, {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.05,
            ease: "power3.out",
        });

        // Animate partner logos after text animation
        tl.to(
            partnersRef.current,
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                stagger: 0.1,
                ease: "power2.out",
            },
            "-=0.3"
        );
    });

    return (
        <section className="py-36 px-[90px]" ref={sectionRef}>
            <div className="space-y-36">
                <h2
                    ref={textRef}
                    className="text-[68px] font-semibold leading-[94px] max-w-6xl"
                >
                    From ambitious startups to global companies, we partner with
                    great businesses and industry leaders.
                </h2>

                <div className="flex justify-between items-center">
                    {partners.map((partner, index) => (
                        <div
                            key={partner.name}
                            ref={(el) => (partnersRef.current[index] = el)}
                        >
                            <Image
                                src={partner.logo}
                                alt={`${partner.name} logo`}
                                width={240}
                                height={80}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Partners;
