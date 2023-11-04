"use client";

import { SidebarRoutes } from "@/config/routes";
import React, { useEffect } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  Link,
  Input,
  Dropdown,
  DropdownTrigger,
  Avatar,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";
import { SearchIcon } from "lucide-react";
import { useAuthStore } from "@/hooks/use-auth-store";
import { useAuthenticator } from "@aws-amplify/ui-react";
import { redirect } from "next/navigation";

export default function NavbarComponent() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { user, authStatus, signOut } = useAuthenticator((context) => [
    context.route,
  ]);

  useEffect(() => {
    if (authStatus === "authenticated") {
      redirect("/");
    }
    if (authStatus === "unauthenticated") {
      redirect("/minutes");
    }
  }, []);

  const menuItems = ["Board", "Minutes", "Membership List", "Finance"];

  return (
    <div className="border-b">
      <Navbar
        className="container  px-0  "
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}
      >
        <NavbarContent className="sm:hidden" justify="start">
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          />
        </NavbarContent>

        <NavbarContent className="hidden  sm:flex" justify="start">
          <Input
            placeholder="Search Files"
            startContent={
              <SearchIcon className="text-black/50 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0" />
            }
          />
        </NavbarContent>

        <NavbarContent justify="end">
          {!user && (
            <Button
              className="  bg-secondary-500 text-white font-semibold"
              onClick={() => useAuthStore.setState({ showSignInModal: true })}
            >
              Sign in as an Admin
            </Button>
          )}

          {user && <Button onClick={() => signOut()}>Sign out</Button>}
        </NavbarContent>

        <NavbarMenu>
          {SidebarRoutes.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                className="w-full"
                color={
                  index === 2
                    ? "warning"
                    : index === SidebarRoutes.length - 1
                    ? "danger"
                    : "foreground"
                }
                size="lg"
                href={item.path}
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
          <NavbarContent className="" justify="start">
            <Input
              placeholder="Search Files"
              startContent={
                <SearchIcon className="text-black/50 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0" />
              }
            />
          </NavbarContent>
        </NavbarMenu>
      </Navbar>
    </div>
  );
}
