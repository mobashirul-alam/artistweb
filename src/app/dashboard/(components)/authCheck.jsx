"use client";

import { useAuth } from "@/hooks/useAuth";

export default function AuthCheck() {
    useAuth();
    return null;
}
