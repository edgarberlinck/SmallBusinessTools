import './globals.css'
// @ts-ignore
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    template: 'SBT | %s',
    default: 'SBT',
  },
  description: 'Simple tool created to manage small business in Sweden',
  keywords: 'invoices;sole trader'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <html lang="en">
        <body>{children}</body>
      </html>
  )
}
