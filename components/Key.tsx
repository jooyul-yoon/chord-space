"use client";
import styles from "./chord_name.module.css";

interface Props {
  keyValue: string;
  size: number;
}

export default function Key({ keyValue, size }: Props) {
  return (
    <div
      className={styles.key}
      style={{ height: size * 1.1, marginRight: size / 6 }}
    >
      <div style={{ fontSize: size }}>{keyValue[0].toUpperCase()}</div>
      {keyValue.includes("#") && <div style={{ fontSize: size * 0.9 }}>#</div>}
      {keyValue.includes("♭") && <div style={{ fontSize: size }}>♭</div>}
    </div>
  );
}
