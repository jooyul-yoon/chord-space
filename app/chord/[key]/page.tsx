"use client";
import "../../../styles/globals.css";
import styles from "../chord.module.css";
import { useEffect } from "react";
import Image from "next/image";
import HomeBtn from "../../../static/logo.png";
import Link from "next/link";
import { ChordName } from "../../../components/ChordName";
import Key from "../../../components/Key";

export default function Page({ params, searchParams }) {
  const key = params.key;
  const scale = searchParams.scale;
  const tension = searchParams.tension;

  useEffect(() => {
    console.log(key, scale, tension);
  }, []);

  return (
    <div className={styles.main}>
      <Link href={"/"}>
        <Image className={styles.homeBtn} src={HomeBtn} alt={"Logo"} />
      </Link>
      <div className={styles.top}>
        <ChordName keyValue={key} scale={scale} tension={tension} />
        <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
          <Key keyValue={"C"} size={20} />
          <Key keyValue={"D+"} size={20} />
          <Key keyValue={"G"} size={20} />
          <Key keyValue={"B-"} size={20} />
        </div>
      </div>
      <div className={styles.middle}>Body</div>
      <div className={styles.bottom}></div>
    </div>
  );
}
