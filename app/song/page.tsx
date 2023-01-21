"use client";

import "../../styles/globals.css";
import styles from "./song.module.css";
import Link from "next/link";

export default function Page() {
  return (
    <div className={styles.component}>
      <div>Songs</div>
      <div>
        <Link href="/chord">navigate to chord</Link>
      </div>
    </div>
  );
}
