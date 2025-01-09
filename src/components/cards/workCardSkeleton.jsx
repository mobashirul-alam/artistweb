const WorkCardSkeleton = () => {
    return (
        <div className="min-w-[828px] h-[662px] relative rounded-3xl overflow-hidden border-4 border-transparent bg-gray-100 animate-pulse">
            {/* Image Skeleton */}
            <div className="w-full h-full bg-gray-200" />

            {/* Content Skeleton */}
            <div className="absolute bottom-0 left-0 right-0 p-12 bg-gradient-to-t from-black/70 to-transparent">
                {/* Title Skeleton */}
                <div className="h-12 w-72 bg-gray-300 rounded-lg mb-4" />

                {/* Tags Skeleton */}
                <div className="flex gap-3">
                    <div className="h-10 w-32 bg-gray-300/30 rounded-full" />
                    <div className="h-10 w-40 bg-gray-300/30 rounded-full" />
                </div>
            </div>
        </div>
    );
};

export default WorkCardSkeleton;
