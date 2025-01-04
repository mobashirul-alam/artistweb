"use client";

import { useScrollDirection } from "@/hooks/useScrollDirection";
import { Equal } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
    const { scrollDirection, isScrolled } = useScrollDirection();

    return (
        <nav
            className={`fixed w-full transition-all duration-300 ${
                scrollDirection === "down" ? "-top-[100px]" : "top-0"
            } ${
                isScrolled
                    ? "bg-white/80 backdrop-blur-md shadow-sm"
                    : "bg-transparent"
            }`}
        >
            <div className="mx-[90px] px-4 py-6 flex justify-between items-center h-[100px]">
                <Link href="/" className="text-2xl font-bold">
                    ML
                </Link>
                <div className="flex items-center gap-4">
                    <button className="px-6 py-2 rounded-full border border-black hover:bg-black hover:text-white transition-colors">
                        Get in touch
                    </button>
                    <button className="p-2 hover:bg-gray-100 rounded-full">
                        <Equal className="h-6 w-6" />
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
