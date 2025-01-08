import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { FaPlus } from "react-icons/fa6";
import WorkDataTable from "./workDataTable";

const WorkDashboard = () => {
    return (
        <div>
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-[30px] font-semibold">Work</h2>
                    <p className="text-sm mb-1">Manage all works</p>
                </div>
                <Link href={"/dashboard/work/new"}>
                    <Button
                        className={cn("text-sm border rounded-md px-3 py-2")}
                    >
                        <FaPlus className="h-12 w-12 text-4xl" />
                        Add New
                    </Button>
                </Link>
            </div>
            <Separator className="mb-4" />
            <WorkDataTable />
        </div>
    );
};

export default WorkDashboard;
