import verde from "../img/verde.jpeg";
import righe from "../img/righe.jpg";
import rossa from "../img/rossa.jpg";
import righeG from "../img/righeG.jpg";

const description =
  "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua." +
  "Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.";

export const images = [
  { key: 0, img: verde, title: "T-shirt verde", description: description },
  {
    key: 1,
    img: righe,
    title: "T-shirt verde oliva",
    description: description,
  },
  { key: 2, img: rossa, title: "T-shirt rossa", description: description },
  { key: 3, img: righeG, title: "Giacca a righe", description: description },
  {
    key: 4,
    img: righe,
    title: "T-shirt verde oliva",
    description: description,
  },
  { key: 5, img: righeG, title: "Giacca a righe", description: description },
  { key: 6, img: verde, title: "T-shirt verde", description: description },
  { key: 7, img: rossa, title: "T-shirt rossa", description: description },
];

export function getImages() {
  return images.filter((g) => g);
}
