"use client";

import { Badge } from "@/components/ui/badge";
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

const WorkTableSkeleton = () => {
    return (
        <div className="rounded-md border">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Image</TableHead>
                        <TableHead>Work Name</TableHead>
                        <TableHead>Tags</TableHead>
                        <TableHead>Latest</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {[1, 2, 3].map((index) => (
                        <TableRow key={index}>
                            <TableCell>
                                <Skeleton className="h-20 w-20 rounded-md" />
                            </TableCell>
                            <TableCell>
                                <Skeleton className="h-4 w-[200px]" />
                            </TableCell>
                            <TableCell>
                                <div className="flex gap-2">
                                    <Skeleton className="h-5 w-[60px]" />
                                    <Skeleton className="h-5 w-[80px]" />
                                    <Skeleton className="h-5 w-[70px]" />
                                </div>
                            </TableCell>
                            <TableCell>
                                <Skeleton className="h-4 w-[40px]" />
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
};

const WorkDataTable = () => {
    const [works, setWorks] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchWorks = async () => {
            try {
                const response = await fetch(
                    `${process.env.NEXT_PUBLIC_API_URL}/work`
                );
                if (!response.ok) {
                    throw new Error("Failed to fetch works");
                }
                const data = await response.json();
                setWorks(data || []);
            } catch (error) {
                console.error("Error fetching works:", error);
                toast.error("Failed to load works");
            } finally {
                setLoading(false);
            }
        };

        fetchWorks();
    }, []);

    if (loading) {
        return <WorkTableSkeleton />;
    }

    return (
        <div className="rounded-md border">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Image</TableHead>
                        <TableHead>Work Name</TableHead>
                        <TableHead>Tags</TableHead>
                        <TableHead>Latest</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {works.length === 0 ? (
                        <TableRow>
                            <TableCell
                                colSpan={5}
                                className="text-center h-24 text-muted-foreground"
                            >
                                No works found
                            </TableCell>
                        </TableRow>
                    ) : (
                        works.map((work) => (
                            <TableRow key={work._id}>
                                <TableCell>
                                    <div className="relative h-20 w-20">
                                        <Image
                                            src={work.image}
                                            alt={work.title}
                                            fill
                                            className="object-cover rounded-md"
                                        />
                                    </div>
                                </TableCell>
                                <TableCell className="font-medium">
                                    {work.title}
                                </TableCell>
                                <TableCell>
                                    <div className="flex gap-2 flex-wrap max-w-60">
                                        {work.tags.map((tag) => (
                                            <Badge
                                                key={tag}
                                                variant="secondary"
                                            >
                                                {tag}
                                            </Badge>
                                        ))}
                                    </div>
                                </TableCell>
                                <TableCell>
                                    {work.isLatest ? "Yes" : "No"}
                                </TableCell>
                            </TableRow>
                        ))
                    )}
                </TableBody>
            </Table>
        </div>
    );
};

export default WorkDataTable;
