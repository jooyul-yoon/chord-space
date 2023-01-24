import styles from "./chord_name.module.css";

interface Props {
  scale: string;
  tension: string;
}
export default function Scale({ scale, tension }: Props) {
  return (<div className={styles.scale}>
    <span>{scale}</span>
    <span className={styles.tension}>{tension}</span>
  </div>);
}
