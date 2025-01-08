"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useRef } from "react";
import CountUp from "react-countup";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

const DigitalPartner = () => {
    const brands = [
        { name: "BBC", logo: "/images/BBC-Logo-07.png" },
        { name: "BMW", logo: "/images/bmw-png.png" },
        { name: "Costa", logo: "/images/BBC-Logo-07.png" },
    ];

    const titleRef = useRef(null);
    const sectionRef = useRef(null);
    const textRef = useRef(null);
    const brandsRef = useRef(null);
    const brandsTextRef = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 60%",
                end: "bottom bottom",
            },
        });

        // Split and animate the title
        const titleText = new SplitType(titleRef.current, {
            types: "words",
            wordClass: "word-split",
        });

        // Add styles for split words
        gsap.set(titleText.words, {
            opacity: 0,
            y: 50,
            display: "inline-block",
        });

        // Animate the title using the timeline
        tl.to(titleText.words, {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: "power3.out",
        });

        // split and animate the text
        const textText = new SplitType(textRef.current, {
            types: "lines",
            lineClass: "line-split",
        });

        // Add styles for split lines
        gsap.set(textText.lines, {
            opacity: 0,
            y: 50,
            display: "inline-block",
        });

        // Animate the text using the timeline
        tl.to(textText.lines, {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: "power3.out",
        });

        gsap.from(brandsRef.current, {
            y: 50,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
                trigger: brandsRef.current,
                start: "top 85%",
            },
        });

        gsap.from(brandsTextRef.current, {
            y: 50,
            opacity: 0,
            duration: 0.8,
            delay: 0.1,
            ease: "power3.out",
            scrollTrigger: {
                trigger: brandsTextRef.current,
                start: "top 85%",
            },
        });
    }, []);

    return (
        <section ref={sectionRef}>
            <section className="px-[90px] py-36 grid grid-cols-2">
                <div className="space-y-40">
                    <div className="space-y-6">
                        <h2
                            ref={titleRef}
                            className="text-[68px] font-semibold"
                        >
                            Your Digital Partner
                        </h2>

                        <p ref={textRef} className="text-[28px] max-w-2xl">
                            We partner with companies of all sizes to solve
                            complex business challenges and define their digital
                            strategies and objectives that deliver results. We
                            help bring ideas to life and create brands, websites
                            & digital products that work.
                        </p>
                    </div>

                    <div className="flex items-center gap-6">
                        <div ref={brandsRef} className="flex -space-x-8">
                            {brands.map((brand) => (
                                <div
                                    key={brand.name}
                                    className="w-[70px] h-[70px] rounded-full border border-white bg-black"
                                >
                                    <Image
                                        src={brand.logo}
                                        alt={`${brand.name} logo`}
                                        width={70}
                                        height={70}
                                        className="w-full h-full object-contain rounded-full"
                                    />
                                </div>
                            ))}
                        </div>
                        <p
                            ref={brandsTextRef}
                            className="text-[#71777E] text-2xl"
                        >
                            Brands who've trusted us...
                        </p>
                    </div>
                </div>
                <div className="flex justify-end items-end">
                    <div className="bg-[#ECF1F4] rounded-3xl p-16">
                        <div className="grid md:grid-cols-2 divide-x divide-[#72777e59]">
                            <div className="text-center p-10">
                                <CountUp
                                    end={20}
                                    duration={3}
                                    enableScrollSpy
                                    className="text-[68px] font-semibold mb-2"
                                />
                                <p className="text-[28px] text-black">
                                    Years on the market
                                </p>
                            </div>
                            <div className="text-center p-10">
                                <CountUp
                                    end={500}
                                    duration={5}
                                    enableScrollSpy
                                    className="text-[68px] font-semibold mb-2"
                                />
                                <p className="text-[28px] text-black">
                                    Satisfied Customers
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="px-[90px]">
                <Image
                    src="/images/team-a.jpg"
                    alt="team"
                    width={1920}
                    height={982}
                    className="w-full h-[982px] object-cover rounded-[40px]"
                />
            </section>
        </section>
    );
};

export default DigitalPartner;
