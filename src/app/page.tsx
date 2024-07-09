"use client"

import Projects from "@/components/Main/Projects/Projects";
import Skills from "@/components/Main/Skills/skills";
import { useState, useEffect } from "react";
import "./header.css"
import AboutMe from "@/components/Main/AboutMe";
import { getHardSkills, getProjects } from "@/utils/request";
import ServicesSection from "@/components/Main/serviceSection/services";
import Experience from "@/components/Main/Experience/experience";





export default function Home(){

    const [theme, setTheme] = useState(false);
    const [data, SetData] = useState({projects: null, hard_skills: null});
    const [techSkills, setTechSkills] = useState("Back End");

    const toggleTheme = ()=>{
        setTheme(!theme);
    }

    const toggleTechSkills = (techSkill: string)=>{
        setTechSkills(techSkill)
    }

    

    useEffect(()=>{
        async function promises(){
          const promises = await Promise.all([getProjects(), getHardSkills()]);

            return promises
        }

        promises().then((datas)=>{
            SetData({
                projects: datas[0],
                hard_skills: datas[1]
            })
        }).catch((e)=>{
            console.log("error", e)
        })

        
    },[])



    return(
        <div className={`w-screen h-auto ${theme ? "bg-white text-black" : "bg-gray-900 text-white"}`}>
            <header className="w-screen h-[690px]">
                <section className="w-full h-full flex flex-col items-center justify-center">
                    <div className="flex flex-col items-center justify-center gap-1">
                        <span id="header_animation1" className="text-gray-400 text-lg">Eric Soares</span>
                        <h1 id="header_animation2"
                        className="text-5xl font-bold flex gap-2
                        max-2xl:text-4xl
                        max-md:flex-col
                        max-md:text-center
                        "> 
                            <strong className="firstanimated inline-block text-transparent">Developing</strong>
                            <span className="">amazing</span> 
                            <strong className="firstanimated inline-block text-transparent">solutions</strong>
                            <span>for your</span>
                            <span className="secondanimated inline-block text-transparent">business.</span>
                        </h1>
                        <h2 id="header_animation3" className="text-gray-400 text-lg">Full Stack Devoloper</h2>
                    </div>  
                </section>
            </header>
            <main className="w-full h-auto flex flex-col items-center justify-center gap-8 mb-8">
                <AboutMe className="aboutMe"/>
                <ServicesSection theme={theme}/>
                <Skills toogleTechSkills={toggleTechSkills} currentSkill={techSkills} skills={data.hard_skills}/>
                <section className="w-full h-[100px] mb-5"></section>
                <Projects projects={data.projects}></Projects>
                <Experience />
            </main>
            <footer className="w-full h-[400px] border-t-[1px]">

            </footer>
        </div>
    )

}

/**
 * <Header theme={theme} toggleTheme={toggleTheme}/>
            <main className="w-full h-auto flex flex-col items-center">
                <MainSkills />
                <Services/>
                <Projects />
                <section className="w-full h-[100px]"></section>
                <Skills toogleTechSkills={toggleTechSkills} currentSkill={techSkills}/>
                <section className="w-full h-[100px]">
                   
                </section>
            </main>
 */