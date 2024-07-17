import Image from "next/image"
import "./animation.css"; 
import Skill from "./skill";
import ArrowSvg from "@/components/svgs/arrow";

type props = {
    toogleTechSkills: (techSkill: string) => void,
    currentSkill: string,
    skills: {
        name: string,
        imageIdAtDrive: string,
        category: string
    }[] | null
}


export default function Skills({skills, toogleTechSkills, currentSkill}: props){


    function ShowTechSkills(currunt_skill: string, button_skill: string){
      
        if(currunt_skill=== button_skill){
            return "tech-skill flex"
        }

        return "hidden"

    }


    function RotateArrow(currunt_skill: string, button_skill: string){
        if(currunt_skill=== button_skill){
            return "rotate-180"
        }
       
    }

    if(skills === null){
        return (
            <section className="w-11/12 h-auto min-h-[700px] flex 
            max-md:flex-col
            ">
                <div className="w-1/2 h-[500px] flex flex-col px-[10%] justify-center 
                max-md:hidden
                ">
                    <span className="text-4xl font-extrabold">Sobre minhas</span>
                    <h1 className="animatedText text-4xl font-extrabold">habilidades técnicas</h1>
                    <h2 className="text-sm text-gray-400">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo quo quas necessitatibus impedit molestiae. </h2>
                </div>
                <div className="w-1/2 h-full flex justify-center items-center
                max-md:w-full 
                ">
                    <span>Download Data Error</span>
                </div>
            </section>
    )
    }
    return (
        <section className="w-11/12 h-auto min-h-[700px] flex mb-28
        max-md:flex-col
        ">
            <div className="w-1/2 h-[500px] flex flex-col px-[10%] justify-center 
            max-md:hidden
            ">
                <span className="text-4xl font-extrabold">Sobre minhas</span>
                <h1 className="animatedText text-4xl font-extrabold">habilidades técnicas</h1>
                <h2 className="text-sm text-gray-400">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo quo quas necessitatibus impedit molestiae. </h2>
            </div>
            <div className="w-1/2 h-full flex flex-col items-center
            max-md:w-full 
            ">
                <h1 className="w-full h-16 text-lg text-gray-500 font-semibold hidden
                max-md:flex
                ">Minhas Tecnologias</h1>
                <nav className="w-full h-full
                max-md:h-5/6
                ">
                    <ul className="w-full h-full">
                        <li className="w-full h-auto flex-col items-center border-b-[1px]">
                            <button className="w-full h-24 flex items-center justify-between font-semibold" 
                            onClick={()=>toogleTechSkills("Back End")}>
                            Back End <span className={RotateArrow(currentSkill, "Back End")}><ArrowSvg size="25px" color="#ffffff"/></span></button>
                            <div className={`${ShowTechSkills(currentSkill, "Back End")} w-full h-[400px]`}>
                                <Skill skills={skills.filter((skill)=>skill.category === "Back End"|| skill.category==="Full Stack")}/>
                            </div>
                        </li>
                        <li className="w-full h-auto flex-col items-center border-b-[1px]">
                            <button className="w-full h-24 flex items-center justify-between font-semibold" 
                            onClick={()=>toogleTechSkills("Front End")}>
                            Front End <span className={RotateArrow(currentSkill, "Front End")}><ArrowSvg size="25px" color="#ffffff"/></span></button>
                            <div className={`${ShowTechSkills(currentSkill, "Front End")} w-full h-[300px]`}>
                                <Skill skills={skills.filter((skill)=>skill.category === "Front End" || skill.category==="Full Stack")}/>
                            </div>
                        </li>
                        <li className="w-full h-auto flex-col items-center border-b-[1px]">
                            <button className="w-full h-24 flex items-center justify-between font-semibold" 
                            onClick={()=>toogleTechSkills("Banco de Dados")}>
                            Banco de Dados <span className={RotateArrow(currentSkill, "Banco de Dados")}><ArrowSvg size="25px" color="#ffffff"/></span></button>
                            <div className={`${ShowTechSkills(currentSkill, "Banco de Dados")} w-full h-[300px]`}>
                                <Skill skills={skills.filter((skill)=>skill.category === "Banco de Dados")}/>
                            </div>
                        </li>
                        <li className="w-full h-auto flex-col items-center border-b-[1px]">
                            <button className="w-full h-24 flex items-center justify-between font-semibold" 
                            onClick={()=>toogleTechSkills("Mobile")}>
                            Mobile <span className={RotateArrow(currentSkill, "Mobile")}><ArrowSvg size="25px" color="#ffffff"/></span></button>
                            <div className={`${ShowTechSkills(currentSkill, "Mobile")} w-full h-[200px]`}>
                                <Skill skills={skills.filter((skill)=>skill.category === "Mobile")}/>
                            </div>
                        </li>
                        <li className="w-full h-24 flex items-center border-b-[1px] font-semibold">Design e Produto</li>
                    </ul>
                </nav>
            </div>
        </section>
    )
}