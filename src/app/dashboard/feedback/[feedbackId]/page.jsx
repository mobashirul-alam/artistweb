"use client";

import ImageUpload from "@/components/imageUpload/imageUpload";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { SlClose } from "react-icons/sl";
import { toast } from "sonner";
import * as z from "zod";

const formSchema = z.object({
    feedback: z.string().min(10, {
        message: "Feedback must be at least 10 characters.",
    }),
    name: z.string().min(1, "Name is required"),
    companyName: z.string().min(1, "Company Name is required"),
    logo: z.string().min(1, "Logo is required"),
});

const FeedbackForm = () => {
    const router = useRouter();
    const form = useForm({
        resolver: zodResolver(formSchema),
    });

    async function onSubmit(values) {
        try {
            const response = await fetch(
                `${process.env.NEXT_PUBLIC_API_URL}/feedback`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(values),
                }
            );

            if (!response.ok) {
                throw new Error("Failed to create feedback");
            }

            const data = await response.json();
            toast.success("Feedback created successfully!");
            router.push("/dashboard/feedback");
        } catch (error) {
            console.error("Form submission error", error);
            toast.error("Failed to submit the form. Please try again.");
        }
    }

    return (
        <div>
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-[30px] font-bold">Feedback</h2>
                    <p className="text-sm mb-1">Create a new feedback</p>
                </div>
                <Link href={"/dashboard/feedback"}>
                    <Button
                        className={cn(
                            "bg-transparent text-black border border-black/10 hover:text-white"
                        )}
                    >
                        <SlClose />
                    </Button>
                </Link>
            </div>
            <Separator className="mb-4" />

            {/* Work Form  */}
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-4"
                >
                    <FormField
                        control={form.control}
                        name="feedback"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Feedback</FormLabel>
                                <FormControl>
                                    <Textarea
                                        placeholder="Your valuable feedback"
                                        {...field}
                                        className="h-20"
                                    />
                                </FormControl>

                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Name</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="Your Name"
                                        type="text"
                                        {...field}
                                    />
                                </FormControl>

                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="companyName"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Company Name</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="Your Name"
                                        type="text"
                                        {...field}
                                    />
                                </FormControl>

                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* Image upload */}
                    <FormField
                        control={form.control}
                        name="logo"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Logo</FormLabel>
                                <FormControl>
                                    <ImageUpload onChange={field.onChange} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <Button type="submit">Submit</Button>
                </form>
            </Form>
        </div>
    );
};

export default FeedbackForm;
