"use client";
import React, { useRef } from "react";
import SectionHeading from "../section-heading";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import Link from "next/link";

function Project() {
  const { ref } = useSectionInView("Projects", 0.5);
  return (
    <section ref={ref} className="scroll-mt-28 mb-28" id="projects">
      <SectionHeading>My Projects</SectionHeading>
      <div>
        {projectsData?.map((project, key) => {
          return <ProjectComponent {...project} key={key} />;
        })}
      </div>
    </section>
  );
}

const ProjectComponent = ({
  title,
  description,
  tags,
  imageUrl,
  link,
}: (typeof projectsData)[number]) => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className="group mb-3 sm:mb-8 last:mb-0 scroll-mt-30"
      id="projects"
    >
      <section className="bg-gray-100 max-w-[42rem] border borderBlack rounded-lg overflow-hidden sm:pr-8 relative sm:h-[20rem] hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
        <Image
          src={imageUrl}
          alt="Project I worked on"
          quality={95}
          className="relative  block sm:hidden w-[100%] max-h-[300px] object-cover object-center rounded-t-lg shadow-2xl
      transition 
      group-hover:scale-[1.04]
      group-hover:-translate-x-3
      group-hover:translate-y-3
      group-hover:-rotate-2

      group-even:group-hover:translate-x-3
      group-even:group-hover:translate-y-3
      group-even:group-hover:rotate-2

      "
        />
        <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2  sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]">
          <Link href={link}>
            <h3 className="text-2xl font-semibold">{title}</h3>
          </Link>
          <p className="mt-2 text-sm leading-relaxed text-gray-700 dark:text-white/70 text-justify">
            {description}
          </p>
          <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
            {tags.map((tag, index) => (
              <li
                className="bg-black/[0.7] px-3 py-1 text-[9px] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>

        <Image
          src={imageUrl}
          alt="Project I worked on"
          quality={95}
          className="absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl
      transition 
      group-hover:scale-[1.04]
      group-hover:-translate-x-3
      group-hover:translate-y-3
      group-hover:-rotate-2

      group-even:group-hover:translate-x-3
      group-even:group-hover:translate-y-3
      group-even:group-hover:rotate-2

      group-even:right-[initial] group-even:-left-40"
        />
      </section>
    </motion.div>
  );
};

export default Project;
