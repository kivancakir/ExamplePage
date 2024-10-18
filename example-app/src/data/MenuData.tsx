import { MenuTypes } from "../types/Types";
import DashboardIcon from '../assets/menu-icons/dashboard.png'
import ScheduleIcon from '../assets/menu-icons/schedule.png'
import TimeOffIcon from '../assets/menu-icons/timeoff.png'
import AttendanceIcon from '../assets/menu-icons/attendance.png'
import PayrollIcon from '../assets/menu-icons/payroll.png'
import RequestsIcon from '../assets/menu-icons/requests.png'
import TeamIcon from '../assets/menu-icons/team.png'
import StatisticsIcon from '../assets/menu-icons/statistics.png'
import SettingsIcon from '../assets/menu-icons/settings.png'


export const menuItem: MenuTypes[] = [
    {
        id: 1,
        name: "Dashboard",
        icon: DashboardIcon
    },
    {
        id: 2,
        name: "Schedule",
        icon: ScheduleIcon
    },
    {
        id: 3,
        name: "Time Off",
        icon: TimeOffIcon
    },
    {
        id: 4,
        name: "Attendance",
        icon: AttendanceIcon
    },
    {
        id: 5,
        name: "Payroll",
        icon: PayrollIcon
    },
    {
        id: 6,
        name: "Requests",
        icon: RequestsIcon
    },
    {
        id: 7,
        name: "Team",
        icon: TeamIcon
    },
    {
        id: 8,
        name: "",
        icon: StatisticsIcon
    },
    {
        id: 9,
        name: "Settings",
        icon: SettingsIcon
    },

]