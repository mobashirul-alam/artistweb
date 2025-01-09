"use client";

import { useLoading } from "@/context/loading-context";
import gsap from "gsap";
import Image from "next/image";
import { useEffect, useRef } from "react";

const LoadingOverlay = () => {
    const overlayRef = useRef(null);
    const { isLoading } = useLoading();
    const animationRef = useRef(null);

    useEffect(() => {
        if (!isLoading && overlayRef.current) {
            // Content is loaded, animate out
            const tl = gsap.timeline();

            // Store the timeline for cleanup
            animationRef.current = tl;

            tl.to(overlayRef.current, {
                xPercent: 100,
                duration: 1.5,
                ease: "power2.inOut",
            });
        }

        return () => {
            if (animationRef.current) {
                animationRef.current.kill();
            }
        };
    }, [isLoading]);

    return (
        <div
            ref={overlayRef}
            className="fixed inset-0 z-50 bg-[#111111] flex items-center justify-center"
        >
            <div className="animate-bounce">
                <Image
                    src="/images/crafting-bg.svg"
                    alt="Artistweb"
                    width={100}
                    height={100}
                />
            </div>
        </div>
    );
};

export default LoadingOverlay;
