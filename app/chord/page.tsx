"use client";

import "../../styles/globals.css";
import styles from "./chord.module.css";
import Link from "next/link";

export default function Page() {
  return (
    <div className={styles.component}>
      <div>Chords</div>
      <div>
        <Link href="/song">navigate to song</Link>
      </div>
    </div>
  );
}
