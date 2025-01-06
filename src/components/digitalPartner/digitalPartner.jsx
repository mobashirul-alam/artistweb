import Image from "next/image";

const DigitalPartner = () => {
    const brands = [
        { name: "BBC", logo: "/images/BBC-Logo-07.png" },
        { name: "BMW", logo: "/images/bmw-png.png" },
        { name: "Costa", logo: "/images/BBC-Logo-07.png" },
    ];

    return (
        <section>
            <section className="px-[90px] py-36 grid grid-cols-2">
                <div className="space-y-40">
                    <div className="space-y-6">
                        <h2 className="text-[68px] font-semibold">
                            Your Digital Partner
                        </h2>

                        <p className="text-[28px] max-w-2xl">
                            We partner with companies of all sizes to solve
                            complex business challenges and define their digital
                            strategies and objectives that deliver results. We
                            help bring ideas to life and create brands, websites
                            & digital products that work.
                        </p>
                    </div>

                    <div className="flex items-center gap-6">
                        <div className="flex -space-x-8">
                            {brands.map((brand) => (
                                <div
                                    key={brand.name}
                                    className="w-[70px] h-[70px] rounded-full border border-white bg-black"
                                >
                                    <Image
                                        src={brand.logo}
                                        alt={`${brand.name} logo`}
                                        width={70}
                                        height={70}
                                        className="w-full h-full object-contain rounded-full"
                                    />
                                </div>
                            ))}
                        </div>
                        <p className="text-[#71777E] text-2xl">
                            Brands who've trusted us...
                        </p>
                    </div>
                </div>
                <div className="flex justify-end items-end">
                    <div className="bg-[#ECF1F4] rounded-3xl p-16">
                        <div className="grid md:grid-cols-2 divide-x divide-[#72777e59]">
                            <div className="text-center p-10">
                                <p className="text-[68px] font-semibold mb-2">
                                    20
                                </p>
                                <p className="text-[28px] text-black">
                                    Years on the market
                                </p>
                            </div>
                            <div className="text-center p-10">
                                <p className="text-[68px] font-semibold mb-2">
                                    500
                                </p>
                                <p className="text-[28px] text-black">
                                    Satisfied Customers
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="px-[90px]">
                <Image
                    src="/images/team-a.jpg"
                    alt="team"
                    width={1920}
                    height={982}
                    className="w-full h-[982px] object-cover rounded-[40px]"
                />
            </section>
        </section>
    );
};

export default DigitalPartner;
