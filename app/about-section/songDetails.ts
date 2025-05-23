export type SongProps = {
  title: string;
  artist: string;
  image: string;
  link: string;
};

export const songs: SongProps[] = [
  // FRONTEND
  {
    title: "Lie Again",
    artist: "Giveon",
    image: require("../../public/songs/figma.webp"),
    link: "https://open.spotify.com/album/11q4Tt1RzwrFzF2Vddc2yO",
  },
  {
    title: "Martin's Sofa",
    artist: "Headie One",
    image: require("../../public/songs/html.png"),
    link: "https://open.spotify.com/album/5ywIBJnydB9IMqgg0XDU6O",
  },
  {
    title: "Let Me Go",
    artist: "Daniel Ceasar",
    image: require("../../public/songs/js.png"),
    link: "https://open.spotify.com/track/4AwJSk491AvHk2AAJReGzZ",
  },
  {
    title: "One Up",
    artist: "Central Cee",
    image: require("../../public/songs/ts2.webp"),
    link: "https://open.spotify.com/album/51A9bnCs9oq6vjFZIDza97",
  },
  {
    title: "Lemme Land?",
    artist: "Canking, Ess2Mad",
    image: require("../../public/songs/tailwind.jpg"),
    link: "https://open.spotify.com/track/4Fmr4dbY1sZiX77ZbljNFC",
  },
  {
    title: "Glitter",
    artist: "BENEE",
    image: require("../../public/songs/nextjs.webp"),
    link: "https://open.spotify.com/track/23TPP1eeElFfvYVznskwCY",
  },
  {
    title: "Care",
    artist: "Sonder",
    image: require("../../public/songs/redux.avif"),
    link: "https://open.spotify.com/track/3tkxfORwPo2zydAf25YFOc",
  },
  {
    title: "22 Double 0",
    artist: "Unknown T",
    image: require("../../public/songs/echarts.webp"),
    link: "https://open.spotify.com/track/0L0sXaqVYGpvXWcikG6zlk",
  },

  // BACKEND
  {
    title: "Nice & Good",
    artist: "SL, Knucks",
    image: require("../../public/songs/nodejs.jpg"),
    link: "https://open.spotify.com/album/2nZHGm0LbyWb9SQ48RWFdO",
  },

  // BASE DE DADOS
  {
    title: "Floods",
    artist: "Lucky Daye",
    image: require("../../public/songs/mysql.png"),
    link: "https://open.spotify.com/track/4GBjdj1z74h8RVr1Us6YFc",
  },
];
