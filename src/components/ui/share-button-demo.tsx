"use client"

import React from "react"
import { Twitter, Facebook, Linkedin, Link } from "lucide-react"
import ShareButton from "./share-button"

export function ShareButtonDemo(): React.ReactElement {
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
    <div>
      <ShareButton links={shareLinks} className="text-lg font-medium">
        <Link size={15} />
        Share
      </ShareButton>
    </div>
  )
}