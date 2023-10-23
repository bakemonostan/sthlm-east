"use client";
import Sidebar from "@/components/Sidebar";
import { SidebarRoutes } from "@/config/routes";

type Props = {};
export default function SidebarProvider({}: Props) {
  return <Sidebar routes={SidebarRoutes} />;
}
