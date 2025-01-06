import Banner from "@/components/banner/banner";
import DigitalPartner from "@/components/digitalPartner/digitalPartner";
import ElevateLine from "@/components/elevate/elevateLine";
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
