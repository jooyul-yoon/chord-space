import "../../../styles/globals.css";
import styles from "./song.module.css";
import Link from "next/link";

export default async function Page({ params, searchParams }) {
  const key: string = params.key;
  return (
    <div>
      <div>Chords for {key.toUpperCase()}</div>
      <div>
        <Link href="/song">navigate to song</Link>
      </div>
    </div>
  );
}
