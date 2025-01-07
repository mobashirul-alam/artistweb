"use client";

import ImageUpload from "@/components/imageUpload/imageUpload";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import MultiSelectCombobox from "@/components/ui/multi-select-combobox";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { SlClose } from "react-icons/sl";
import { toast } from "sonner";
import * as z from "zod";

const formSchema = z.object({
    title: z.string().min(1, "Title is required"),
    tags: z.array(z.string()),
    isLatest: z.boolean().optional(),
    image: z.string().min(1, "Image is required"),
});

const WorkForm = () => {
    const form = useForm({
        resolver: zodResolver(formSchema),
    });

    function onSubmit(values) {
        try {
            console.log(values);
            toast(
                <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
                    <code className="text-white">
                        {JSON.stringify(values, null, 2)}
                    </code>
                </pre>
            );
        } catch (error) {
            console.error("Form submission error", error);
            toast.error("Failed to submit the form. Please try again.");
        }
    }

    const tagsInfo = [
        { label: "UI/UX Design", value: "UI/UX Design" },
        { label: "Development", value: "Development" },
        { label: "Property Portal", value: "Property Portal" },
        { label: "E-Commerce", value: "E-Commerce" },
        { label: "Digital Product", value: "Digital Product" },
    ];

    return (
        <div>
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-[30px] font-bold">Work</h2>
                    <p className="text-sm mb-1">Create a new work</p>
                </div>
                <Link href={"/dashboard/work"}>
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
                    className="space-y-8"
                >
                    <FormField
                        control={form.control}
                        name="title"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Work Title</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="title..."
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
                        name="tags"
                        render={({ field }) => (
                            <FormItem className="flex flex-col">
                                <FormLabel>Tags</FormLabel>
                                <FormControl>
                                    <MultiSelectCombobox
                                        selectedValues={field.value}
                                        onChange={field.onChange}
                                        data={tagsInfo}
                                        placeholder="Select tags"
                                        searchPlaceholder="Search tags..."
                                        emptyMessage={"No tags found."}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="isLatest"
                        render={({ field }) => (
                            <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                                <div className="space-y-0.5">
                                    <FormLabel className="text-base">
                                        Latest
                                    </FormLabel>
                                    <FormDescription>
                                        Switch to make this work the latest
                                        work.
                                    </FormDescription>
                                </div>
                                <FormControl>
                                    <Switch
                                        checked={field.value}
                                        onCheckedChange={field.onChange}
                                    />
                                </FormControl>
                            </FormItem>
                        )}
                    />

                    {/* Image upload */}
                    <FormField
                        control={form.control}
                        name="image"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Work Image</FormLabel>
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

export default WorkForm;
