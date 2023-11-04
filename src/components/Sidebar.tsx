// Sidebar component
import { useState } from "react";
import Link from "next/link";
import { IRoute } from "@/config/routes";
import { usePathname } from "next/navigation";

const Sidebar = ({ routes }: { routes: IRoute[] }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();

  return (
    <section className="space-y-4 border h-screen hide overflow-y-scroll py-5 md:w-3/12 absolute sm:relative z-50 hidden bg-white md:flex flex-col lg:w-2/12 text-slate-500">
      <div className="px-8 flex items-center justify-center font-bold pb-8 pt-2">
        Sthlm-East
      </div>
      <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
        <ul className="flex flex-col gap-2 text-sm font-semibold">
          {routes.map((route, index) => {
            const isActive = pathname === route.path;
            return (
              <Link
                href={route.path}
                key={index}
                className={
                  isActive
                    ? " flex items-center gap-3 py-2 px-6 border-l-secondaryMain-500 border-l-[.4rem] text-secondaryMain-500 font-bold"
                    : "hover:bg-secondaryMain-100/90 flex items-center gap-3 py-2 px-6"
                }
              >
                <li className="flex items-center gap-3 py-2 ">
                  {route.icon && (
                    <span className="w-8 h-8 ">
                      {isActive
                        ? route.icon({ color: "#f6c705" })
                        : route.icon({})}
                    </span>
                  )}
                  <span>{route.label}</span>
                </li>
              </Link>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Sidebar;
