export type typeChord = {
  scale: typeScale;
  tension: typeTension;
  structure: number[];
};
export type typeKey = {
  kId: number;
  key: string;
};
export type typeScale =
  | "maj"
  | "min"
  | "5"
  | "6"
  | "7"
  | "9"
  | "11"
  | "13"
  | "dim"
  | "dim7"
  | "aug"
  | "sus2"
  | "sus4"
  | "maj7"
  | "m7"
  | "7sus4"
  | "maj9"
  | "maj11"
  | "maj13"
  | "add9"
  | "6add9"
  | "m6"
  | "m9"
  | "m11"
  | "m13"
  | "madd9"
  | "m6add9"
  | "mmaj7"
  | "mmaj9";

export type typeTension =
  | "none"
  | "♭5"
  | "#5"
  | "♭9"
  | "#9"
  | "♭11"
  | "#11"
  | "♭13"
  | "#13";
