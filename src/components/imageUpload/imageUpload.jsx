"use client";

import { useEdgeStore } from "@/lib/edgestore";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { FiUploadCloud } from "react-icons/fi";
import { toast } from "sonner";
import { Button } from "../ui/button";
import { SingleImageDropzone } from "../ui/singleImageDropzone";

const ImageUpload = ({ onChange }) => {
    const [file, setFile] = useState();
    const [isUploading, setIsUploading] = useState(false);
    const [uploadProgress, setUploadProgress] = useState(0);
    const { edgestore } = useEdgeStore();

    return (
        <div className="space-y-4">
            <SingleImageDropzone
                width={200}
                height={200}
                value={file}
                onChange={(file) => {
                    setFile(file);
                    setUploadProgress(0);
                }}
            />
            <Button
                onClick={async () => {
                    if (file) {
                        try {
                            setIsUploading(true);
                            const res = await edgestore.publicFiles.upload({
                                file,
                                onProgressChange: (progress) => {
                                    setUploadProgress(progress);
                                },
                            });
                            onChange?.(res.url);
                            setIsUploading(false);
                            setUploadProgress(0);
                        } catch (error) {
                            toast.error("Upload failed");
                            setIsUploading(false);
                            setUploadProgress(0);
                        }
                    }
                }}
                disabled={!file || isUploading}
                className="relative w-[200px]"
            >
                <div
                    className={cn(
                        "absolute inset-0 bg-primary transition-all duration-300",
                        isUploading ? "opacity-100" : "opacity-0"
                    )}
                    style={{ width: `${uploadProgress}%` }}
                />
                <span className="relative flex items-center justify-center gap-2">
                    <FiUploadCloud className="w-5 h-5" />
                    {isUploading
                        ? `Uploading ${uploadProgress}%`
                        : "Upload Image"}
                </span>
            </Button>
        </div>
    );
};

export default ImageUpload;
