"use client";
import React from "react";
import SectionHeading from "../section-heading";
import { FaPaperPlane } from "react-icons/fa";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/action/sendEmail";

function Contact() {
  const { ref } = useSectionInView("Contact");

  return (
    <motion.section
      ref={ref}
      className="scroll-mt-28 mb-28 sm:mb-40 w-[min(100%,38rem)] text-center"
      id="contact"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Contact me</SectionHeading>
      <p className="text-gray-700 -mt-6">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:semenjakpetang176@gmail.com">
          semenjakpetang176@gmail.com
        </a>{" "}
        or through this form.
      </p>
      <form
        className="group mt-10 flex flex-col"
        action={async (formData) => {
          await sendEmail(formData);
        }}
      >
        <input
          placeholder="Your email"
          className="h-14 px-4 rounded lg border borderBlack"
          type="email"
          name="senderEmail"
          required
          maxLength={500}
        />
        <textarea
          placeholder="Your message"
          className="h-52 my-3 rounded-lg  p-4"
          name="message"
          required
          maxLength={500}
        ></textarea>
        <button
          className="flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 hover:bg-gray-950 focus:scale-110 hover:scale-110 active:scale-105 text-white rounded-full outline-none transition-all"
          type="submit"
        >
          Submit{" "}
          <FaPaperPlane className="group-hover:translate-x-1 group-hover:-translate-y-1  text-xs opacity-70 transition-all" />
        </button>
      </form>
    </motion.section>
  );
}

export default Contact;
