import { About, Intro, Project, SectionDivider, Skills } from "@/components";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivider />
      <About />
      <Project />
      <Skills />
    </main>
  );
}
