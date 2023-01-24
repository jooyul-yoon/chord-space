"use client";
import styles from "./chord_name.module.css";

interface Props {
  scale: string;
  tension: string;
  size: number;
}
export default function Scale({ scale, tension, size }: Props) {
  return (
    <div className={styles.scale}>
      <span style={{ fontSize: size }}>{scale}</span>
      <span className={styles.tension} style={{ fontSize: size / 2 }}>
        {tension}
      </span>
    </div>
  );
}
