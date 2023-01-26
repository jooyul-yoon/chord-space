import { typeChord } from "./types";
export const optionsKey = [
  {
    key: "C",
    text: "C",
    value: "C",
    content: "C",
  },
  {
    key: "C#",
    text: "C#",
    value: "C+",
    content: "C#",
  },
  {
    key: "D",
    text: "D",
    value: "D",
    content: "D",
  },
  {
    key: "D#",
    text: "D#",
    value: "D+",
    content: "D#",
  },
  {
    key: "E",
    text: "E",
    value: "E",
    content: "E",
  },
  {
    key: "F",
    text: "F",
    value: "F",
    content: "F",
  },
  {
    key: "F#",
    text: "F#",
    value: "F+",
    content: "F#",
  },
  {
    key: "G",
    text: "G",
    value: "G",
    content: "G",
  },
  {
    key: "G#",
    text: "G#",
    value: "G+",
    content: "G#",
  },
  {
    key: "A",
    text: "A",
    value: "A",
    content: "A",
  },
  {
    key: "A#",
    text: "A#",
    value: "A+",
    content: "A#",
  },
  {
    key: "B",
    text: "B",
    value: "B",
    content: "B",
  },
];

export const optionsScale = [
  {
    key: "maj",
    text: "maj",
    value: "maj",
    content: "maj",
  },
  {
    key: "min",
    text: "min",
    value: "min",
    content: "min",
  },
  {
    key: "5",
    text: "5",
    value: "5",
    content: "5",
  },
  {
    key: "6",
    text: "6",
    value: "6",
    content: "6",
  },
  {
    key: "7",
    text: "7",
    value: "7",
    content: "7",
  },
  {
    key: "9",
    text: "9",
    value: "9",
    content: "9",
  },
  {
    key: "11",
    text: "11",
    value: "11",
    content: "11",
  },
  {
    key: "13",
    text: "13",
    value: "13",
    content: "13",
  },
  {
    key: "dim",
    text: "dim",
    value: "dim",
    content: "dim",
  },
  {
    key: "dim7",
    text: "dim7",
    value: "dim7",
    content: "dim7",
  },
  {
    key: "aug",
    text: "aug",
    value: "aug",
    content: "aug",
  },
  {
    key: "sus2",
    text: "sus2",
    value: "sus2",
    content: "sus2",
  },
  {
    key: "sus4",
    text: "sus4",
    value: "sus4",
    content: "sus4",
  },
  {
    key: "maj7",
    text: "maj7",
    value: "maj7",
    content: "maj7",
  },
  {
    key: "m7",
    text: "m7",
    value: "m7",
    content: "m7",
  },
  {
    key: "7sus4",
    text: "7sus4",
    value: "7sus4",
    content: "7sus4",
  },
  {
    key: "maj9",
    text: "maj9",
    value: "maj9",
    content: "maj9",
  },
  {
    key: "maj11",
    text: "maj11",
    value: "maj11",
    content: "maj11",
  },
  {
    key: "maj13",
    text: "maj13",
    value: "maj13",
    content: "maj13",
  },
  {
    key: "add9",
    text: "add9",
    value: "add9",
    content: "add9",
  },
  {
    key: "6add9",
    text: "6add9",
    value: "6add9",
    content: "6add9",
  },
  {
    key: "m6",
    text: "m6",
    value: "m6",
    content: "m6",
  },
  {
    key: "m9",
    text: "m9",
    value: "m9",
    content: "m9",
  },
  {
    key: "m11",
    text: "m11",
    value: "m11",
    content: "m11",
  },
  {
    key: "m13",
    text: "m13",
    value: "m13",
    content: "m13",
  },
  {
    key: "madd9",
    text: "madd9",
    value: "madd9",
    content: "madd9",
  },
  {
    key: "m6add9",
    text: "m6add9",
    value: "m6add9",
    content: "m6add9",
  },
  {
    key: "mmaj7",
    text: "mmaj7",
    value: "mmaj7",
    content: "mmaj7",
  },
  {
    key: "mmaj9",
    text: "mmaj9",
    value: "mmaj9",
    content: "mmaj9",
  },
];

export const optionsTension = [
  {
    key: "none",
    text: "none",
    value: "none",
    content: "none",
  },
  {
    key: "♭5",
    text: "♭5",
    value: "♭5",
    content: "♭5",
  },
  {
    key: "#5",
    text: "#5",
    value: "#5",
    content: "#5",
  },
  {
    key: "♭9",
    text: "♭9",
    value: "♭9",
    content: "♭9",
  },
  {
    key: "#9",
    text: "#9",
    value: "#9",
    content: "#9",
  },
  {
    key: "♭11",
    text: "♭11",
    value: "♭11",
    content: "♭11",
  },
  {
    key: "#11",
    text: "#11",
    value: "#11",
    content: "#11",
  },
  {
    key: "♭13",
    text: "♭13",
    value: "♭13",
    content: "♭13",
  },
  {
    key: "#13",
    text: "#13",
    value: "#13",
    content: "#13",
  },
];

export const convertKey = [
  "C",
  "C#",
  "D",
  "D#",
  "E",
  "F",
  "F#",
  "G",
  "G#",
  "A",
  "A#",
  "B",
];

export const chords: typeChord[] = [
  {
    scale: "maj",
    tension: "none",
    structure: [0, 4, 7],
  },
  {
    scale: "min",
    tension: "none",
    structure: [0, 3, 7],
  },
  {
    scale: "5",
    tension: "none",
    structure: [0, 7],
  },
  {
    scale: "6",
    tension: "none",
    structure: [0, 4, 7, 9],
  },
  {
    scale: "7",
    tension: "none",
    structure: [0, 4, 7, 11],
  },
  {
    scale: "9",
    tension: "none",
    structure: [0, 4, 7, 11, 14],
  },
  {
    scale: "11",
    tension: "none",
    structure: [0, 4, 7, 10, 14, 17],
  },
  {
    scale: "13",
    tension: "none",
    structure: [0, 4, 7, 10, 14, 21],
  },
  {
    scale: "dim",
    tension: "none",
    structure: [0, 3, 6],
  },
];
