import styles from "./layout.module.css";
import "../styles/globals.css";
import Link from "next/link";
import Image from "next/image";
import Logo from "../static/logo-svg.svg";

export default function Page() {
  return (
    <main className={styles.main}>
      <div className={styles.buttons}>
        <Link href={"/chord"}>Chords</Link>
        <Link href={"/song"}>Songs</Link>
        {/* <Link href={'/chord'}>Progression</Link> */}
      </div>
      <Link href={"/chord"} className={styles.title}>
        <span className={styles.chord}>Chord</span>{" "}
        <span className={styles.space}>Space</span>
        <Image src={Logo} alt="logo" width={50} height={54} color={"#eb5055"} />
      </Link>
    </main>
  );
}
