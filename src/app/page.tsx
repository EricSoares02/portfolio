"use client"

import Header from "@/components/Header/Header";
import AboutMe from "@/components/Main/AboutMe";
import Projects from "@/components/Main/Projects/Projects";
import Services from "@/components/Main/Services/Services";
import MainSkills from "@/components/Main/Skills/MainSkills/mainSkills";
import { useState } from "react";



export default function Home(){

    const [theme, setTheme] = useState(false);

    const toggleTheme = ()=>{
        setTheme(!theme);
    }


    return(
        <div className={`w-screen h-auto ${theme ? "bg-white text-black" : "bg-slate-900 text-white"}`}>
            <Header theme={theme} toggleTheme={toggleTheme}/>
            <main className="w-full h-auto flex flex-col items-center">
                <AboutMe />
                <MainSkills />
                <Services/>
                <Projects />
                <section className="w-full h-[600px]"></section>
            </main>
        </div>
    )

}