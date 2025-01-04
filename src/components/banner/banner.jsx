const Banner = () => {
    return (
        <div>
            <main className="mx-[90px] px-4 mt-[240px] mb-[144px]">
                <h1 className="text-[148px] font-semibold leading-[172px] max-w-6xl">
                    Crafting <span className="text-[#4F5FF6]">Digital</span>
                    <br />
                    Experiences
                </h1>

                <div className="mt-20 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
                    <div className="flex items-center gap-4">
                        <div className="bg-black text-white rounded-full w-16 h-16 flex items-center justify-center text-xl">
                            20
                        </div>
                        <span className="text-gray-600">
                            Years on the market
                        </span>
                    </div>
                    <div className="flex gap-4">
                        <p className="text-xl md:text-2xl max-w-2xl">
                            We build engaging websites, brands & innovative
                            e-commerce solutions.
                        </p>

                        <button className="px-8 py-4 bg-[#4F5FF6] text-white rounded-full hover:bg-[#4052e3] transition-colors">
                            Case Studies
                        </button>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Banner;
