import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
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
      "After a 6-month full-stack web dev bootcamp at Norma Academy, I interned for 3 months at ReflexITSolution, focusing on backend development and learning real-world web development best practices. Worked on Express.Js for creating Authentication and Authorization Part .",
    icon: React.createElement(LuGraduationCap),
    date: "2022/01/10-2022/03/15",
  },
  {
    title: "Full Stack MERN Developer",
    location: "Freelance/Contract Based",
    description:
      "Worked on E-commerce Project , Although My task was mainly focused on backend I was working on frontend and deployement Part as well . Build the E-commerce from groudup-scratch with Typescript MERN Tech Stack .",
    icon: React.createElement(CgWorkAlt),
    date: "2023/09/10-now",
  },
  {
    title: "Full Stack Web Developer at Hyperce",
    location: "remote",
    description:
      "Joined Hyperse team as a full stack web dev .",
    icon: React.createElement(CgWorkAlt),
    date: "2023/10/01 - now",
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
      "I have successfully completed more than 15+ minor projects, showcasing a wide range of skills and interests. Some of these projects include Natours API, Language Translator, Typing Training, Transaction App, Ludo Game, Snake Game, Blind Guess Game, and many more. You can explore all of these projects on my GitHub profile .",
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
  "GraphQL",
] as const;
