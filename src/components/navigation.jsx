"use client";
import { NavBar } from "@/components/ui/tubelight-navbar";
import { Home, Info, Phone, Mail, User } from "lucide-react";

export function Navigation() {
  const navItems = [
    {
      name: "Home",
      url: "/",
      icon: Home,
    },
    {
      name: "About",
      url: "/about",
      icon: Info,
    },
    {
      name: "Contact",
      url: "/contact",
      icon: Phone,
    },
    {
      name: "Team",
      url: "/team",
      icon: User,
    },
  ];

  // Added custom className to adjust position and improve visibility
  return (
    <NavBar 
      items={navItems} 
      className="sm:top-10 text-white" // Moved down by 10 units (2.5rem) and set text color
    />
  );
}