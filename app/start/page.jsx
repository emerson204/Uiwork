"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function PageStart() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/start/botones");
  }, [router]);

  return null;
}
