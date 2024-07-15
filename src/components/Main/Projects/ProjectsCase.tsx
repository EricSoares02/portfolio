import { ProjectsType } from "@/types/projectsType"
import Image from "next/image"
import Link from "next/link";
import "./technologies.css"

interface props {
    project: ProjectsType
}


export default function ProjectsCase({project}:props){

    const driveLink = "https://drive.google.com/uc?export=view&id=";

    return(
            <div className="w-[390px] h-[600px] bg-gray-800 flex flex-col justify-end p-5">
                <div className="w-full h-1/2 border border-blue-600">
                    
                <Link href={{
                    pathname: `/project/running/${project.name}`,
                }} 
                className="bg-orange-500"
                target="_blank"
                > eye</Link>

                </div>
                <Link href={{
                    pathname: "/project",
                    query: {
                        "project-name": project.name
                    }
                }} className="w-full h-1/2 flex flex-col gap-5">
                    <span className="text-2xl font-semibold">{project.name}</span>
                    <p className="text-sm text-justify w-full h-32">{project.description}</p>
                    <div className="w-full h-auto grid grid-cols-3 gap-2">
                        {project.technologies.map((tech)=>(
                            <div key={tech} className={`w-24 h-10 ${tech} flex items-center justify-center rounded-xl`}>{tech}</div>
                        ))}

                    </div>
                </Link>
            </div>
    )

}