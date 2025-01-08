import AuthCheck from "./(components)/authCheck";
import DashboardSideBar from "./(components)/dashboardSideBar";

export const metadata = {
    title: "Dashboard | Artistweb",
    description: "Dashboard for Artistweb admin",
};

const DashboardLayout = ({ children }) => {
    return (
        <>
            <AuthCheck />
            <div className="max-w-5xl mx-auto min-h-screen grid grid-cols-6 mt-40">
                <div className="col-span-1 mt-6">
                    <DashboardSideBar />
                </div>
                <div className="col-span-5 p-6">{children}</div>
            </div>
        </>
    );
};

export default DashboardLayout;
