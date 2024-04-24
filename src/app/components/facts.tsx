"use client";
import { Typography } from "@mui/material";
import { ParallaxLayer } from "@react-spring/parallax";

const Clouds = [
  "cloud 1.svg",
  "cloud 2.svg",
  "cloud 3.svg",
  "cloud 4.svg",
  "cloud 5.svg",
];

const CloudColors = [
  "#F94144",
  "#F3722C",
  "#F8961E",
  "#F9844A",
  "#F9C74F",
  "#90BE6D",
  "#43AA8B",
  "#4D908E",
  "#577590",
  "#277DA1",
];

const Facts = [
  "US X Canada dual citizen",
  "Massive DnD nerd",
  "Funnier in person",
  "The cake is a lie",
  "Has an adorable dog",
  "Owns too many board games",
  "Will start a book club",
  "Has far too many opinions on keyboards",
  "Bakes a lot of cookies",
  "Collects odd trivia",
  "Avid gamer"
];

function shuffle<K>(arr: K[]) {
  const newArr: K[] = Array(arr.length).fill(null);
  arr.forEach((val) => {
    let newIdx = Math.floor(Math.random() * arr.length);
    while (newArr[newIdx] !== null) {
      newIdx = (newIdx + 1) % arr.length;
    }
    newArr[newIdx] = val;
  });
  return newArr;
}

export default function createFunFactClouds(offset: number) {
  const colors = shuffle(CloudColors);
  const imgs = shuffle(Clouds);
  const lefts = [10, 20, 30, 40, 50, 60, 70, 80, 90];

  return Facts.map((fact, idx) => {
    const color = colors[idx % colors.length];
    const img = imgs[idx % Clouds.length];
    const speed = Math.ceil(Math.random() * 4);

    const left = lefts[idx % lefts.length];
    const offsetRand = Math.random();

    const cloudStyle = {
      height: "300px",
      width: "300px",
      padding: "20px",
      backgroundColor: color,
      maskImage: `url("icons/${img}")`,
      maskSize: "300px",
    };

    return (
      <ParallaxLayer
        key={idx}
        offset={offset + offsetRand}
        speed={speed}
        style={{
          display: "flex",
          paddingLeft: `${left}%`,
        }}
      >
        <div className="fact_cloud" style={cloudStyle}>
          <Typography
            variant="h6"
            style={{
              position: "relative",
              top: "50%",
              textAlign: "center",
            }}
          >
            {fact}
          </Typography>
        </div>
      </ParallaxLayer>
    );
  });
}
