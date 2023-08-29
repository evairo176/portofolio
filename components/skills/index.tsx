"use client";
import React from "react";
import SectionHeading from "../section-heading";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

const fadeIn = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (key: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * key,
    },
  }),
};

function Skills() {
  const { ref } = useSectionInView("Skills");

  return (
    <section
      ref={ref}
      className="mb-28 m-w-[53rem] scroll-mt-28 text-center sm:mb-40"
      id="skills"
    >
      <SectionHeading>My Skills</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {skillsData?.map((row, key) => {
          return (
            <motion.li
              className="bg-white border border-black/[0.1] rounded-xl px-5 py-3"
              key={key}
              variants={fadeIn}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true,
              }}
              custom={key}
            >
              {row}
            </motion.li>
          );
        })}
      </ul>
    </section>
  );
}

export default Skills;
