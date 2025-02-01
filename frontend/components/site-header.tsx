"use client";

import { Button } from "@/components/ui/button";
import { LogIn, Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-sm">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-green-600">MediLearn</span>
          </Link>
          <nav className="hidden gap-6 md:flex">
            {[
              ["Solutions", "#solutions"],
              ["Resources", "#resources"],
              ["Pricing", "#pricing"],
              ["About Us", "#about"],
            ].map(([label, href]) => (
              <Link
                key={label}
                href={href}
                className="text-sm font-medium text-gray-700 transition-colors hover:text-green-600"
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="hidden items-center gap-4 md:flex">
          <Button
            variant="ghost"
            className="text-gray-700 hover:text-green-600"
          >
            <LogIn className="mr-2 h-4 w-4" />
            Log in
          </Button>
          <Button className="bg-green-600 hover:bg-green-700">Sign up</Button>
        </div>

        <button
          className="block rounded-lg p-2.5 text-gray-700 md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="border-b md:hidden">
          <nav className="container flex flex-col space-y-4 py-4">
            {[
              ["Solutions", "#solutions"],
              ["Resources", "#resources"],
              ["Pricing", "#pricing"],
              ["About Us", "#about"],
            ].map(([label, href]) => (
              <Link
                key={label}
                href={href}
                className="text-sm font-medium text-gray-700 transition-colors hover:text-green-600"
              >
                {label}
              </Link>
            ))}
            <hr className="my-2" />
            <Button variant="ghost" className="justify-start">
              <LogIn className="mr-2 h-4 w-4" />
              Log in
            </Button>
            <Button className="bg-green-600 hover:bg-green-700">Sign up</Button>
          </nav>
        </div>
      )}
    </header>
  );
}
