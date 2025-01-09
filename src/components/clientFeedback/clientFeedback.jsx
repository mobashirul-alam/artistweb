"use client";

import { useEffect, useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import FeedbackCard from "../cards/feedbackCard";
import FeedbackCardSkeleton from "../cards/feedbackCardSkeleton";

const ClientFeedback = () => {
    const [feedbacks, setFeedbacks] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

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
                <div className="py-36 max-w-[1380px] mx-auto text-white">
                    <h2 className="text-[68px] font-semibold leading-[94px] mb-12">
                        Client Feedback
                    </h2>
                    <div className="flex items-center justify-between">
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

                    <div className="space-y-16 mt-16">
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
                                    image={feedback.image}
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
