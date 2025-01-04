import { useEffect, useState } from "react";

export function useScrollDirection() {
    const [scrollDirection, setScrollDirection] = useState("up");
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        let lastScrollY = window.scrollY;

        const updateScrollDirection = () => {
            const scrollY = window.scrollY;
            const direction = scrollY > lastScrollY ? "down" : "up";

            // Only update scroll direction if there's a significant change
            if (
                direction !== scrollDirection &&
                Math.abs(scrollY - lastScrollY) > 10
            ) {
                setScrollDirection(direction);
            }

            // Update scroll state for glass effect
            setIsScrolled(scrollY > 0);

            lastScrollY = scrollY > 0 ? scrollY : 0;
        };

        window.addEventListener("scroll", updateScrollDirection);
        return () => {
            window.removeEventListener("scroll", updateScrollDirection);
        };
    }, [scrollDirection]);

    return { scrollDirection, isScrolled };
}
