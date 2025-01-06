import FeedbackCard from "../cards/feedbackCard";

const ClientFeedback = () => {
    return (
        <div className="bg-[#111111]">
            <div className="bg-[radial-gradient(circle_at_-30%_21%,_rgb(84,92,255)_0px,_rgba(0,0,0,0)_30%),_radial-gradient(circle_at_120%_80%,_rgb(84,92,255)_0px,_rgba(0,0,0,0)_30%)]">
                <div className="py-36 max-w-[1380px] mx-auto text-white">
                    <h2 className="text-[68px] font-semibold leading-[94px] mb-12">
                        Client Feedback
                    </h2>
                    <p className="text-[28px]">
                        We're collaborators - We build tight-knit partnerships
                        with our clients.
                    </p>

                    <div className="space-y-16 mt-16">
                        {[1, 2, 3, 4, 5].map((feedback) => (
                            <FeedbackCard key={feedback} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClientFeedback;
