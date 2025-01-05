const WorkCard = () => {
    return (
        <div className="min-w-[828px] h-[662px] relative rounded-3xl overflow-hidden border-4 border-transparent hover:border-[#545CFF] transition-all duration-1000 group">
            <div className="absolute top-12 right-12 bg-[#545CFF] text-white px-4 py-1 rounded-full text-sm z-10">
                Latest
            </div>
            <div>
                <img
                    src="https://d3aj5vjnhssdu4.cloudfront.net/wp-content/uploads/01_Estate-Agency-Web-Design-London.jpg"
                    alt="Romans & Partners property portal interface"
                    className="w-full h-auto"
                />
                <div className="absolute bottom-0 left-0 right-0 p-12 bg-gradient-to-t from-black/70 to-transparent">
                    <h2 className="text-white text-4xl font-semibold mb-4">
                        Romans & Partners
                    </h2>
                    <div className="flex gap-3">
                        <span className="bg-black/30 text-white px-4 py-2 rounded-full backdrop-blur-sm">
                            UI/UX Design
                        </span>
                        <span className="bg-black/30 text-white px-4 py-2 rounded-full backdrop-blur-sm">
                            Property Portal
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WorkCard;
