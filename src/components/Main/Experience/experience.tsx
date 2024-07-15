import { ExperienceType } from "@/types/experienceType"
import ExperienceCard from "./experienceCard"
import Link from "next/link"
import "./animation.css"

interface props {
    experiences: ExperienceType[] | null
}

export default function Experience({experiences}: props){

    if(experiences === null){
        return (
            <div>download error</div>
    )
    }

    return(
        <section className="w-4/5 h-auto flex bg-gray-700 rounded-3xl
        max-md:flex-col
        max-lg:w-11/12 
        ">
            <div className="w-1/3 h-[500px] flex flex-col justify-center gap-16 pl-14
            max-md:w-full 
            max-md:items-center
            max-md:h-60
            max-md:pl-0

            ">
                <h1 className="text-3xl font-bold
                max-md:text-center
                max-md:pl-0
                ">
                    Minha <span className="animatedText">educação</span> e work experience.
                </h1>

                <Link href="https://drive.google.com/uc?export=download&id=1yeRkcU4Le65G3NPvbNJ8fO2pg4a9HDdX"
                className="w-52 h-14 text-sm flex justify-center items-center duration-300 bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-600 font-medium 
              
                hover:scale-110
                "
                >Baixar Currículo</Link>
            </div>
            <div className="w-2/3 h-full flex flex-col pt-10
            max-md:w-full
            ">
                {experiences.map((experience)=>(
                    <ExperienceCard key={experience.roleOrCourse} experience={experience}/>
                ))}
            </div>
        </section>
    )
}