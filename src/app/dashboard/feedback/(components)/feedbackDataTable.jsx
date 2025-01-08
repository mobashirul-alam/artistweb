"use client";

import { Skeleton } from "@/components/ui/skeleton";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import Image from "next/image";
import { useEffect, useState } from "react";
import { toast } from "sonner";

const FeedbackTableSkeleton = () => {
    return (
        <div className="rounded-md border">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Logo</TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead>Company</TableHead>
                        <TableHead>Feedback</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {[1, 2, 3].map((index) => (
                        <TableRow key={index}>
                            <TableCell>
                                <Skeleton className="h-20 w-20 rounded-md" />
                            </TableCell>
                            <TableCell>
                                <Skeleton className="h-4 w-[150px]" />
                            </TableCell>
                            <TableCell>
                                <Skeleton className="h-4 w-[200px]" />
                            </TableCell>
                            <TableCell>
                                <Skeleton className="h-4 w-[300px]" />
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
};

const FeedbackDataTable = () => {
    const [feedbacks, setFeedbacks] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchFeedbacks = async () => {
            try {
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
                toast.error("Failed to load feedbacks");
            } finally {
                setLoading(false);
            }
        };

        fetchFeedbacks();
    }, []);

    if (loading) {
        return <FeedbackTableSkeleton />;
    }

    return (
        <div className="rounded-md border">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Logo</TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead>Company</TableHead>
                        <TableHead>Feedback</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {feedbacks.length === 0 ? (
                        <TableRow>
                            <TableCell
                                colSpan={4}
                                className="text-center h-24 text-muted-foreground"
                            >
                                No feedbacks found
                            </TableCell>
                        </TableRow>
                    ) : (
                        feedbacks.map((feedback) => (
                            <TableRow key={feedback._id}>
                                <TableCell>
                                    <div className="relative h-20 w-20">
                                        <Image
                                            src={feedback.logo}
                                            alt={feedback.name}
                                            fill
                                            className="object-cover rounded-md"
                                        />
                                    </div>
                                </TableCell>
                                <TableCell className="font-medium">
                                    {feedback.name}
                                </TableCell>
                                <TableCell>{feedback.companyName}</TableCell>
                                <TableCell className="max-w-[400px]">
                                    <p className="line-clamp-2">
                                        {feedback.feedback}
                                    </p>
                                </TableCell>
                            </TableRow>
                        ))
                    )}
                </TableBody>
            </Table>
        </div>
    );
};

export default FeedbackDataTable;
