"use client";
import React from "react";
import { ShootingStars } from "./components/ui/shooting-stars";
import { StarsBackground } from "./components/ui/stars-background";

export default function ShootingStarsAndStarsBackground() {
  return (
    // fixed full-viewport background, placed far behind content
    <div className="fixed inset-0 -z-50 pointer-events-none bg-neutral-900">
      <ShootingStars />
      <StarsBackground />
    </div>
  );
}
