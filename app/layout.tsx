"use client"
import './globals.css'
import Main from '@/configurations/Main'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css?family=Montserrat:300,400,700|Roboto:300,400,700" rel="stylesheet" />
      </head>
      <body>
        <Main>
          {children}
        </Main>
      </body>
    </html>
  )
}
