import Image from "next/image";

const Partners = () => {
    const partners = [
        { name: "Deezer", logo: "/logo/deezer.png" },
        { name: "BBC", logo: "/logo/bbc.png" },
        { name: "Richemont", logo: "/logo/richemont.png" },
        { name: "Ferrari", logo: "/logo/ferrari.png" },
        { name: "ITV", logo: "/logo/itv.png" },
    ];

    return (
        <section className="py-36 px-[90px]">
            <div className="space-y-36">
                <h2 className="text-[68px] font-semibold leading-[94px] max-w-6xl">
                    From ambitious startups to global companies, we partner with
                    great businesses and industry leaders.
                </h2>

                <div className="flex justify-between items-center">
                    {partners.map((partner) => (
                        <div key={partner.name}>
                            <Image
                                src={partner.logo}
                                alt={`${partner.name} logo`}
                                width={240}
                                height={80}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Partners;
