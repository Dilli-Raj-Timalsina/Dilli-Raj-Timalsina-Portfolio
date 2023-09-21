import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: " Backend Developer Intern",
    location: "Nepal, Kathmandu",
    description:
      "After a 6-month full-stack web dev bootcamp at Norma Academy, I interned for 3 months at ReflexITSolution, focusing on backend development and learning real-world web development best practices.",
    icon: React.createElement(LuGraduationCap),
    date: "2022",
  },
  {
    title: "Full Stack Web Developer",
    location: "remote",
    description:
      "I served as a full-stack web developer during my tenure, constructing a functional business solution for a freelance client based in Nepal. My work involved creating a fully managed EdTech API and implementing a headless UI .",
    icon: React.createElement(CgWorkAlt),
    date: "2023",
  },
  
] as const;

export const projectsData = [
  {
    title: "HeadLess Ed-Tech",
    description:
      "Complete business solution with AWS S3 course uploads, course consumption, managed API backend, integrated payments, advanced course management (filtering, sorting, pagination), and established email services.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma" , "Typescript" , "Express" ,"Framer-motion" ,"AWS-SDK"],
    imageUrl: corpcommentImg,
    link:"https://nextjssite-mu.vercel.app/"
  },
  
  {
    title: "Minor Projects",
    description:
      "I have successfully completed more than 15+ minor projects, showcasing a wide range of skills and interests. Some of these projects include Natours API, Language Translator, Typing Training, Transaction App, Typing Speed, Ludo Game, Snake Game, Blind Guess Game, and many more. You can explore all of these projects on my GitHub profile .",
    tags: [],
    imageUrl: wordanalyticsImg,
    link:"https://github.com/Dilli-Raj-Timalsina"
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "AWS",
  "Docker",
  "Express",
  "PostgreSQL",
  "Java",
  "Mongoose",
  "Framer Motion",
] as const;
