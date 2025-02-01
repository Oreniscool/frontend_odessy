"use client";
import React from "react";
import { ProgressTracker } from "@/components/Progress-tracker";
import { CalendarView } from "@/components/Calendar-view";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

import { Search, Activity, Play, Trophy, Flame } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

const activityData = [
  { day: "Su", hours: 2 },
  { day: "Mo", hours: 4 },
  { day: "Tu", hours: 1.5 },
  { day: "We", hours: 6 },
  { day: "Th", hours: 3 },
  { day: "Fr", hours: 4 },
  { day: "Sa", hours: 2 },
];

const virtualSessions = [
  {
    id: 1,
    title: "Morning Yoga Flow",
    time: "08:00 AM",
    instructor: "Sarah Chen",
    participants: 24,
    level: "Beginner",
    duration: "45 min",
  },
  {
    id: 2,
    title: "HIIT Cardio Blast",
    time: "12:00 PM",
    instructor: "Mike Ross",
    participants: 18,
    level: "Intermediate",
    duration: "30 min",
  },
  {
    id: 3,
    title: "Evening Meditation",
    time: "07:00 PM",
    instructor: "Emma Wilson",
    participants: 32,
    level: "All Levels",
    duration: "20 min",
  },
];

const recommendations = [
  {
    title: "Try Mindfulness",
    description: "Based on your stress levels",
    icon: "🧘‍♀️",
    color: "bg-purple-100",
  },
  {
    title: "Increase Water Intake",
    description: "You're below your daily goal",
    icon: "💧",
    color: "bg-blue-100",
  },
  {
    title: "Time for Cardio",
    description: "Meet your heart rate goals",
    icon: "🏃‍♂️",
    color: "bg-red-100",
  },
];
const data = {
  labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
  datasets: [
    {
      label: "Hours",
      data: [5, 7, 8, 6, 7],
      backgroundColor: "#DFFE00",
      borderRadius: 5,
    },
  ],
};

const LoggedInDashboard = ({ session }) => {
  return (
    <>
      <div className="p-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl font-bold">
              Welcome back, {session?.user?.name} {} 👋
            </h1>
            <p className="text-gray-500">Track your wellness journey</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <input
                type="text"
                placeholder="Search programs"
                className="pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#DFFE00]"
              />
            </div>
            <Avatar>
              <AvatarImage src={session?.user?.image} />
            </Avatar>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Stats Cards */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Daily Activity
              </CardTitle>
              <Activity className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">5.2 hrs</div>
              <Progress value={65} className="mt-2" />
              <p className="text-xs text-muted-foreground mt-2">
                +20% from last week
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Calories Burned
              </CardTitle>
              <Flame className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">756 kcal</div>
              <Progress value={82} className="mt-2" />
              <p className="text-xs text-muted-foreground mt-2">
                Daily goal: 850 kcal
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Weekly Goals
              </CardTitle>
              <Trophy className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">4/6</div>
              <Progress value={66} className="mt-2" />
              <p className="text-xs text-muted-foreground mt-2">
                2 goals remaining
              </p>
            </CardContent>
          </Card>

          {/* Progress Tracker and Calendar */}
          <div className="lg:col-span-2">
            <ProgressTracker />
          </div>
          <div className="lg:col-span-1">
            <CalendarView />
          </div>

          {/* Activity Chart */}
          <Card className="col-span-full lg:col-span-2">
            <CardHeader>
              <CardTitle>Activity Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <Bar data={data} />
              </div>
            </CardContent>
          </Card>

          {/* Recommendations */}
          <Card className="lg:col-span-1">
            <CardHeader>
              <CardTitle>Personalized Tips</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recommendations.map((item) => (
                  <div
                    key={item.title}
                    className="flex items-center gap-4 p-3 rounded-lg border hover:border-[#DFFE00] cursor-pointer"
                  >
                    <div
                      className={`${item.color} w-10 h-10 rounded-lg flex items-center justify-center text-2xl`}
                    >
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-medium">{item.title}</h3>
                      <p className="text-sm text-gray-500">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Virtual Sessions */}
          <Card className="col-span-full">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Upcoming Virtual Sessions</CardTitle>
              <Button variant="outline" size="sm">
                View All
              </Button>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {virtualSessions.map((session) => (
                  <div
                    key={session.id}
                    className="p-4 rounded-lg border hover:border-[#DFFE00] cursor-pointer"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm font-medium text-gray-500">
                        {session.time}
                      </span>
                      <span className="px-2 py-1 rounded-full bg-[#DFFE00] text-xs font-medium">
                        {session.level}
                      </span>
                    </div>
                    <h3 className="font-medium mb-2">{session.title}</h3>
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                      <span>{session.duration}</span>
                      <span>•</span>
                      <span>{session.participants} joined</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Avatar className="h-6 w-6">
                          <AvatarImage src="/placeholder.svg" />
                          <AvatarFallback>
                            {session.instructor[0]}
                          </AvatarFallback>
                        </Avatar>
                        <span className="text-sm">{session.instructor}</span>
                      </div>
                      <Button
                        size="sm"
                        className="bg-[#DFFE00] hover:bg-[#DFFE00]/90"
                      >
                        <Play className="h-4 w-4 mr-1" /> Join
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default LoggedInDashboard;
