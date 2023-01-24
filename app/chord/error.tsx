"use client";

import { useRouter } from "next/router";
import { useEffect } from "react";
import styles from "./chord.module.css";

export default function Error({ error, reset }) {
  const router = useRouter();

  const handleBackward = () => {
    router.back();
  };

  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className={styles.main}>
      <div className={styles.error}>ERROR</div>
      <p>Something went wrong!</p>
      <button onClick={handleBackward}>Reset error boundary</button>
    </div>
  );
}
