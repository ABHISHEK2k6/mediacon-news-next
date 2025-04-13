"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Loader from "../components/Loader";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);
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
