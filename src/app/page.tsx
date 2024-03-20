'use client'
import Header from "@/components/header/header";
import AboutMe from "@/components/about/aboutMe";
import Image from "next/image";


export default function Home() {
  return (
    <>
    <Header/>
    <main>
      <AboutMe/>
    </main>
    </>
  );
}
