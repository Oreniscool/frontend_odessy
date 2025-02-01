"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

export function CalendarView() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  // Example workout days
  const workoutDays = [
    new Date(2024, 1, 1),
    new Date(2024, 1, 3),
    new Date(2024, 1, 5),
    new Date(2024, 1, 8),
    new Date(2024, 1, 10),
  ];

  return (
    <Card className="bg-white shadow-lg">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl font-bold">Calendar</CardTitle>
          <div className="flex gap-2">
            <Badge variant="outline" className="bg-[#DFFE00]">
              Workout
            </Badge>
            <Badge variant="outline" className="bg-gray-100">
              Rest
            </Badge>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-md border"
          modifiers={{
            workout: workoutDays,
          }}
          modifiersStyles={{
            workout: {
              backgroundColor: "#DFFE00",
              color: "black",
              fontWeight: "bold",
            },
          }}
        />

        {date && (
          <div className="mt-4">
            <h3 className="font-medium mb-2">
              Schedule for {date.toLocaleDateString()}
            </h3>
            <div className="space-y-2">
              <div className="flex items-center justify-between p-2 rounded-lg bg-gray-50">
                <span className="text-sm">Morning Yoga</span>
                <span className="text-xs text-gray-500">07:00 AM</span>
              </div>
              <div className="flex items-center justify-between p-2 rounded-lg bg-gray-50">
                <span className="text-sm">HIIT Workout</span>
                <span className="text-xs text-gray-500">10:00 AM</span>
              </div>
              <div className="flex items-center justify-between p-2 rounded-lg bg-gray-50">
                <span className="text-sm">Evening Run</span>
                <span className="text-xs text-gray-500">06:00 PM</span>
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
