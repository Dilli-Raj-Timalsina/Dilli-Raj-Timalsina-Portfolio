import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import educateWorld from '@/public/educateWorld.png'
import nepalaya from "@/public/nepalaya.png";
import translator from "@/public/translator.png";
import typingSpeed from "@/public/typingSpeed.png";
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
    title: "Freelance | contract",
    location: "remote",
    description:
      "Developed a full-fledged E-commerce site using React.js, Next.js, Daisyui, TypeScript, Express, PostgreSQL,  AWS S3. Built an efficient Admin Panel, integrated Stripe payments with webhooks, and deployed on AWS EC2 with CI/CD via GitHub Actions. Enhanced SEO through Next.js SSR, ensuring 100% client satisfaction.",
    icon: React.createElement(LuGraduationCap),
    date: "oct/2023 - present",
  },
  {
    title: "Hyperce | full stack developer",
    location: "remote",
    description:
      "Enhanced Kutt URL shortener: configured Tailwind on CSS, implemented paid plan authorization with knex.js, seamlessly integrated Stripe payments in a 10k+ lines codebase.",
    icon: React.createElement(CgWorkAlt),
    date: "sep/2023  - dec/2023",
  },
  {
    title: "ReflexItSolution | Backend Intern",
    location: "OnSite/Nepal",
    description:
      "Strengthened security with passport.js for Authentication and Authorization, addressing CSRF, DDOS, and XSS threats. Led four diverse projects for the Nepal government, showcasing adaptability. Awarded Most Consistent Intern (MCI), winning $500 among five interns.",
    icon: React.createElement(CgWorkAlt),
    date: "  Jan/2022   -  Aug/2023 ",
  },
  
] as const;

export const projectsData = [
  {
    title: "Educate World ( Mega Project )",
    description:
      "Headless API for AWS S3 uploads, React streaming, CMS for courses. Features: commenting, search, filter, sort, pagination, checkout, profiles, ratings, top-notch security. 🚀",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma" , "Typescript" , "Express" ,"Framer-motion" ,"AWS-SDK"],
    imageUrl: educateWorld,
    link:"https://nextjssite-mu.vercel.app/"
  },
   {
    title: "Nepalaya Bazzar",
    description:
      "Crafted a React-Next.js Ecommerce site , Ace Admin Panel using s3 pre-signed URLs, Stripe payments with webhooks. Deployed on AWS EC2 via GitHub Actions. SEO boosted with Next.js SSR.🚀",
    tags: ["React", "Next.js", "PostgreSQL", "Tailwind", "Prisma" , "Typescript" , "Express" ,"AWS-SDK"],
    imageUrl: nepalaya,
    link:"https://ecommerce-ashy-nine.vercel.app/"
  },
  
   {
    title: "Language Translator",
    description:
      "The project uses the mymemory API for translation, employs JavaScript's SpeechSynthesisUtterance() for pronunciation, and includes features like clipboard copy, reverse translation, and pronunciation",
    tags: ["Html","CSS","Javascript","mymemory"],
    imageUrl: translator,
    link:"https://language-trans-by-dillirajtimalsina.netlify.app/"
  },
     {
    title: "Typing Test",
    description:
      " The typing test game, made with HTML, CSS, and JavaScript, tracks keyboard clicks, providing metrics like mistakes, words per minute, correct words, and updating remaining time.",
    tags: ["Html","CSS","Javascript","event"],
    imageUrl: typingSpeed,
    link:"https://typing-speed-test-dillirajtimalsina.netlify.app/"
  },
 
  {
    title: "Minor Projects",
    description:
      "I have completed 15+ minor project, showcasing a wide range of skills and interests. Some of these projects include Natours API, Transaction App, Ludo Game, Snake Game, edxplor , leetcode clone , Blind Guess Game, and many more. You can explore all of these projects on my GitHub profile ",
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
