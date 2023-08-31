"use client";
import React from "react";
import SectionHeading from "../section-heading";
import { FaPaperPlane } from "react-icons/fa";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/action/sendEmail";
import SubmitBtn from "../submit-btn";
import toast from "react-hot-toast";

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
      <p className="text-gray-700 -mt-6 dark:text-white/80">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:semenjakpetang176@gmail.com">
          semenjakpetang176@gmail.com
        </a>{" "}
        or through this form.
      </p>
      <form
        className="group mt-10 flex flex-col dark:text-black"
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);
          if (error) {
            toast.error(error);
            return;
          }
          toast.success("Email sent successfully!");
        }}
      >
        <input
          placeholder="Your email"
          className="h-14 px-4 rounded lg border borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all"
          type="email"
          name="senderEmail"
          required
          maxLength={500}
        />
        <textarea
          placeholder="Your message"
          className="h-52 my-3 rounded-lg  p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all"
          name="message"
          required
          maxLength={500}
        ></textarea>
        <SubmitBtn />
      </form>
    </motion.section>
  );
}

export default Contact;
