export type ProjectProps = {
  id: number;
  name: string;
  description: string;
  technologies: string[];
  github: string;
  demo: string;
  image: string;
  available: boolean;
  alt?: string;
  className?: string;
};

export const devProjects = [
  {
    id: 0,
    name: "Internship Report",
    description:
      "Internship project focused on a Financial Dashboard, aimed at helping companies better understand their numbers. This document presents the internship report.",
    technologies: ["React", "Tailwind CSS", "Echarts"],
    github: "https://github.com/stahfeyto",
    demo: "https://drive.google.com/file/d/1plpzMYtFCSSqDmqx74fSqo684P8ZhJxI/view?usp=sharing",
    image: require(".//../../public/projects/osbvt.png"),
    className: "rounded-t-3xl -mt-4 w-full",
    available: true,
  },
  {
    id: 1,
    name: "RStart",
    description:
      "A project developed for a university course, this app evaluates multiple options and recommends the one that best suits our specific needs",
    technologies: ["PHP", "HTML", "CSS", "JS"],
    github: "https://github.com/stahfeyto",
    demo: "https://github.com/stahfeyto/RStart.",
    image: require(".//../../public/projects/rstart.png"),
    available: true,
  },
  {
    id: 2,
    name: "Visah portfolio",
    description:
      "A modern and minimalist portfolio, designed purely for fun. This project reflects my passion for clean design, smooth user experience, and attention to detail. Built from scratch, it serves as a creative space where I experiment with new ideas, animations, and frontend technologies.",
    technologies: ["HTML", "CSS", "JS"],
    github: "https://github.com/stahfeyto",
    demo: "https://github.com/stahfeyto/portfolio",
    image: require(".//../../public/projects/port.png"),
    available: true,
  },
  

   {
      id: 3,
    name: "Tic Tac Todo",
    description:
        "This application is a To-Do app similar to Microsoft's To Do, but with more advanced features. It also includes a dashboard section for analyzing tasks.",
      technologies: ["React", "Tailwind CSS", "Shandcn"],
      github: "https://github.com/stahfeyto",
    demo: "https://github.com/stahfeyto/ToDo",
    image: require(".//../../public/projects/tic_tac_todo.png"),
    available: true,
  },

 {
   id: 4,
    name: "MS Project",
    description:
     "This last project is more aligned with the career path I intend to follow in the future — project management. To pursue this goal, I need to learn a wide range of skills, and this project is one of the many steps in that learning journey.",
    technologies: ["..."],
    github: "https://github.com/stahfeyto",
     demo: "",
     image: require(".//../../public/projects/msproject.jpg"),
     available: false,
   },
];

