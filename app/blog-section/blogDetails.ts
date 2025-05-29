export type blogProps = {
  title: string;
  image: string;
  date: string;
  url: string;
  available: boolean;
  index: number;
};

export const blogDetails = [
{
  title: "Google Project Management Certificate",
  image: "/projects/google-project-management.png",
  date: "MAY 2025",
  url: "https://grow.google/intl/pt/",
  available: true,
}
,
  {
    title: "Project Management for Beginners (PMI)",
    image:
      "/projects/pmi.avif",
    date: "MAY 2025",
    url: "https://www.pmi.org/shop/p-/elearning/project-management-basics---an-official-pmi-online-course/16125",
    available: true,
  },
  {
    title:
      "PMBOK® Guide 7th Edition (PMI)",
    image:
      "/projects/pmbok.jpg",
    date: "JUN 2025",
    url: "https://www.academiaplaorc.com.br/wp-content/uploads/2024/07/Guia-PMBOK-7a-Edicao.pdf",
    available: true,
  },
];
