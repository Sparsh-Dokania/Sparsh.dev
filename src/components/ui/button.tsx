"use client"

import * as React from "react"
import { Facebook, Link, Link2, Linkedin, Twitter } from "lucide-react"

// import { Button } from "@/components/ui/button" // Removed unused import

import ShareButtonComponent from "../ui/share-button"


export default function ShareButton(): React.JSX.Element {
  const shareLinks = [
    {
      icon: Twitter,
      onClick: () => window.open("https://twitter.com/share"),
      label: "Share on Twitter",
    },
    {
      icon: Facebook,
      onClick: () => window.open("https://facebook.com/share"),
      label: "Share on Facebook",
    },
    {
      icon: Linkedin,
      onClick: () => window.open("https://linkedin.com/share"),
      label: "Share on LinkedIn",
    },
    {
      icon: Link,
      onClick: () => navigator.clipboard.writeText(window.location.href),
      label: "Copy link",
    },
  ]

  return (
    <button type="button" aria-label="Share">
        <ShareButtonComponent links={shareLinks}>
            <Link2 className="h-4 w-4" />
            <span className="ml-2">Let's Connect</span>
        </ShareButtonComponent>
    </button>
  )
}