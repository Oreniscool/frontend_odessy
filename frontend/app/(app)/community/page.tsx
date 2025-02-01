"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import {
  ThumbsUp,
  MessageSquare,
  Share2,
  MapPin,
  Calendar,
  Users,
  Search,
} from "lucide-react";

// Mock data for community posts
const communityPosts = [
  {
    id: 1,
    author: "Emily Chen",
    avatar: "/placeholder.svg",
    content:
      "Just finished a 5k run! Anyone want to join me for the upcoming charity marathon?",
    likes: 24,
    comments: 8,
    shares: 3,
    tags: ["Running", "Charity"],
    timeAgo: "2h ago",
  },
  {
    id: 2,
    author: "Michael Johnson",
    avatar: "/placeholder.svg",
    content:
      "Found an amazing vegan restaurant downtown. Great for post-workout meals! 🥗",
    likes: 18,
    comments: 5,
    shares: 2,
    tags: ["Nutrition", "Vegan"],
    timeAgo: "4h ago",
  },
  {
    id: 3,
    author: "Sarah Williams",
    avatar: "/placeholder.svg",
    content:
      "Looking for yoga buddies in Central Park this Saturday morning. Who's in?",
    likes: 32,
    comments: 12,
    shares: 7,
    tags: ["Yoga", "Meetup"],
    timeAgo: "6h ago",
  },
  {
    id: 4,
    author: "David Lee",
    avatar: "/placeholder.svg",
    content:
      "Just hit my weight loss goal of 20 lbs! Here's what worked for me: 1) Consistent calorie tracking 2) 30 min daily walks 3) Strength training 3x/week. Keep pushing, everyone!",
    likes: 56,
    comments: 23,
    shares: 15,
    tags: ["WeightLoss", "Motivation"],
    timeAgo: "1d ago",
  },
  {
    id: 5,
    author: "Lisa Thompson",
    avatar: "/placeholder.svg",
    content:
      "Meal prep Sunday! Here's my go-to high-protein lunch: grilled chicken, quinoa, roasted veggies, and avocado. What are your favorite meal prep recipes?",
    likes: 41,
    comments: 17,
    shares: 9,
    tags: ["MealPrep", "HealthyEating"],
    timeAgo: "1d ago",
  },
];

// Mock data for events
const upcomingEvents = [
  {
    id: 1,
    title: "Community 5K Run",
    date: "June 15, 2025",
    location: "Central Park",
    attendees: 89,
  },
  {
    id: 2,
    title: "Yoga in the Park",
    date: "June 18, 2025",
    location: "Riverside Park",
    attendees: 45,
  },
  {
    id: 3,
    title: "Nutrition Workshop",
    date: "June 22, 2025",
    location: "Community Center",
    attendees: 32,
  },
];

// Mock data for trending topics
const trendingTopics = [
  "#SummerFitness",
  "#HealthyRecipes",
  "#MindfulnessChallenge",
  "#HomeWorkouts",
  "#RunningTips",
];

// Mock data for active groups
const activeGroups = [
  {
    name: "Morning Runners",
    members: 234,
    avatar: "/placeholder.svg",
  },
  {
    name: "Vegan Meal Prep",
    members: 189,
    avatar: "/placeholder.svg",
  },
  {
    name: "Meditation Circle",
    members: 156,
    avatar: "/placeholder.svg",
  },
  {
    name: "Weight Loss Support",
    members: 312,
    avatar: "/placeholder.svg",
  },
];

export default function Community() {
  const [postContent, setPostContent] = useState("");

  const handlePostSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the post to your backend
    console.log("New post:", postContent);
    setPostContent("");
    // You could also add the new post to the communityPosts array here
  };

  return (
    <div className="min-h-screen bg-[#F8F9FB] pl-72">
      <div className="p-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl font-bold">Community</h1>
            <p className="text-gray-500">Connect, share, and grow together</p>
          </div>
          <Button className="bg-[#DFFE00] text-black hover:bg-[#DFFE00]/90">
            Create New Post
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main content area */}
          <div className="lg:col-span-2 space-y-6">
            {/* New post form */}
            <Card>
              <CardContent className="pt-6">
                <form onSubmit={handlePostSubmit}>
                  <Textarea
                    placeholder="Share your thoughts, tips, or experiences..."
                    value={postContent}
                    onChange={(e) => setPostContent(e.target.value)}
                    className="mb-4"
                  />
                  <div className="flex justify-between items-center">
                    <div className="flex space-x-2">
                      <Button type="button" variant="outline" size="sm">
                        📷 Photo
                      </Button>
                      <Button type="button" variant="outline" size="sm">
                        📍 Location
                      </Button>
                    </div>
                    <Button
                      type="submit"
                      className="bg-[#DFFE00] text-black hover:bg-[#DFFE00]/90"
                    >
                      Post
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>

            {/* Community posts */}
            {communityPosts.map((post) => (
              <Card key={post.id}>
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    <Avatar className="h-10 w-10 mr-4">
                      <AvatarImage src={post.avatar} />
                      <AvatarFallback>{post.author[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-semibold">{post.author}</h3>
                      <p className="text-sm text-gray-500">{post.timeAgo}</p>
                    </div>
                  </div>
                  <p className="mb-4">{post.content}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex justify-between text-sm text-gray-500">
                    <Button variant="ghost" size="sm">
                      <ThumbsUp className="h-4 w-4 mr-2" /> {post.likes} Likes
                    </Button>
                    <Button variant="ghost" size="sm">
                      <MessageSquare className="h-4 w-4 mr-2" /> {post.comments}{" "}
                      Comments
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Share2 className="h-4 w-4 mr-2" /> {post.shares} Shares
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Search */}
            <Card>
              <CardContent className="pt-6">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    type="text"
                    placeholder="Search community..."
                    className="pl-10"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Upcoming Events */}
            <Card>
              <CardHeader>
                <CardTitle>Upcoming Events</CardTitle>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[250px]">
                  {upcomingEvents.map((event) => (
                    <div key={event.id} className="mb-4 last:mb-0">
                      <h4 className="font-semibold">{event.title}</h4>
                      <div className="flex items-center text-sm text-gray-500 mt-1">
                        <Calendar className="h-4 w-4 mr-2" />
                        {event.date}
                      </div>
                      <div className="flex items-center text-sm text-gray-500 mt-1">
                        <MapPin className="h-4 w-4 mr-2" />
                        {event.location}
                      </div>
                      <div className="flex items-center text-sm text-gray-500 mt-1">
                        <Users className="h-4 w-4 mr-2" />
                        {event.attendees} attending
                      </div>
                      <Separator className="my-2" />
                    </div>
                  ))}
                </ScrollArea>
              </CardContent>
            </Card>

            {/* Trending Topics */}
            <Card>
              <CardHeader>
                <CardTitle>Trending Topics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {trendingTopics.map((topic) => (
                    <Badge key={topic} variant="secondary">
                      {topic}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Active Groups */}
            <Card>
              <CardHeader>
                <CardTitle>Active Groups</CardTitle>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[250px]">
                  {activeGroups.map((group) => (
                    <div
                      key={group.name}
                      className="flex items-center mb-4 last:mb-0"
                    >
                      <Avatar className="h-10 w-10 mr-4">
                        <AvatarImage src={group.avatar} />
                        <AvatarFallback>{group.name[0]}</AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="font-semibold">{group.name}</h4>
                        <p className="text-sm text-gray-500">
                          {group.members} members
                        </p>
                      </div>
                    </div>
                  ))}
                </ScrollArea>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
