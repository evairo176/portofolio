import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
// import corpcommentImg from "@/public/corpcomment.png";
// import rmtdevImg from "@/public/rmtdev.png";
// import wordanalyticsImg from "@/public/wordanalytics.png";
import paymentXenditCustom from "@/public/payment-xendit-custom.png";
import tnosPwa from "@/public/tnos-pwa.png";
import myBlog from "@/public/my-blog.png";
import appstore from "@/public/appstore.jpg";
import news from "@/public/news.png";

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
    title: "Study di ploma 3",
    location: "Politeknik Negeri Indramayu, Jawa Barat",
    description:
      "I graduated after 3 years of studying. I immediately found a job as a full-stack developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019 - 2022",
  },
  {
    title: "Full-stack Web Developer",
    location: "PT. Xtreme Network Sistem, Jakarta",
    description:
      "I worked as a full-stack web developer for 9 month in 1 job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - 2023",
  },
  {
    title: "Full-Stack Developer",
    location: "KPN Plantation, Jakarta",
    description:
      "I'm now a full-stack developer working as a full-time. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2023 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Payment Costum Xendit",
    description:
      "Make payments easier with Xendit special payments such as Credit Cards, Bank Transfers, E-Wallets & QR Codes",
    tags: ["React.js", "Laravel", "CSS", "Mysql", "Xendit"],
    imageUrl: paymentXenditCustom,
  },
  {
    title: "PWA Tnos Website",
    description:
      "I work as a full-stack developer at this startup project for 9 months. Users can log in, register and carry out transactions on body guard ordering services, creating legal documents, online legal consultations using the custom Xendit payment method.",
    tags: [
      "React.js",
      "Laravel",
      "CSS",
      "Mysql",
      "Xendit",
      "Google Map",
      "Sendgrid Email",
    ],
    imageUrl: tnosPwa,
  },
  {
    title: "Blog",
    description:
      "I created this blog website to share some of the ways I do in the world of programming or anything else.",
    tags: ["TypeScript", "Next.js", "Tailwind", "Directus js", "Postgree"],
    imageUrl: myBlog,
  },
  {
    title: "App Store",
    description:
      "Easy Android and iOS food ordering application with MidTrans online payment.",
    tags: ["React Native", "Laravel", "Midtrans"],
    imageUrl: appstore,
  },
  {
    title: "News",
    description:
      "A leading news portal offering the latest news and in-depth analysis across various fields, including politics, economics, entertainment, and technology.",
    tags: ["Laravel"],
    imageUrl: news,
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
  "Express",
  "PostgreSQL",
  "Python",
  "Framer Motion",
  "Midtrans",
  "Xendit",
] as const;
