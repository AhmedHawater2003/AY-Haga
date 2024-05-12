import PendingDonor from "../components/Admin/PendingDonor";
import PendingOrg from "../components/Admin/PendingOrg";
import { PendingOrgData } from "./PendingOrgData";
import { PendingDonorData } from "./PendingDonorData";


const AdminNotificationData =[
    {
        id: 1,
        priority: "Warning",
        color: "yellow",
        type: "request",
        title: "New organization request",
        date: "2021-09-01",
        user: "Resala",
        content: <PendingOrg userData={PendingOrgData.filter
            (user => user.title === "Resala")}/>
    },
    {
        id: 2,
        priority: "Warning",
        color: "yellow",
        type: "request",
        title: "New Pro-Bono Doctor Request",
        date: "2021-09-01",
        user: "Dr. John Doe",
        content: <PendingDonor userData={PendingDonorData.filter
            (user => user.title === "Dr. John Doe")
        }/>
    },
    {
        id: 3,
        priority: "Urgent",
        color: "red",
        type: "request",
        title: "New Pro-Bono Teacher Request",
        date: "2021-09-01",
        user: "Mrs. Jane Smith",
        content: <PendingDonor userData={PendingDonorData.filter
            (user => user.title === "Jane Smith")
        }/>
    },
    {
        id: 4,
        priority: "Urgent",
        color: "red",
        type: "request",
        title: "New Organization Request",
        date: "2021-09-01",
        user: "Orman",
        content: <PendingOrg userData={PendingOrgData.filter
            (user => user.title === "Orman")}/>
    },
];

export default AdminNotificationData