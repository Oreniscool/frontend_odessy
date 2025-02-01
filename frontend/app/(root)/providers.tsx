"use client"

import type { ReactNode } from "react"
import { LazyMotion, domAnimation } from "framer-motion"

export function Providers({ children }: { children: ReactNode }) {
  return <LazyMotion features={domAnimation}>{children}</LazyMotion>
}

