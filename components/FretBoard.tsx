import Image from "next/image";
import styles from "./fretboard.module.css";
import FretboardImage from "../public/fretboard.png";

export function FretBoard() {
  return (
    <div className={styles.wrapper}>
      <Image src={FretboardImage} alt="fretboard" />
    </div>
  );
}
