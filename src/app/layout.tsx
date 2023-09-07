import './globals.css'

import type { Metadata } from 'next'
import { fontLexend } from '@/libs/fonts'

export const metadata: Metadata = {
  title: 'Next.js - 3-column preview card component',
  description:
    'Design preview for the 3-column preview card component coding challenge',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={fontLexend.className}>{children}</body>
    </html>
  )
}
