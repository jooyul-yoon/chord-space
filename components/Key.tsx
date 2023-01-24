import styles from "./chord_name.module.css";

interface Props {
  keyValue: string;
}

export default function Key({ keyValue }: Props) {
  return (
    <div className={styles.key}>
      <span>{keyValue[0].toUpperCase()}</span>
      {keyValue.includes("%2B") && <span className={styles.half}>#</span>}
      {keyValue.includes("-") && <span className={styles.half}>b</span>}
    </div>
  );
}
