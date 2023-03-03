"use client";
import styles from "./chord_name.module.css";

interface Props {
  quality: string;
  size: number;
  tension: string;
}
export default function Quality({ quality, size, tension }: Props) {
  return (
    <div className={styles.scale}>
      {quality !== undefined && quality !== "maj" && (
        <span style={{ fontSize: size }}>{quality}</span>
      )}
      {tension !== "none" && (
        <span
          className={styles.tension}
          style={{ fontSize: size * 0.5, right: size * -0.75 }}
        >
          {tension.replace("sharp", "#").replace("flat", "♭")}
        </span>
      )}
    </div>
  );
}
