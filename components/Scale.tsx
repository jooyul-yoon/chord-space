"use client";
import styles from "./chord_name.module.css";

interface Props {
  scale: string;
  size: number;
  tension: string;
}
export default function Scale({ scale, size, tension }: Props) {
  return (
    <div className={styles.scale}>
      {scale !== undefined && scale !== "maj" && (
        <span style={{ fontSize: size }}>{scale}</span>
      )}
      {tension !== "none" && (
        <span
          className={styles.tension}
          style={{ fontSize: size * 0.5, right: size * -0.7 }}
        >
          {tension.replace("sharp", "#").replace("flat", "♭")}
        </span>
      )}
    </div>
  );
}
