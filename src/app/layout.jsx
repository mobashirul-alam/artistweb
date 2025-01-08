import Footer from "@/components/footer/footer";
import Navbar from "@/components/navbar/navbar";
import LoadingOverlay from "@/components/ui/loading-overlay";
import TopProgress from "@/components/ui/topProgress";
import { LoadingProvider } from "@/context/loading-context";
import ScrollContext from "@/context/scroll-context";
import { EdgeStoreProvider } from "@/lib/edgestore";
import { Onest } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";

const onest = Onest({
    subsets: ["latin"],
});

export const metadata = {
    title: "London Web Design | Artistweb | Digital Agency UK Web Design London",
    description:
        "Expert web design services from Artistweb, a top digital agency in London. We create responsive, impactful websites to enhance your online presence and drive business growth.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`${onest.className} antialiased`}>
                <ScrollContext>
                    <LoadingProvider>
                        <LoadingOverlay />
                        <TopProgress />
                        <Navbar />
                        <EdgeStoreProvider>{children}</EdgeStoreProvider>
                        <Footer />
                        <Toaster richColors />
                    </LoadingProvider>
                </ScrollContext>
            </body>
        </html>
    );
}
