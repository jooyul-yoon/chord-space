"use client";
import styles from "./chord_name.module.css";

interface Props {
  keyValue: string;
  size: number;
}

export default function Key({ keyValue, size }: Props) {
  return (
    <div className={styles.key} style={{ marginRight: size / 6 }}>
      <span style={{ fontSize: size }}>{keyValue[0].toUpperCase()}</span>
      {(keyValue.includes("%2B") || keyValue.includes("+")) && (
        <span className={styles.half} style={{ fontSize: size / 3 }}>
          #
        </span>
      )}
      {keyValue.includes("-") && (
        <span className={styles.half} style={{ fontSize: size / 3 }}>
          ♭
        </span>
      )}
    </div>
  );
}
