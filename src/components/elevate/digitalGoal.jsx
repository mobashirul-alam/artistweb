"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import CountUp from "react-countup";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

const DigitalGoal = () => {
    const titleRef = useRef(null);
    const textRef = useRef(null);
    const sectionRef = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 40%",
                end: "bottom bottom",
            },
        });

        // Split and animate the title
        const titleText = new SplitType(titleRef.current, {
            types: "lines",
            lineClass: "line-split",
        });

        // Add styles for split lines
        gsap.set(titleText.lines, {
            opacity: 0,
            y: 50,
            display: "inline-block",
        });

        // Animate the title using the timeline
        tl.to(titleText.lines, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.2,
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
        tl.to(
            textText.lines,
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                stagger: 0.2,
                ease: "power3.out",
            },
            "-=0.4"
        );
    });

    return (
        <section ref={sectionRef} className="px-[90px] py-36">
            <div className="grid grid-cols-2">
                <div className="space-y-32">
                    <h2
                        ref={titleRef}
                        className="text-[68px] font-semibold leading-[94px] "
                    >
                        Let our experienced team elevate your digital goals
                    </h2>

                    <div className="flex items-start gap-x-16">
                        <div>
                            <CountUp
                                end={250}
                                duration={5}
                                enableScrollSpy
                                className="text-[68px] font-semibold mb-2"
                            />
                            <p className="text-[28px]">Five-Star Reviews</p>
                        </div>
                        <div>
                            <CountUp
                                end={10}
                                duration={3}
                                enableScrollSpy
                                className="text-[68px] font-semibold mb-2"
                            />
                            <p className="text-[28px]">In-House Experts</p>
                        </div>
                    </div>
                </div>

                <div className="flex justify-end items-end">
                    <p ref={textRef} className="text-[28px] ml-40">
                        We have successfully completed over 300+ projects from a
                        variety of industries. In our team, designers work
                        alongside developers and digital strategists, we believe
                        this is our winning recipe for creating digital products
                        that make an impact.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default DigitalGoal;
