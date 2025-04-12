import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Mediacon News",
  description: "News platform by Mediacon",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com"/>
      <link href="https://fonts.googleapis.com/css2?family=National+Park:wght@200..800&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"/>
      </head>
      <body>
        <div id="root">{children}</div>
      </body>
    </html>
  )
}