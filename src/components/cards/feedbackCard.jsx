import Image from "next/image";

const FeedbackCard = ({ feedback, name, companyName, logo }) => {
    return (
        <div className="w-full rounded-[32px] border border-white/20 p-[76px]">
            <div className="space-y-14">
                <p className="text-[38px] font-semibold leading-[58px] text-white">
                    "{feedback}"
                </p>

                <div className="flex items-center gap-6">
                    <div>
                        <Image
                            src={logo}
                            alt={name}
                            width={100}
                            height={50}
                            className="object-contain"
                        />
                    </div>
                    <div className="flex justify-between w-full items-center gap-3">
                        <span className="text-[#71777E] text-[24px]">
                            {name}
                        </span>
                        <span className="text-[#545CFF] text-[28px]">
                            {companyName}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeedbackCard;
