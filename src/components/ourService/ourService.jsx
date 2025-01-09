"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

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
    const sectionRef = useRef(null);
    const titleRef = useRef(null);
    const servicesRef = useRef(null);
    const contactRef = useRef(null);

    useGSAP(() => {
        const button = buttonRef.current;
        const text1 = text1Ref.current;
        const text2 = text2Ref.current;
        const title = titleRef.current;
        const services = servicesRef.current;
        const contact = contactRef.current;

        // Create timeline for entrance animations
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 70%",
                end: "bottom bottom",
            },
        });

        // Split and animate the title
        const titleText = new SplitType(title, {
            types: "words",
            wordClass: "word-split",
        });

        gsap.set(titleText.words, {
            opacity: 0,
            y: 50,
            display: "inline-block",
        });

        tl.to(titleText.words, {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: "power3.out",
        });

        // Animate services list
        const serviceItems = services.querySelectorAll("h3");
        gsap.set(serviceItems, {
            opacity: 0,
            y: 50,
        });

        tl.to(serviceItems, {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: "power3.out",
        });

        // Add animation for countRef
        gsap.fromTo(
            contact,
            {
                clipPath: "inset(0 0 100% 0)",
            },
            {
                clipPath: "inset(0 0 0% 0)",
                duration: 1,
                ease: "power3.inOut",
                scrollTrigger: {
                    trigger: contact,
                    start: "top 70%",
                },
            }
        );

        // Button hover animation
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
        <section ref={sectionRef} className="py-36 px-[90px]">
            <div className="flex justify-between">
                <div className="space-y-7">
                    <h2
                        ref={titleRef}
                        className="text-[68px] font-semibold leading-[94px]"
                    >
                        We're good at
                    </h2>

                    <div ref={servicesRef}>
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

                <div
                    ref={contactRef}
                    className="flex justify-end items-end max-w-4xl"
                >
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
