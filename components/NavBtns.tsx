"use client";

import Link from "next/link";
import styles from "./nav_btns.module.css";

export default function NavBtns() {
  return (
    <div className={styles.buttons}>
      <Link href={"/chord/c?chord=maj"}>Chords</Link>
      <Link href={"/song"}>Songs</Link>
      <Link href={"/chord"}>Progression</Link>
      <Link href={"/song"}>Settings</Link>
    </div>
  );
}
