"use client";
import "../../../styles/globals.css";
import styles from "../chord.module.css";
import { ChangeEvent, SyntheticEvent, useEffect } from "react";
import Image from "next/image";
import HomeBtn from "../../../public/logo.png";
import Link from "next/link";
import { ChordName } from "../../../components/ChordName";
import Key from "../../../components/Key";
import { Dropdown, Header } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import { useRouter } from "next/navigation";
import { optionsKey, optionsScale, optionsTension } from "../../../utils/enum";

export default function Page({ params, searchParams }) {
  const router = useRouter();

  const keyValue = params.key;
  const scale = searchParams.scale;
  const tension = searchParams.tension;

  const changeKey = (e: SyntheticEvent) => {
    const newKey = e.currentTarget.textContent
      .toLowerCase()
      .replace("#", "+")
      .replace("♭", "-");

    let newPath = `/chord/${newKey}?scale=${scale}&tension=${tension}`;
    router.push(newPath);
  };
  const changeScale = (e) => {
    const newPath = `/chord/${keyValue}?scale=${e.currentTarget.innerText.toLowerCase()}`;
    router.push(newPath);
  };
  const changeTension = (e) => {
    const newTension = e.currentTarget.textContent
      .toLowerCase()
      .replace("#", "sharp")
      .replace("♭", "flat");
    const newPath = `/chord/${keyValue}?scale=${scale}&tension=${newTension}`;
    router.push(newPath);
  };

  return (
    <div className={styles.main}>
      <Link href={"/"}>
        <Image className={styles.homeBtn} src={HomeBtn} alt={"Logo"} />
      </Link>
      <div className={styles.top}>
        <ChordName keyValue={keyValue} scale={scale} tension={tension} />
        <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
          <Key keyValue={"C"} size={20} />
          <Key keyValue={"D+"} size={20} />
          <Key keyValue={"G"} size={20} />
          <Key keyValue={"B-"} size={20} />
        </div>
      </div>
      <div className={styles.middle}>
        <div className={styles.fretboard}>fretboard</div>
        <div className={styles.position}>position</div>
        <div className={styles.input}>
          <Header as="h4">
            <Header.Content>
              Key of{" "}
              <Dropdown
                inline
                header="Select Key"
                options={optionsKey}
                scrolling
                openOnFocus
                defaultValue={optionsKey[0].text}
                onChange={changeKey}
              />
            </Header.Content>
          </Header>
          <Header as="h4">
            <Header.Content>
              Chord{": "}
              <Dropdown
                inline
                header="Select Chord"
                options={optionsScale}
                scrolling
                openOnFocus
                defaultValue={scale}
                onChange={changeScale}
              />
            </Header.Content>
          </Header>
          <Header as="h4">
            <Header.Content>
              Tension{": "}
              <Dropdown
                header="Select Tension"
                options={optionsTension}
                scrolling
                openOnFocus
                defaultValue={tension}
                onChange={changeTension}
              />
            </Header.Content>
          </Header>
        </div>
      </div>
      <div className={styles.bottom}></div>
    </div>
  );
}
