"use client"

import Projects from "@/components/Main/Projects/Projects";
import Skills from "@/components/Main/Skills/skills";
import { useState, useEffect } from "react";
import Link from "next/link";
import "./header.css"
import AboutMe from "@/components/Main/AboutMe";
import { getHardSkills, getProjects, getExperiences } from "@/utils/request";
import ServicesSection from "@/components/Main/serviceSection/services";
import Experience from "@/components/Main/Experience/experience";
import GitHubSvg from "@/components/svgs/midia/GitHub.svg";
import LinkedinSvg from "@/components/svgs/midia/LinkedIn.svg";
import { links } from "@/utils/links";
import InstagramSvg from "@/components/svgs/midia/Instagram";
import Image from 'next/image';




export default function Home(){

    
    const [data, SetData] = useState({projects: null, hard_skills: null, experience: null});
    const [techSkills, setTechSkills] = useState("Back End");

  

    const toggleTechSkills = (techSkill: string)=>{
        setTechSkills(techSkill)
    }

    

    useEffect(()=>{
        async function promises(){
          const promises = await Promise.all([getProjects(), getHardSkills(), getExperiences()]);
                
            return promises
        }

        promises().then((datas)=>{
            SetData({
                projects: datas[0],
                hard_skills: datas[1],
                experience: datas[2]
            })
        }).catch((e)=>{
            console.log("error", e)
        })

        
    },[]);

  

    return(
        <>
            <header className="add_hero w-full h-[690px] flex justify-center
            max-md:h-[870px]
            ">
                <div 
                className="w-4/5 h-auto flex
                max-md:w-11/12
                max-md:flex-col-reverse
                ">
                    <div className="w-1/2 h-full flex flex-col gap-10
                    max-md:w-full
                    max-md:h-1/2
                    ">
                        <div className="w-full h-[400px] flex justify-center items-end gap-4">
                            <h1 className="text-4xl font-bold mb-1
                            max-md:text-3xl
                            ">
                                Olá, <br /> Eu sou{" "}
                                <span className="bg-gradient-to-r from-amber-500 to-pink-500 inline-block text-transparent bg-clip-text">
                                Eric Soares, 
                                </span>
                                {" "}atuo como 
                                <span className="bg-gradient-to-r from-amber-500 to-pink-500 inline-block text-transparent bg-clip-text">
                                {" "}Desenvolvedor de Software Full Stack. 
                                </span>
                            </h1>
                        </div>
                        <div className="w-full h-20 flex items-center gap-4">
                            <Link href={links.git} target="_blank"><GitHubSvg size="34px" color="#ffffff"/></Link>
                            <Link href={links.linkedIn} target="_blank"><LinkedinSvg size="34px" color="#ffffff"/></Link>
                            <Link href={links.insta} target="_blank"><InstagramSvg size="34px" color="#ffffff"/></Link>
                        </div> 
                        <div className="w-full h-24 flex gap-10">
                            <Link href="#expirience"
                            className="w-44 h-12 text-sm flex justify-center items-center duration-300 bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-600 font-medium 
                            focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 rounded-lg
                            hover:scale-110
                            "
                            >Veja meu currículo</Link>
                        </div>
                    </div>
                    <div className="w-1/2 h-full flex justify-center items-center
                    max-md:w-full
                    max-md:h-1/2
                    max-md:mb-20
                    ">
                        <iframe className="w-72 h-72" src="https://lottie.host/embed/15efb473-eded-4d79-b056-6d951e7f1e2a/HjJilOuYFR.json"></iframe> 
                    </div>
                </div>
            </header>
            <main className="w-full h-auto flex flex-col items-center justify-center mb-8">
                <AboutMe className="aboutMe"/>
                <ServicesSection/>
                <Skills toogleTechSkills={toggleTechSkills} currentSkill={techSkills} skills={data.hard_skills}/>
                <Projects projects={data.projects}></Projects>
                <Experience experiences={data.experience}/>
            </main>
            <footer className="w-full h-32 border-t-[1px] border-gray flex items-center justify-center">
                <div className="w-4/5 h-full flex items-center justify-between">
                    <span className="w-1/2 text-sm
                    max-md:w-10/12
                    ">© Developer by Eric Soares</span>
                    <div className="w-1/2 h-20 flex items-center justify-end gap-4">
                            <Link href={links.git} target="_blank"><GitHubSvg size="34px" color="#ffffff"/></Link>
                            <Link href={links.linkedIn} target="_blank"><LinkedinSvg size="34px" color="#ffffff"/></Link>
                            <Link href={links.insta} target="_blank"><InstagramSvg size="34px" color="#ffffff"/></Link>
                    </div> 
                </div>
            </footer>
        </>
    )

}

// <iframe className="w-72 h-72" src="https://lottie.host/embed/dc2cb484-f0f4-45c3-b117-2c3c8841aa87/2zJL1p9cDs.json"></iframe>
