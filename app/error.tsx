"use client";

import { useEffect } from "react";
import "../styles/globals.css";

export default function Error({ error, reset }) {
  return (
    <div
      style={{
        display: "grid",
        alignContent: "flex-start",
        placeItems: "center",
        minWidth: "100vw",
        minHeight: "100vh",
        padding: "30px",
      }}
    >
      <div>ERROR</div>
      <p>Something went wrong!</p>
    </div>
  );
}
