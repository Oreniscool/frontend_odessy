"use client";

import {
  LayoutGrid,
  Activity,
  Users,
  MessageSquare,
  Bell,
  Calendar,
  Users2,
  Settings,
} from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Image from "next/image";
const navigation = [
  { name: "Dashboard", href: "/", icon: LayoutGrid, current: true },
  { name: "My Programs", href: "/programs", icon: Activity, current: false },
  { name: "Community", href: "/community", icon: Users, current: false },
  { name: "Messages", href: "/messages", icon: MessageSquare, current: false },
  {
    name: "Notifications",
    href: "/notifications",
    icon: Bell,
    current: false,
    badge: 3,
  },
  ,
  { name: "Live Sessions", href: "/live", icon: Users2, current: false },
  { name: "Settings", href: "/settings", icon: Settings, current: false },
];

export default function Sidebar() {
  return (
    <div className="fixed inset-y-0 left-0 z-50 w-72 transform transition-transform duration-200 ease-in-out">
      <div className="flex h-full flex-col gap-y-5 overflow-y-auto bg-[#1C1D2C] px-6 pb-4 shadow-xl ring-1 ring-white/10">
        <div className="flex h-16 shrink-0 items-center">
          <Image
            className="h-8 w-auto"
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Template-gfSerHeXl2C6G7s6Y34JxU0SojHetN.png"
            alt="HealthTrack"
            width={6}
            height={6}
          />
        </div>
        <nav className="flex flex-1 flex-col">
          <ul role="list" className="flex flex-1 flex-col gap-y-7">
            <li>
              <ul role="list" className="-mx-2 space-y-1">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className={cn(
                        item.current
                          ? "bg-[#DFFE00] text-gray-900"
                          : "text-gray-400 hover:text-white hover:bg-gray-800",
                        "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                      )}
                    >
                      <item.icon className="h-6 w-6 shrink-0" />
                      {item.name}
                      {item.badge && (
                        <span className="ml-auto w-5 h-5 rounded-full bg-red-500 text-white text-xs flex items-center justify-center">
                          {item.badge}
                        </span>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
            <li className="-mx-6 mt-auto">
              <div className="bg-[#DFFE00] mx-4 p-4 rounded-xl">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-semibold">Go Premium</h3>
                    <p className="text-xs">Access all features!</p>
                  </div>
                  <Button variant="secondary" size="sm">
                    Upgrade
                  </Button>
                </div>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
