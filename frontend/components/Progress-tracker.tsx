"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowUp, ArrowDown, MoreHorizontal } from "lucide-react";
import Image from "next/image";

interface ActivityItem {
  icon: string;
  title: string;
  value: string;
  type: string;
  trend?: "up" | "down";
  trendValue?: string;
}

const activities: ActivityItem[] = [
  {
    icon: "⏱️",
    title: "Workout",
    value: "0.5h45s",
    type: "Time",
  },
  {
    icon: "🍎",
    title: "Apple",
    value: "1/2",
    type: "Fruit Juice",
  },
  {
    icon: "🏃",
    title: "Running",
    value: "4.596m",
    type: "Distance",
    trend: "up",
    trendValue: "139",
  },
  {
    icon: "💧",
    title: "Water",
    value: "3,000ml",
    type: "Intake",
    trend: "up",
    trendValue: "More",
  },
];

export function ProgressTracker() {
  return (
    <Card className="bg-white shadow-lg">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
        <CardTitle className="text-xl font-bold">Progress</CardTitle>
        <MoreHorizontal className="h-5 w-5 text-gray-400" />
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Running Score Card */}
        <div className="rounded-xl bg-gradient-to-br from-[#DFFE00] to-[#E2FE8C] p-4">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Running</p>
              <h3 className="text-4xl font-bold mt-1">139</h3>
            </div>
            <div className="h-16 w-16 relative rounded-lg overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-01%20105711-GDRSyDnGutiAkX2fG1e1NiF86rF848.png"
                alt="Activity"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
          <div className="mt-4 flex gap-2">
            <span className="inline-flex items-center rounded-full bg-white/20 px-2 py-1 text-xs">
              Running
            </span>
            <span className="inline-flex items-center rounded-full bg-white/20 px-2 py-1 text-xs">
              Sport
            </span>
            <span className="inline-flex items-center rounded-full bg-white/20 px-2 py-1 text-xs">
              Checking Daily
            </span>
          </div>
        </div>

        {/* Activity List */}
        <div className="space-y-4">
          {activities.map((activity, index) => (
            <div
              key={index}
              className="flex items-center justify-between py-2 border-b last:border-0"
            >
              <div className="flex items-center gap-3">
                <span className="text-xl">{activity.icon}</span>
                <div>
                  <p className="font-medium">{activity.value}</p>
                  <p className="text-sm text-gray-500">{activity.type}</p>
                </div>
              </div>
              {activity.trend && (
                <div className="flex items-center gap-2">
                  <span
                    className={`inline-flex items-center rounded-full px-2 py-1 text-xs ${
                      activity.trend === "up" ? "bg-[#DFFE00]" : "bg-red-100"
                    }`}
                  >
                    {activity.trend === "up" ? (
                      <ArrowUp className="h-3 w-3 mr-1" />
                    ) : (
                      <ArrowDown className="h-3 w-3 mr-1" />
                    )}
                    {activity.trendValue}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
