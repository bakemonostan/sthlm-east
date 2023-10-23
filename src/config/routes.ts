import {
  BoardIcon,
  FinanceIcon,
  MeetingsIcon,
  MemberShipListIcon,
  MembershipInformationIcon,
  MinutesIcon,
  ScheduleIcon,
  SongIcon,
  WorkingGroupIcon,
} from "@/components/icons";
import React from "react";

// routes.ts
interface IRoute {
  path: string;
  label: string;
  // icon? should be a react component
  icon?: ({}) => JSX.Element | undefined;
  children?: IRoute[];
}

const SidebarRoutes: IRoute[] = [
  {
    path: "/",
    label: "The Board",
    icon: BoardIcon,
  },
  {
    path: "/minutes",
    label: "Minutes",
    icon: MinutesIcon,
  },
  {
    path: "/membership-list",
    label: "Membership List",
    icon: MemberShipListIcon,
  },
  {
    path: "/finance",
    label: "Finance",
    icon: FinanceIcon,
  },
  {
    path: "/working-groups",
    label: "Working Groups",
    icon: WorkingGroupIcon,
  },
  {
    path: "/meetings",
    label: "Meetings",
    icon: MeetingsIcon,
  },
  {
    path: "/songs",
    label: "Songs",
    icon: SongIcon,
  },
  {
    path: "/membership-information",
    label: "Membership Information",
    icon: MembershipInformationIcon,
  },
  {
    path: "/schedule",
    label: "Schedule",
    icon: ScheduleIcon,
  },
];

export { SidebarRoutes };
export type { IRoute };
