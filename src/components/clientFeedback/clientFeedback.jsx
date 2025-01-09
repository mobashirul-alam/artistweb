"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import SplitType from "split-type";
import FeedbackCard from "../cards/feedbackCard";
import FeedbackCardSkeleton from "../cards/feedbackCardSkeleton";

const ClientFeedback = () => {
    const [feedbacks, setFeedbacks] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const titleRef = useRef(null);
    const textRef = useRef(null);
    const containerRef = useRef(null);
    const feedbackRef = useRef(null);

    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);

        const title = titleRef.current;
        const text = textRef.current;

        // Split the title text using SplitType
        const splitTitle = new SplitType(title, {
            types: "words",
            wordClass: "word-split",
        });

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 60%",
            },
        });

        // Animate each word of the title
        tl.from(splitTitle.words, {
            opacity: 0,
            y: 100,
            duration: 0.8,
            ease: "power3.out",
            stagger: 0.1,
        }).fromTo(
            text,
            {
                opacity: 0,
                y: 50,
            },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: "power3.out",
            },
            "-=0.4"
        );

        // Animate feedback cards
        const feedbackCards = feedbackRef.current?.children;
        if (feedbackCards?.length) {
            Array.from(feedbackCards).forEach((card, index) => {
                gsap.fromTo(
                    card,
                    {
                        y: 100,
                        scale: 0.9,
                    },
                    {
                        y: 0,
                        scale: 1,
                        duration: 1.5,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: card,
                            start: "top 100%",
                            end: "top -50%",
                            toggleActions: "play play reverse play",
                            scrub: 2,
                        },
                    }
                );
            });
        }

        // Cleanup split text on unmount
        return () => {
            splitTitle.revert();
        };
    }, [feedbacks]);

    useEffect(() => {
        const fetchFeedbacks = async () => {
            try {
                setIsLoading(true);
                const response = await fetch(
                    `${process.env.NEXT_PUBLIC_API_URL}/feedback`
                );
                if (!response.ok) {
                    throw new Error("Failed to fetch feedbacks");
                }
                const data = await response.json();
                setFeedbacks(data || []);
            } catch (error) {
                console.error("Error fetching feedbacks:", error);
                setFeedbacks([]);
            } finally {
                setIsLoading(false);
            }
        };

        fetchFeedbacks();
    }, []);

    return (
        <div className="bg-[#111111]">
            <div className="bg-[radial-gradient(circle_at_-30%_21%,_rgb(84,92,255)_0px,_rgba(0,0,0,0)_30%),_radial-gradient(circle_at_120%_80%,_rgb(84,92,255)_0px,_rgba(0,0,0,0)_30%)]">
                <div
                    ref={containerRef}
                    className="py-36 max-w-[1380px] mx-auto text-white"
                >
                    <h2
                        ref={titleRef}
                        className="text-[68px] font-semibold leading-[94px] mb-12"
                    >
                        Client Feedback
                    </h2>
                    <div
                        ref={textRef}
                        className="flex items-center justify-between"
                    >
                        <p className="text-[28px]">
                            We're collaborators - We build tight-knit
                            partnerships with our clients.
                        </p>
                        <div className="flex items-center gap-4">
                            <AiOutlineLoading3Quarters className="animate-spin w-10 h-10 text-[#71777E]" />
                            <p className="text-2xl text-[#71777E]">
                                Keep scrolling
                            </p>
                        </div>
                    </div>

                    <div ref={feedbackRef} className="space-y-16 mt-16">
                        {isLoading ? (
                            <>
                                <FeedbackCardSkeleton />
                                <FeedbackCardSkeleton />
                                <FeedbackCardSkeleton />
                            </>
                        ) : (
                            feedbacks.map((feedback) => (
                                <FeedbackCard
                                    key={feedback._id}
                                    feedback={feedback.feedback}
                                    name={feedback.name}
                                    companyName={feedback.companyName}
                                    logo={feedback.logo}
                                />
                            ))
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClientFeedback;
