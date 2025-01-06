import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

const Services = () => {
    return (
        <section className="bg-black text-white px-[90px] py-36">
            <div>
                <h2 className="text-[28px] mb-12 font-light">
                    Our team of experts can help you with...
                </h2>

                {/* Services List */}
                <div className="space-y-6 mb-16">
                    {[
                        "E-commerce",
                        "Website Design",
                        "Digital Products",
                        "Brand Identities",
                    ].map((service) => (
                        <div
                            key={service}
                            className="flex justify-between items-center group cursor-pointer"
                        >
                            <h3 className="text-[68px] font-semibold leading-[94px] group-hover:text-[63px] transition-all duration-500">
                                {service}
                            </h3>

                            <Link
                                href="/"
                                className="hidden group-hover:flex items-center gap-x-8 transition-all duration-500"
                            >
                                <div className="text-left">
                                    <p className="text-sm text-gray-400">
                                        Latest Case Study
                                    </p>
                                    <p className="text-[28px] font-medium">
                                        Alveena Casa
                                    </p>
                                </div>
                                <div className="flex items-center gap-x-8">
                                    <Image
                                        src="https://d3aj5vjnhssdu4.cloudfront.net/wp-content/uploads/01_Alveena_Casa_London_Web_Design_New-250x250.jpg"
                                        alt="Alveena Casa case study preview"
                                        width={80}
                                        height={80}
                                        className="rounded-full object-cover"
                                    />
                                    <BsArrowRight className="w-16 h-16" />
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>

                <div className="h-[1px] bg-white/20 w-full my-16"></div>
            </div>

            {/* Agency Section */}
            <div className="grid grid-cols-2">
                <div>
                    <h2 className="text-[68px] leading-[95px] font-semibold bg-[linear-gradient(45deg,_rgb(84,92,255),_rgb(141,149,255)_80%)] bg-clip-text text-transparent">
                        Creative Agency
                    </h2>
                    <div className="w-full">
                        <p className="text-2xl leading-9 my-6 text-white w-2/3">
                            We're an award-winning creative agency based in
                            London, focused on E-Commerce, Web Design London,
                            Digital Products, Branding and SEO.
                        </p>
                    </div>
                </div>
                <div className="flex justify-end items-end gap-4">
                    <button className="text-2xl font-medium px-12 h-[72px] w-[244px] border border-[#545CFF] rounded-[100px] whitespace-nowrap">
                        300+ Projects
                    </button>
                    <button className="text-2xl font-medium px-12 h-[72px] w-[244px] border border-[#545CFF] rounded-[100px] whitespace-nowrap">
                        15 Awards
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Services;
