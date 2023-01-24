import styles from "./layout.module.css";
import "../styles/globals.css";
import Link from "next/link";
import Image from "next/image";
import Logo from "../static/logo-svg.svg";

export default function Page() {
  return (
    <main className={styles.main}>
      <Link href={"/chord/c?scale=maj"} className={styles.title}>
        <span className={styles.chord}>Chord</span>{" "}
        <span className={styles.space}>Space</span>
        <Image
          src={Logo}
          alt="logo"
          width={50}
          height={54}
          color={"#eb5055"}
          priority
        />
      </Link>
    </main>
  );
}
