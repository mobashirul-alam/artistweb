import Banner from "@/components/banner/banner";
import Crafting from "@/components/crafting/crafting";
import DigitalPartner from "@/components/digitalPartner/digitalPartner";
import DigitalGoal from "@/components/elevate/digitalGoal";
import ElevateLine from "@/components/elevate/elevateLine";
import OurService from "@/components/ourService/ourService";
import Partners from "@/components/partners/partners";
import Services from "@/components/services/services";
import Work from "@/components/work/work";

export default function Home() {
    return (
        <main>
            <Banner />
            <Work />
            <Services />
            <DigitalPartner />
            <Partners />
            <ElevateLine />
            <DigitalGoal />
            <Crafting />
            <OurService />
            <div className="h-screen flex items-center justify-center bg-cyan-500">
                <p className="text-white font-bold text-9xl text-center">
                    Welcome
                </p>
            </div>
            <div className="h-screen flex items-center justify-center bg-green-500">
                <p className="text-white font-bold text-9xl text-center">
                    Bangladesh
                </p>
            </div>
        </main>
    );
}
