"use client";
import "../../../styles/globals.css";
import styles from "../chord.module.css";
import { SyntheticEvent } from "react";
import Image from "next/image";
import HomeBtn from "../../../public/logo.png";
import Link from "next/link";
import { ChordName } from "../../../components/ChordName";
import Root from "../../../components/Root";
import { Icon, Select } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import { useRouter } from "next/navigation";
import {
  convertKey,
  optionsQuality,
  optionsRoot,
  optionsTension,
} from "../../../utils/enum";
import { FretBoard } from "../../../components/FretBoard";

export default function Page({ params, searchParams }) {
  const router = useRouter();

  const root = params.key
    .toUpperCase()
    .replace("%2B", "#")
    .replace("+", "#")
    .replace("-", "♭");
  const kId = convertKey.findIndex((k) => k === root);
  const quality = searchParams.quality;
  const tension = searchParams.tension;
  const bass = searchParams.bass;

  const changeKey = (e: SyntheticEvent) => {
    const newKey = e.currentTarget.textContent
      .toLowerCase()
      .replace("#", "+")
      .replace("♭", "-");

    let newPath = `/chord/${newKey}?quality=${quality}&tension=${tension}`;
    router.push(newPath);
  };
  const changeQuality = (e) => {
    const newPath = `/chord/${root}?quality=${e.currentTarget.innerText.toLowerCase()}&tension=${tension}`;
    router.push(newPath);
  };
  const changeTension = (e) => {
    const newTension = e.currentTarget.textContent
      .toLowerCase()
      .replace("#", "sharp")
      .replace("♭", "flat");
    const newPath = `/chord/${root}?quality=${quality}&tension=${newTension}`;
    router.push(newPath);
  };

  return (
    <div className={styles.main}>
      <Link href={"/"}>
        <Image className={styles.homeBtn} src={HomeBtn} alt={"Logo"} />
      </Link>
      <div className={styles.top}>
        <ChordName
          root={root}
          quality={quality}
          tension={tension}
          bass={bass}
        />
        <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
          {/* {chord.structure.map((note, i) => (
            <Root key={i} root={convertKey[(note + kId) % 12]} size={20} />
          ))} */}
        </div>
      </div>

      <div className={styles.middle}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            height: "calc(100% - 106px)",
          }}
        >
          <div
            style={{ display: "grid", placeContent: "center", width: "60%" }}
          >
            <ins
              className="scales_chords_api"
              chord={`${root}`}
              instrument="guitar"
              output="image"
              width="500px"
              nolink="true"
            ></ins>
          </div>
          <div className={styles.input}>
            <Select
              placeholder="Root"
              options={optionsRoot}
              defaultValue={root}
              onChange={changeKey}
            />
            <Select
              placeholder="Quality"
              options={optionsQuality}
              defaultValue={quality}
            />
            <Select
              placeholder="Tension"
              options={optionsTension}
              defaultValue={tension}
            />
            <Select
              placeholder="Bass"
              options={optionsRoot}
              defaultValue={bass}
            />
          </div>
        </div>
        <div className={styles.position}>
          <h1>Position</h1>
          <div>
            <Icon name="angle left" fitted size="big" />
            <span>2</span>
            <Icon name="angle right" fitted size="big" />
          </div>
        </div>
      </div>
      <div className={styles.bottom}></div>
    </div>
  );
}
