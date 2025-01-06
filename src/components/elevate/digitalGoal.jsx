const DigitalGoal = () => {
    return (
        <section className="px-[90px] py-36">
            <div className="grid grid-cols-2">
                <div className="space-y-32">
                    <h2 className="text-[68px] font-semibold leading-[94px] ">
                        Let our experienced team elevate your digital goals
                    </h2>

                    <div className="flex items-start gap-x-16">
                        <div>
                            <p className="text-[68px] font-semibold mb-2">
                                250
                            </p>
                            <p className="text-[28px]">Five-Star Reviews</p>
                        </div>
                        <div>
                            <p className="text-[68px] font-semibold mb-2">10</p>
                            <p className="text-[28px]">In-House Experts</p>
                        </div>
                    </div>
                </div>

                <div className="flex justify-end items-end">
                    <p className="text-[28px] ml-40">
                        We have successfully completed over 300+ projects from a
                        variety of industries. In our team, designers work
                        alongside developers and digital strategists, we believe
                        this is our winning recipe for creating digital products
                        that make an impact.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default DigitalGoal;
