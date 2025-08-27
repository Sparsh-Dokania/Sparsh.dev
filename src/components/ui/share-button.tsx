"use client"

import React, { useState } from "react"
import { LucideIcon } from "lucide-react"

import { cn } from "../../lib/utils"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode
  // your props here
}

const Button = ({ className, children, ...props }: ButtonProps) => {
  return (
    <button className={className} {...props}>
      {children}
    </button>
  )
}

interface ShareLink {
  icon: LucideIcon
  href?: string
  onClick?: () => void
  label?: string
}

interface ShareButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  links: ShareLink[]
  children: React.ReactNode
}

const ShareButton = ({
  className,
  links = [], // default to empty array
  children,
  ...props
}: ShareButtonProps) => {
  const [open, setOpen] = useState(false)

  // ensure links is an array
  const items = Array.isArray(links) ? links : []

  return (
    <div className={`relative inline-block ${className ?? ""}`}>
      <button onClick={() => setOpen(s => !s)} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white">
        {children}
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-52 bg-neutral-900 border border-neutral-800 rounded-lg shadow-lg p-2 z-50">
          {items.map((l, i) => {
            const Icon = l.icon
            return (
              <button key={i} onClick={() => { l.onClick?.(); setOpen(false) }} className="w-full text-left flex items-center gap-3 px-2 py-2 rounded hover:bg-neutral-800">
                <Icon size={18} />
                <span className="text-sm">{l.label}</span>
              </button>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default ShareButton