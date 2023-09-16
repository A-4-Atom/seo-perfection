'use client'
import "./globals.css";
import type { Metadata } from "next";
import Frame from "react-frame-component";
import { useSearchParams } from "next/navigation";

export const metadata: Metadata = {
  title: "SEO Perfection",
  description: "Tool To check SEO performance of website.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const searchParams = useSearchParams();
  // <iframe src="https://your-website.com?iframe=true"></iframe>
  const isIframe = searchParams.get('iframe');

  if (isIframe) {
    return (
      <html lang="en">
        <Frame>
          <body>{children}</body>
        </Frame>
      </html>
    );
  } else {
    return (
      <html lang="en">
        <body>{children}</body>
      </html>
    );
  }
}
