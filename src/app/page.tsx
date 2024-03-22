"use client";
import AboutMe from "@/components/about/aboutMe";
import Skills from "@/components/skills/skill";
import Business from "@/components/business/business";
import Projects from "@/components/projects/projects";
import Contacts from "@/components/contacts/contact";


export default function Home() {
  return (
    <>
      <AboutMe />
      <Business />
      <Projects />
      <Skills />
      <Contacts />
    </>
  );
}
