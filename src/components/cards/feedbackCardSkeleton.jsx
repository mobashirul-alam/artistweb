const FeedbackCardSkeleton = () => {
    return (
        <div className="w-full rounded-[32px] border border-white/20 p-[76px] animate-pulse">
            <div className="space-y-14">
                <div className="space-y-4">
                    <div className="h-[58px] bg-white/10 rounded-lg w-[90%]" />
                    <div className="h-[58px] bg-white/10 rounded-lg w-[75%]" />
                </div>

                <div className="flex items-center gap-6">
                    <div className="w-20 h-20 rounded-full bg-white/10" />
                    <div className="flex justify-between w-full items-center gap-3">
                        <div className="h-8 bg-white/10 rounded-lg w-40" />
                        <div className="h-8 bg-[#545CFF]/20 rounded-lg w-48" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeedbackCardSkeleton;
