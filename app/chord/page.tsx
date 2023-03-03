"use client";

import "../../styles/globals.css";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Page() {
  const router = useRouter();
  useEffect(() => {
    router.push("/chord/C?scale=11&tension=none&bass=none");
  }, []);
  return null;
}
