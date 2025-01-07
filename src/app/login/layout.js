export const metadata = {
    title: "Login | Artistweb",
    description: "Login to your Artistweb admin account",
};

export default function LoginLayout({ children }) {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            {children}
        </div>
    );
}
