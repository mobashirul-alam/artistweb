"use client";

import LocomotiveScroll from "locomotive-scroll";
import { useEffect } from "react";

const ScrollContext = ({ children }) => {
    useEffect(() => {
        // Initialize Locomotive Scroll on the client side
        const locomotiveScroll = new LocomotiveScroll();

        // Cleanup on unmount
        return () => {
            locomotiveScroll.destroy();
        };
    }, []);

    return <>{children}</>;
};

export default ScrollContext;
