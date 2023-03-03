"use client";
import styles from "./chord_name.module.css";
import Root from "./Root";
import Quality from "./Quality";

interface Props {
  root: string;
  quality: string;
  tension: string;
  bass: string;
}
export function ChordName({ root, quality, tension, bass }: Props) {
  return (
    <div className={styles.container}>
      <Root root={root} size={60} />
      <Quality quality={quality} tension={tension} size={50} />
      {bass !== "none" && <div>/{bass}</div>}
    </div>
  );
}
