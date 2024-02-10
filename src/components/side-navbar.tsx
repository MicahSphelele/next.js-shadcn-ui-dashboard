"use client";

import React, { useState } from "react";

import {
  ChevronRight,
  LayoutDashboard,
  Settings,
  ShoppingCart,
  UsersRound,
} from "lucide-react";

import { Nav } from "./ui/nav";
import { TooltipProvider } from "@radix-ui/react-tooltip";
import { Button } from "./ui/button";

type Props = {};

export const SideNavbar = ({}: Props) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <TooltipProvider>
      <div className="relative min-w-[80px] border-r px-3 pb-3 pt-24">
        <div className="absolute right-[-20px] top-7">
          <Button variant="secondary" className="rounded-full p-2" onClick={() => setIsCollapsed(!isCollapsed)}>
            <ChevronRight />
          </Button>
        </div>

        <Nav
          isCollapsed={isCollapsed}
          links={[
            {
              title: "Dashboard",
              icon: LayoutDashboard,
              variant: "default",
              href: "/",
            },
            {
              title: "Users",
              icon: UsersRound,
              variant: "ghost",
              href: "/users",
            },
            {
              title: "Orders",
              icon: ShoppingCart,
              variant: "ghost",
              href: "/orders",
            },
            {
              title: "Settings",
              icon: Settings,
              variant: "ghost",
              href: "/settings",
            },
          ]}
        />
      </div>
    </TooltipProvider>
  );
};
