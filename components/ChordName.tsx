"use client";
import styles from "./chord_name.module.css";
import Key from "./Key";
import Scale from "./Scale";

interface Props {
  keyValue: string;
  scale: string;
  tension: string;
}
export function ChordName({ keyValue, scale, tension }: Props) {
  return (
    <div className={styles.container}>
      <Key keyValue={keyValue} />
      <Scale scale={scale} tension={tension} />
    </div>
  );
}
