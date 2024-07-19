import Skill from "../Types/Skill";
import Dotnet from "../assets/Skills/DOTNET.png";
import AspNet from "../assets/Skills/ASP.NET.png";
import React from "../assets/Skills/atom.png";
import CSharp from "../assets/Skills/c-sharp.png";
import git from "../assets/Skills/git.png";
import mysql from "../assets/Skills/mysql.png";
import typescript from "../assets/Skills/typescript.png";
import tailwind from "../assets/Skills/tailwind.png";
import gsap from "../assets/Skills/gsap.png";
interface NavigationType {
  name: string;
  url: string;
}
export const Navigations: NavigationType[] = [
  { name: "Home", url: "#Home" },
  { name: "Skills", url: "#Skills" },
  { name: "Contact", url: "#Contact" },
];

export const AboutMe = {
  Position: "Web Developer",
  Company: "Freelancer",
  about:
    "A self-taught web developer, working as freelancer for 1+ years now. I make meaningful and delightful digital products that create an equilibrium between user needs and business goals.",
};

export const skills: Skill[] = [
  { id: 1, image: Dotnet, title: "Dotnet Core" },
  { id: 2, image: AspNet, title: "ASP.NET" },
  { id: 3, image: CSharp, title: "C Sharp" },
  { id: 4, image: React, title: "React JS" },
  { id: 5, image: mysql, title: "MYSQL" },
  { id: 6, image: typescript, title: "TypeScript" },
  { id: 7, image: tailwind, title: "Tailwind CSS" },
  { id: 8, image: gsap, title: "GSAP" },
  { id: 9, image: git, title: "GIT" },
];
