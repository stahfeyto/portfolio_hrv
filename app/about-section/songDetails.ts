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
    link: "https://open.spotify.com/intl-pt/track/0b0loQ8uNkOCF9VBWXIuI6?si=c9bc8b44b7cf42c9",
  },
  {
    title: "Martin's Sofa",
    artist: "Headie One",
    image: require("../../public/songs/html.png"),
    link: "https://open.spotify.com/intl-pt/track/2yMTUaAv55qoTD0JPLodIQ?si=b16db543288e4f2c",
  },
  {
    title: "Let Me Go",
    artist: "Daniel Ceasar",
    image: require("../../public/songs/js.png"),
    link: "https://open.spotify.com/intl-pt/track/0dKgbCUSt2Ig01fWrPriHk?si=dfa89a728d7247ca",
  },
  {
    title: "One Up",
    artist: "Central Cee",
    image: require("../../public/songs/ts2.webp"),
    link: "https://open.spotify.com/intl-pt/track/1nnFZioZrw6CRfiUk8KIEE?si=bd9a62e0450a4026",
  },
  {
    title: "Lemme Land?",
    artist: "Canking, Ess2Mad",
    image: require("../../public/songs/tailwind.jpg"),
    link: "https://open.spotify.com/intl-pt/track/0EgaCa0seSgemq1f0uB5r1?si=cd12181cc6e04bb1",
  },
  {
    title: "Glitter",
    artist: "BENEE",
    image: require("../../public/songs/nextjs.webp"),
    link: "https://open.spotify.com/intl-pt/track/4p1C7lssRJgOkdpPWlb6s1?si=a661bc7d4d9a43ee",
  },
  {
    title: "Care",
    artist: "Sonder",
    image: require("../../public/songs/redux.png"),
    link: "https://open.spotify.com/intl-pt/track/1NCuYqMc8hKMb4cpNTcJbD?si=745c9969c2a84a7c",
  },
  {
    title: "22 Double 0",
    artist: "Unknown T",
    image: require("../../public/songs/echarts.webp"),
    link: "https://open.spotify.com/intl-pt/track/6QxhDCNBJWuKsNShriNE43?si=5d261c3115424df2",
  },

  // BACKEND
  {
    title: "Nice & Good",
    artist: "SL, Knucks",
    image: require("../../public/songs/nodejs.jpg"),
    link: "https://open.spotify.com/intl-pt/track/5nPbKG04fhLkIAjcPFaZq7?si=fbf279a89aa545ff",
  },

  // BASE DE DADOS
  {
    title: "Floods",
    artist: "Lucky Daye",
    image: require("../../public/songs/mysql.png"),
    link: "https://open.spotify.com/intl-pt/track/5IM14v94odKKBZfpFjWmoH?si=319922d2e9954048",
  },
];
