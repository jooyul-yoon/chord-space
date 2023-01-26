"use client";
import "../../../styles/globals.css";
import styles from "../chord.module.css";
import { SyntheticEvent } from "react";
import Image from "next/image";
import HomeBtn from "../../../public/logo.png";
import Link from "next/link";
import { ChordName } from "../../../components/ChordName";
import Key from "../../../components/Key";
import { Dropdown, Header, Icon } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import { useRouter } from "next/navigation";
import {
  chords,
  convertKey,
  optionsKey,
  optionsScale,
  optionsTension,
} from "../../../utils/enum";
import { FretBoard } from "../../../components/FretBoard";

export default function Page({ params, searchParams }) {
  const router = useRouter();

  const keyValue = params.key
    .toUpperCase()
    .replace("%2B", "#")
    .replace("+", "#")
    .replace("-", "♭");
  const kId = convertKey.findIndex((k) => k === keyValue);
  const scale = searchParams.scale;
  const tension = searchParams.tension;
  const chord = chords.find((c) => c.scale === scale && c.tension === tension);
  const changeKey = (e: SyntheticEvent) => {
    const newKey = e.currentTarget.textContent
      .toLowerCase()
      .replace("#", "+")
      .replace("♭", "-");

    let newPath = `/chord/${newKey}?scale=${scale}&tension=${tension}`;
    router.push(newPath);
  };
  const changeScale = (e) => {
    const newPath = `/chord/${keyValue}?scale=${e.currentTarget.innerText.toLowerCase()}&tension=${tension}`;
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
          {chord.structure.map((note, i) => (
            <Key key={i} keyValue={convertKey[(note + kId) % 12]} size={20} />
          ))}
        </div>
      </div>
      <div className={styles.middle}>
        <FretBoard />
        <div className={styles.position}>
          <h1>Position</h1>
          <div>
            <Icon name="angle left" fitted size="big" />
            <span>2</span>
            <Icon name="angle right" fitted size="big" />
          </div>
        </div>
        <div className={styles.input}>
          <div>
            <span style={{ fontSize: "14px", marginRight: 5 }}>Key: </span>
            <Dropdown
              floating
              labeled
              header="Key"
              options={optionsKey}
              scrolling
              closeOnBlur
              onChange={changeKey}
              defaultValue={keyValue}
            />
          </div>
          <div>
            <span style={{ fontSize: "14px", marginRight: 5 }}>Scale: </span>
            <Dropdown
              floating
              labeled
              header="Scale"
              options={optionsScale}
              scrolling
              closeOnBlur
              onChange={changeScale}
              defaultValue={scale}
            />
          </div>
          <div>
            <span style={{ fontSize: "14px", marginRight: 5 }}>Tension: </span>
            <Dropdown
              options={optionsTension}
              floating
              labeled
              header="Tension"
              scrolling
              closeOnBlur
              defaultValue={tension}
              onChange={changeTension}
            />
          </div>
        </div>
      </div>
      <div className={styles.bottom}></div>
    </div>
  );
}
