"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { BsArrowRight } from "react-icons/bs";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
    const sectionRef = useRef(null);
    const titleRef = useRef(null);
    const servicesRef = useRef(null);
    const agencyRef = useRef(null);

    const services = [
        {
            id: 1,
            title: "E-commerce",
            link: "/",
            image: "https://d3aj5vjnhssdu4.cloudfront.net/wp-content/uploads/01_Alveena_Casa_London_Web_Design_New-250x250.jpg",
            linkText: "Latest Case Study",
            linkTitle: "Alveena Casa",
        },
        {
            id: 2,
            title: "Website Design",
            link: "/",
            image: "https://d3aj5vjnhssdu4.cloudfront.net/wp-content/uploads/01_Estate-Agency-Web-Design-London-250x250.jpg",
            linkText: "Latest Case Study",
            linkTitle: "Romans & Partners",
        },
        {
            id: 3,
            title: "Digital Products",
            link: "/",
            image: "https://d3aj5vjnhssdu4.cloudfront.net/wp-content/uploads/Fudli-Restaurant-Food-Order-System-250x250.jpg",
            linkText: "Latest Case Study",
            linkTitle: "Fudli App",
        },
        {
            id: 4,
            title: "Brand Identities",
            link: "/",
            image: "https://d3aj5vjnhssdu4.cloudfront.net/wp-content/uploads/learning_featured-image-250x250.jpeg",
            linkText: "Latest Case Study",
            linkTitle: "Learning Library",
        },
    ];

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 70%",
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

        // Animate each service item with stagger
        gsap.from(".service-item", {
            y: 50,
            opacity: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: "power3.out",
            scrollTrigger: {
                trigger: servicesRef.current,
                start: "top 85%",
            },
        });

        // Animate the agency section
        gsap.from(agencyRef.current.children, {
            y: 50,
            opacity: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: "power3.out",
            scrollTrigger: {
                trigger: agencyRef.current,
                start: "top 85%",
            },
        });
    }, []);

    return (
        <section
            ref={sectionRef}
            className="bg-[#111111] text-white px-[90px] py-36 bg-[radial-gradient(circle_at_75%_140%,_#545cff_0%,_transparent_35%)]"
        >
            <div>
                <div className="overflow-hidden">
                    <h2 ref={titleRef} className="text-[28px] font-light">
                        Our team of experts can help you with...
                    </h2>
                </div>

                {/* Services List */}
                <div ref={servicesRef} className="space-y-6 mb-16 mt-12">
                    {services.map((service) => (
                        <div
                            key={service.id}
                            className="service-item flex justify-between items-center group cursor-pointer"
                        >
                            <h3 className="text-[68px] font-semibold leading-[94px] group-hover:text-[63px] transition-all duration-500">
                                {service.title}
                            </h3>

                            <Link
                                href={service.link}
                                className="hidden group-hover:flex items-center gap-x-8 transition-all duration-500"
                            >
                                <div className="text-left">
                                    <p className="text-sm text-gray-400">
                                        {service.linkText}
                                    </p>
                                    <p className="text-[28px] font-medium">
                                        {service.linkTitle}
                                    </p>
                                </div>
                                <div className="flex items-center gap-x-8">
                                    <Image
                                        src={service.image}
                                        alt={`${service.title}`}
                                        width={80}
                                        height={80}
                                        className="rounded-full object-cover"
                                    />
                                    <BsArrowRight className="w-16 h-16" />
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>

                <div className="h-[1px] bg-white/20 w-full my-16"></div>
            </div>

            {/* Agency Section */}
            <div ref={agencyRef} className="grid grid-cols-2">
                <div>
                    <h2 className="text-[68px] leading-[95px] font-semibold bg-[linear-gradient(45deg,_rgb(84,92,255),_rgb(141,149,255)_80%)] bg-clip-text text-transparent">
                        Creative Agency
                    </h2>
                    <div className="w-full">
                        <p className="text-2xl leading-9 my-6 text-white w-2/3">
                            We're an award-winning creative agency based in
                            London, focused on E-Commerce, Web Design London,
                            Digital Products, Branding and SEO.
                        </p>
                    </div>
                </div>
                <div className="flex justify-end items-end gap-4">
                    <button className="text-2xl font-medium px-12 h-[72px] w-[244px] border border-[#545CFF] rounded-[100px] whitespace-nowrap">
                        300+ Projects
                    </button>
                    <button className="text-2xl font-medium px-12 h-[72px] w-[244px] border border-[#545CFF] rounded-[100px] whitespace-nowrap">
                        15 Awards
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Services;
