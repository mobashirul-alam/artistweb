import Banner from "@/components/banner/banner";
import ClientFeedback from "@/components/clientFeedback/clientFeedback";
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
            <ClientFeedback />
        </main>
    );
}
