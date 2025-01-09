import Image from "next/image";

const WorkCard = ({ image, title, tags, isLatest }) => {
    return (
        <div className="min-w-[828px] h-[712px] relative rounded-3xl overflow-hidden border-4 border-transparent hover:border-[#545CFF] transition-all duration-1000 group cursor-pointer">
            {isLatest && (
                <div className="absolute top-12 right-12 bg-[#545CFF] text-white px-6 py-2 rounded-full text-base font-medium z-10">
                    Latest
                </div>
            )}
            <div className="relative w-full h-full">
                <Image
                    src={image}
                    alt={`${title} interface`}
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute bottom-0 left-0 right-0 p-12 bg-gradient-to-t from-black/70 to-transparent">
                    <h2 className="text-white text-4xl font-semibold mb-4">
                        {title}
                    </h2>
                    <div className="flex flex-wrap gap-3">
                        {tags.map((tag, index) => (
                            <span
                                key={index}
                                className="bg-black/30 text-white text-base font-medium px-6 py-2 rounded-[100px] backdrop-blur-sm whitespace-nowrap border border-[#71777e]"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WorkCard;
