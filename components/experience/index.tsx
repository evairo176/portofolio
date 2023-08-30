"use client";
import React from "react";
import SectionHeading from "../section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";

function Experience() {
  const { ref } = useSectionInView("Experience");
  return (
    <section ref={ref} className="scroll-mt-28 mb-28 sm:40" id="experience">
      <SectionHeading>My Experiences</SectionHeading>
      <VerticalTimeline lineColor="">
        {experiencesData?.map((row, key) => {
          return (
            <VerticalTimelineElement
              contentStyle={{
                background: "f3f4f6",
                boxShadow: "none",
                border: "1px solid rgba(0,0,0,0.05)",
                textAlign: "left",
                padding: "1.3rem 2rem",
              }}
              contentArrowStyle={{
                borderRight: "0.4rem solid #9ca3af",
              }}
              date={row?.date}
              icon={row?.icon}
              iconStyle={{
                background: "white",
                fontSize: "1.5rem",
              }}
              key={key}
            >
              <h3 className="font-semibold capitalize">{row?.title}</h3>
              <p className="font-normal !mt-0">{row?.location}</p>
              <p className="!mt-1 !font-normal text-gray-700">
                {row?.description}
              </p>
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </section>
  );
}

export default Experience;
