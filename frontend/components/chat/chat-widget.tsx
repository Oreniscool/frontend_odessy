import { Bot } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ChatInterface } from "./chat-interface";

export default function ChatPage() {
  return (
    <div className="container mx-auto p-6 space-y-8">
      <div className="flex items-center gap-2">
        <Bot className="h-8 w-8" />
        <div>
          <h1 className="text-2xl font-bold">AI Fitness Assistant</h1>
          <p className="text-muted-foreground">
            Get personalized fitness advice and track your progress
          </p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-[1fr_300px]">
        <Card className="h-[800px]">
          <ChatInterface />
        </Card>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Quick Tips</CardTitle>
              <CardDescription>
                Here are some things you can ask the AI
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="text-sm">• Create a personalized workout plan</p>
              <p className="text-sm">• Get nutrition advice</p>
              <p className="text-sm">• Track your progress</p>
              <p className="text-sm">• Calculate calories burned</p>
              <p className="text-sm">• Recommend exercises</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Weekly Stats</CardTitle>
              <CardDescription>Your fitness journey this week</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Workouts</span>
                  <span className="font-medium">12</span>
                </div>
                <Separator className="my-2" />
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Active Minutes</span>
                  <span className="font-medium">312</span>
                </div>
                <Separator className="my-2" />
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Calories Burned</span>
                  <span className="font-medium">5,230</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
