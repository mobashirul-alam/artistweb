const Crafting = () => {
    return (
        <section
            className="w-full h-[70vh] flex items-center bg-no-repeat bg-cover bg-center"
            style={{
                backgroundImage: `url('/images/crafting-bg.svg')`,
            }}
        >
            {/* Content */}
            <div className="py-36 max-w-3xl mx-auto">
                <h1 className="text-[108px] font-semibold leading-[123px]">
                    Crafting digital{" "}
                    <span className=" pl-36 bg-[linear-gradient(45deg,_rgb(84,92,255),_rgb(31,34,70)_80%)] bg-clip-text text-transparent">
                        experiences
                    </span>{" "}
                    since 2004
                </h1>
            </div>
        </section>
    );
};

export default Crafting;
