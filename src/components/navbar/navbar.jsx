"use client";

import { useScrollDirection } from "@/hooks/useScrollDirection";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { PiEquals } from "react-icons/pi";
import {
    Modal,
    ModalBody,
    ModalContent,
    ModalTrigger,
} from "../ui/animated-modal";

// Create a new component for modal content
const NavigationContent = () => {
    const navLinkRef = useRef(null);
    const navLinksRef = useRef([]);
    const buttonRef3 = useRef(null);
    const text1Ref3 = useRef(null);
    const text2Ref3 = useRef(null);
    const linkRef = useRef(null);
    const socialLinkRef = useRef(null);

    useGSAP(() => {
        // Navigation Links Animation
        const navLinks = navLinksRef.current;
        const navContainer = navLinkRef.current;
        const linkContainer = linkRef.current;
        const socialLinks = socialLinkRef.current;

        if (navContainer && navLinks.length > 0) {
            gsap.fromTo(
                navLinks,
                {
                    y: 50,
                    opacity: 0,
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.5,
                    stagger: 0.1,
                    ease: "power3.out",
                }
            );
        }

        if (linkContainer && socialLinks) {
            gsap.fromTo(
                socialLinks,
                {
                    y: 30,
                    opacity: 0,
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.5,
                    ease: "power3.out",
                    delay: 0.6,
                }
            );
        }

        // Button 3 Animation
        const button3 = buttonRef3.current;
        const text1_3 = text1Ref3.current;
        const text2_3 = text2Ref3.current;

        if (button3 && text1_3 && text2_3) {
            gsap.set(text1_3, { y: 0, opacity: 1 });
            gsap.set(text2_3, { y: 20, opacity: 0 });

            button3.addEventListener("mouseenter", () => {
                gsap.to(text1_3, {
                    y: -20,
                    opacity: 0,
                    duration: 0.3,
                    ease: "power1.out",
                });
                gsap.to(text2_3, {
                    y: 0,
                    opacity: 1,
                    duration: 0.3,
                    ease: "power1.out",
                    delay: 0.1,
                });
            });

            button3.addEventListener("mouseleave", () => {
                gsap.set(text1_3, { y: 0, opacity: 1 });
                gsap.set(text2_3, { y: 20, opacity: 0 });
            });
        }
    }, []);

    useEffect(() => {
        const navLinks = navLinksRef.current;
        const navContainer = navLinkRef.current;

        if (navContainer && navLinks.length > 0) {
            gsap.fromTo(
                navLinks,
                {
                    y: -50,
                    opacity: 0,
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.5,
                    stagger: 0.1,
                    ease: "power3.out",
                }
            );
        }
    }, []); // Run once when component mounts

    return (
        <div className="text-white p-8 flex flex-col">
            <div className="flex justify-between items-center mb-8">
                <h2 className="text-[28px] font-medium">Navigation</h2>
            </div>

            <div
                ref={navLinkRef}
                className="space-y-2 text-[56px] font-semibold"
            >
                <div className="flex items-center gap-8">
                    <Link
                        ref={(el) => (navLinksRef.current[0] = el)}
                        href="/case-studies"
                        className="hover:text-gray-300 transition-colors"
                    >
                        Case Studies
                    </Link>
                    <span
                        ref={(el) => (navLinksRef.current[1] = el)}
                        className="flex items-center justify-center w-[70px] h-[70px] rounded-full border border-white/20 text-2xl font-normal"
                    >
                        13
                    </span>
                </div>
                <Link
                    ref={(el) => (navLinksRef.current[2] = el)}
                    href="/agency"
                    className="block hover:text-gray-300 transition-colors"
                >
                    Our Agency
                </Link>
                <Link
                    ref={(el) => (navLinksRef.current[3] = el)}
                    href="/contact"
                    className="block hover:text-gray-300 transition-colors"
                >
                    Contact Us
                </Link>
                <Link
                    ref={(el) => (navLinksRef.current[4] = el)}
                    href="/news"
                    className="block hover:text-gray-300 transition-colors"
                >
                    News
                </Link>
            </div>

            <div
                ref={linkRef}
                className="mt-24 flex justify-between items-center"
            >
                <div ref={socialLinkRef}>
                    <p className="text-sm text-gray-400 mb-4">Follow us</p>
                    <div className="flex gap-6">
                        <Link
                            href="#"
                            className="text-sm hover:text-gray-300 transition-colors"
                        >
                            Instagram
                        </Link>
                        <Link
                            href="#"
                            className="text-sm hover:text-gray-300 transition-colors"
                        >
                            Facebook
                        </Link>
                        <Link
                            href="#"
                            className="text-sm hover:text-gray-300 transition-colors"
                        >
                            Twitter
                        </Link>
                        <Link
                            href="#"
                            className="text-sm hover:text-gray-300 transition-colors"
                        >
                            Awwwards
                        </Link>
                    </div>
                </div>

                <button
                    ref={buttonRef3}
                    className="text-2xl font-medium px-12 bg-[#545CFF] text-white rounded-[100px] relative overflow-hidden h-[72px] w-[244px] hover:scale-105 transition-all duration-500"
                >
                    <span
                        ref={text1Ref3}
                        className="absolute w-full text-center top-1/2 left-0 -translate-y-1/2"
                    >
                        Get in touch
                    </span>
                    <span
                        ref={text2Ref3}
                        className="absolute w-full text-center top-1/2 left-0 -translate-y-1/2"
                    >
                        Get in touch
                    </span>
                </button>
            </div>
        </div>
    );
};

const Navbar = () => {
    const { scrollDirection, isScrolled } = useScrollDirection();
    const [isModalOpen, setIsModalOpen] = useState(false);

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
            className={`fixed w-full transition-all duration-300 z-10 ${
                scrollDirection === "down" ? "-top-[100px]" : "top-0"
            } ${
                isScrolled
                    ? "bg-white/70 backdrop-blur-md shadow-sm"
                    : "bg-transparent"
            }`}
        >
            <div className="mx-[90px] px-4 py-6 flex justify-between items-center h-[100px]">
                <Link href="/" className="text-2xl font-bold">
                    <div className="hover:animate-pulse">
                        <Image
                            src="/images/logo-black.svg"
                            alt="Artistweb"
                            width={60}
                            height={60}
                        />
                    </div>
                </Link>
                <div className="flex items-center gap-4">
                    <Link
                        ref={buttonRef}
                        href="/dashboard"
                        className="relative px-6 py-3 text-base font-medium rounded-full border border-[#545cff] overflow-hidden inline-block w-[143px] h-[38px]"
                    >
                        <span
                            ref={text1Ref}
                            className="absolute w-full text-center top-1/2 left-0 -translate-y-1/2"
                        >
                            Dashboard
                        </span>
                        <span
                            ref={text2Ref}
                            className="absolute w-full text-center top-1/2 left-0 -translate-y-1/2"
                        >
                            Dashboard
                        </span>
                    </Link>

                    <Modal onOpenChange={setIsModalOpen}>
                        <ModalTrigger>
                            <div
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
                            </div>
                        </ModalTrigger>
                        <ModalBody className="bg-[#111111] bg-[radial-gradient(circle_at_73%_145%,_rgb(84,92,255)_0px,_rgba(0,0,0,0)_42%)]">
                            <ModalContent>
                                <NavigationContent />
                            </ModalContent>
                        </ModalBody>
                    </Modal>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
