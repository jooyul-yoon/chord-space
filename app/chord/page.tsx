"use client";

import "../../styles/globals.css";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Page() {
  const router = useRouter();
  useEffect(() => {
    router.push("/chord/c?scale=maj&tension=none");
  }, []);
  return null;
}
