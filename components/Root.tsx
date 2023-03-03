"use client";
import styles from "./chord_name.module.css";

interface Props {
  root: string;
  size: number;
}

export default function Root({ root, size }: Props) {
  return (
    <div
      className={styles.key}
      style={{ height: size * 1.1, marginRight: size / 6 }}
    >
      <div style={{ fontSize: size }}>{root[0].toUpperCase()}</div>
      {root.includes("#") && <div style={{ fontSize: size * 0.9 }}>#</div>}
      {root.includes("♭") && <div style={{ fontSize: size }}>♭</div>}
    </div>
  );
}
