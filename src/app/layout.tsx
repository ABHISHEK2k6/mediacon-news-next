"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Loader from "../components/Loader";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);
  const pathname = usePathname();

  // Preload image once on mount
  useEffect(() => {
    const img = new Image();
    img.src = "/assets/Con(Logo).png";
  }, []);

  // Show loader on route change
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1); // Or adjust to your animation duration

    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0, overflow: loading ? "hidden" : "auto" }}>
        {loading ? <Loader /> : children}
      </body>
    </html>
  );
}
