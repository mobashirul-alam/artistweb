import Footer from "@/components/footer/footer";
import Navbar from "@/components/navbar/navbar";
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
                <Navbar />
                <EdgeStoreProvider>{children}</EdgeStoreProvider>
                <Footer />
                <Toaster richColors />
            </body>
        </html>
    );
}
