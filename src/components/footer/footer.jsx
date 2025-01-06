"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";
import { SiWebflow } from "react-icons/si";

function SocialBar() {
    return (
        <div className="flex justify-between items-center rounded-[32px] bg-black px-10 py-4 text-white">
            <span className="text-xl font-normal">Follow us</span>
            <div className="flex items-center gap-2">
                <a
                    href="#"
                    className="p-[10px] rounded-full border-2 border-transparent hover:border-[#545CFF] transition-all duration-500"
                >
                    <FaInstagram size={24} />
                </a>
                <a
                    href="#"
                    className="p-[10px] rounded-full border-2 border-transparent hover:border-[#545CFF] transition-all duration-500"
                >
                    <FaFacebookF size={24} />
                </a>
                <a
                    href="#"
                    className="p-[10px] rounded-full border-2 border-transparent hover:border-[#545CFF] transition-all duration-500"
                >
                    <FaXTwitter size={24} />
                </a>
                <a
                    href="#"
                    className="p-[10px] rounded-full border-2 border-transparent hover:border-[#545CFF] transition-all duration-500"
                >
                    <SiWebflow size={24} />
                </a>
            </div>
        </div>
    );
}

function CTACard() {
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
        <div className="rounded-[32px] bg-[#F3F4F6] px-[60px] py-12 text-center">
            <h3 className="mb-4 text-[48px] font-semibold leading-[68px]">
                Let's get started
            </h3>
            <p className="mb-12">We'd love to hear about your project.</p>

            <button
                ref={buttonRef}
                className="text-2xl font-medium px-12 bg-[#545CFF] text-white rounded-[100px] relative overflow-hidden h-[72px] w-full hover:scale-105 transition-all duration-500"
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
        </div>
    );
}

const Footer = () => {
    return (
        <footer className="py-[120px] px-[90px]">
            <div className="">
                <div className="grid grid-cols-2">
                    {/* Left Column */}
                    <div className="space-y-8">
                        <h2 className="text-[54px] font-semibold leading-[74px]">
                            We love crafting unforgettable digital experiences,
                            brands and websites with people like you.
                        </h2>

                        <div className="space-y-4">
                            <p className="">Get in touch</p>
                            <p className="text-[28px] font-semibold leading-10">
                                +44 207 112 82 85
                            </p>
                            <p className="text-[28px] font-semibold leading-10">
                                contact@artistsweb.com
                            </p>
                            <p className="text-[28px] font-semibold leading-10">
                                Artistsweb, 18 Soho Square, London, W1D 3QL,
                                United Kingdom
                            </p>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="flex flex-col gap-10 w-3/5 ml-auto">
                        <SocialBar />
                        <CTACard />
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-16 flex flex-col items-center justify-between gap-4 text-sm text-[#71777E] md:flex-row">
                    <p>© 2025 Artistsweb Ltd · All rights reserved.</p>
                    <div className="flex gap-6">
                        <a
                            href="#"
                            className="transition-colors hover:text-black"
                        >
                            Privacy Policy
                        </a>
                        <a
                            href="#"
                            className="transition-colors hover:text-black"
                        >
                            Terms & Conditions
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
