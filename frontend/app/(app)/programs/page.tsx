"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { Play, Timer, Users, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";

const progressData = [
  {
    title: "Weekly Goal",
    current: 4,
    total: 6,
    percentage: 66,
    icon: Trophy,
  },
  {
    title: "Active Days",
    current: 5,
    total: 7,
    percentage: 71,
    icon: Timer,
  },
  {
    title: "Community Rank",
    current: 15,
    total: 100,
    percentage: 85,
    icon: Users,
  },
];

const weeklyComparisonData = [
  { day: "Mon", you: 65, friendAvg: 45 },
  { day: "Tue", you: 72, friendAvg: 56 },
  { day: "Wed", you: 68, friendAvg: 51 },
  { day: "Thu", you: 85, friendAvg: 60 },
  { day: "Fri", you: 75, friendAvg: 55 },
  { day: "Sat", you: 90, friendAvg: 62 },
  { day: "Sun", you: 78, friendAvg: 58 },
];

const programs = {
  yoga: [
    {
      title: "Morning Flow Yoga",
      instructor: "Sarah Chen",
      level: "Beginner",
      duration: "30 min",
      enrolled: 1234,
      progress: 45,
      image: "/placeholder.svg",
    },
    {
      title: "Power Yoga",
      instructor: "Mike Ross",
      level: "Intermediate",
      duration: "45 min",
      enrolled: 892,
      progress: 60,
      image: "/placeholder.svg",
    },
  ],
  gym: [
    {
      title: "Full Body HIIT",
      instructor: "John Smith",
      level: "Advanced",
      duration: "40 min",
      enrolled: 1567,
      progress: 30,
      image: "/placeholder.svg",
    },
    {
      title: "Strength Training",
      instructor: "Emma Wilson",
      level: "Intermediate",
      duration: "50 min",
      enrolled: 1123,
      progress: 75,
      image: "/placeholder.svg",
    },
  ],
  meditation: [
    {
      title: "Mindful Meditation",
      instructor: "David Kumar",
      level: "All Levels",
      duration: "20 min",
      enrolled: 2341,
      progress: 90,
      image: "/placeholder.svg",
    },
    {
      title: "Sleep Meditation",
      instructor: "Lisa Chen",
      level: "Beginner",
      duration: "15 min",
      enrolled: 1789,
      progress: 25,
      image: "/placeholder.svg",
    },
  ],
};

export default function Programs() {
  return (
    <div className="min-h-screen bg-[#F8F9FB] pl-72">
      <div className="p-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl font-bold">My Programs</h1>
            <p className="text-gray-500">
              Track your progress and discover new programs
            </p>
          </div>
          <Button className="bg-[#DFFE00] text-black hover:bg-[#DFFE00]/90">
            Browse All Programs
          </Button>
        </div>

        {/* Progress Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {progressData.map((item) => (
            <Card key={item.title}>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">
                  {item.title}
                </CardTitle>
                <item.icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {item.current}/{item.total}
                </div>
                <Progress value={item.percentage} className="mt-2" />
                <p className="text-xs text-muted-foreground mt-2">
                  {item.percentage}% completed
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Weekly Comparison Chart */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Weekly Activity Comparison</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={weeklyComparisonData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="day" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="you"
                    stroke="#DFFE00"
                    strokeWidth={2}
                    name="Your Activity"
                  />
                  <Line
                    type="monotone"
                    dataKey="friendAvg"
                    stroke="#94A3B8"
                    strokeWidth={2}
                    name="Friends Average"
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Programs Tabs */}
        <Tabs defaultValue="yoga" className="space-y-6">
          <TabsList className="bg-white">
            <TabsTrigger value="yoga">Yoga</TabsTrigger>
            <TabsTrigger value="gym">Gym</TabsTrigger>
            <TabsTrigger value="meditation">Meditation</TabsTrigger>
          </TabsList>

          {Object.entries(programs).map(([category, items]) => (
            <TabsContent key={category} value={category}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {items.map((program) => (
                  <Card key={program.title} className="overflow-hidden">
                    <div className="aspect-video relative">
                      <Image
                        src={program.image || "/placeholder.svg"}
                        alt={program.title}
                        width={6}
                        height={6}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/20" />
                      <Button
                        className="absolute bottom-4 right-4 bg-[#DFFE00] text-black hover:bg-[#DFFE00]/90"
                        size="sm"
                      >
                        <Play className="h-4 w-4 mr-2" /> Continue
                      </Button>
                    </div>
                    <CardContent className="pt-4">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="font-semibold text-lg">
                            {program.title}
                          </h3>
                          <div className="flex items-center gap-2 mt-1">
                            <Avatar className="h-6 w-6">
                              <AvatarImage src="/placeholder.svg" />
                              <AvatarFallback>
                                {program.instructor[0]}
                              </AvatarFallback>
                            </Avatar>
                            <span className="text-sm text-gray-500">
                              {program.instructor}
                            </span>
                          </div>
                        </div>
                        <span className="px-2 py-1 rounded-full bg-[#DFFE00] text-xs font-medium">
                          {program.level}
                        </span>
                      </div>
                      <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
                        <span>{program.duration}</span>
                        <span>
                          {program.enrolled.toLocaleString()} enrolled
                        </span>
                      </div>
                      <Progress value={program.progress} className="mt-2" />
                      <p className="text-xs text-gray-500 mt-2">
                        {program.progress}% completed
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
}
