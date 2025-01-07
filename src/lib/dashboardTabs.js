import { IoDocumentTextOutline } from "react-icons/io5";
import { RiFeedbackLine } from "react-icons/ri";

// Function to generate a random ID
const generateRandomId = () => Math.floor(Math.random() * 100000);

export const dashboardTabs = [
    {
        id: generateRandomId(),
        path: "/dashboard",
        icon: <IoDocumentTextOutline className="h-4 w-4" />,
        linkText: "Work",
    },
    {
        id: generateRandomId(),
        path: "/dashboard/feedback",
        icon: <RiFeedbackLine className="h-4 w-4" />,
        linkText: "Feedback",
    },
];
