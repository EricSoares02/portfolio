'use client'
import AboutMe from "@/components/about/aboutMe";
import Skills from "@/components/skills/skill";
import Business from "@/components/business/business";
import Projects from "@/components/projects/projects";



export default function Home() {
  return (
    <>
      <AboutMe/>
      <Business/>
      <Projects/>
      <Skills/>
    </>
  );
}
