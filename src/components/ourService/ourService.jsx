"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

const OurService = () => {
    const services = [
        "E-Commerce",
        "Website Design",
        "Web Development",
        "Digital Products",
        "Brand Identities",
        "SEO Optimization",
    ];

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
        <section className="py-36 px-[90px]">
            <div className="flex justify-between">
                <div className="space-y-7">
                    <h2 className="text-[68px] font-semibold leading-[94px]">
                        We're good at
                    </h2>

                    <div>
                        <p className="text-base mb-4">Services</p>
                        {services.map((service) => (
                            <h3
                                key={service}
                                className="text-[38px] font-semibold leading-[58px] mb-2 hover:text-blue-600 transition-colors cursor-pointer duration-300"
                            >
                                {service}
                            </h3>
                        ))}
                    </div>
                </div>

                <div className="flex justify-end items-end max-w-4xl">
                    <div className="bg-[#4F46E5] text-white p-16 rounded-[32px]">
                        <h3 className="text-[48px] font-semibold mb-8 leading-[68px]">
                            Let's start with a conversation about how we can
                            help you! Get in touch, we're a nice bunch.
                        </h3>

                        <div className="flex flex-wrap gap-4">
                            <button
                                ref={buttonRef}
                                className="text-2xl font-medium px-12 bg-white text-black rounded-[100px] relative overflow-hidden h-[72px] w-[200px] hover:scale-105 transition-all duration-500"
                            >
                                <span
                                    ref={text1Ref}
                                    className="absolute w-full text-center top-1/2 left-0 -translate-y-1/2"
                                >
                                    Let's talk
                                </span>
                                <span
                                    ref={text2Ref}
                                    className="absolute w-full text-center top-1/2 left-0 -translate-y-1/2"
                                >
                                    Let's talk
                                </span>
                            </button>
                            <button className="text-2xl font-medium px-12 h-[72px] border border-white/50 rounded-[100px] whitespace-nowrap">
                                0207 112 82 85
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurService;
