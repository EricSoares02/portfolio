import { ProjectsType } from "@/types/projectsType"
import Link from "next/link";
import "./technologies.css"
import SeeProjectRunning from "@/components/SeeProjectRunning/SeeProjectButton";

interface props {
    project: ProjectsType
}


export default function ProjectsCase({project}:props){


    return(
            <div className="w-[390px] h-[600px] bg-gray-800 flex flex-col justify-end p-5">
                <div className="w-full h-1/2 border border-blue-600">
                    <SeeProjectRunning pathname={project.deployLink} />
                </div>
                <Link href={{
                    pathname: "/project",
                    query: {
                        "id": project.id
                    }
                }} className="w-full h-1/2 flex flex-col gap-5">
                    <span className="text-2xl font-semibold">{project.name}</span>
                    <p className="text-sm text-justify w-full h-32 break-words">{project.description}</p>
                    <div className="w-full h-auto grid grid-cols-3 gap-2">
                        {project.technologies.map((tech)=>(
                            <div key={tech} className={`w-24 h-10 ${tech} flex items-center justify-center rounded-xl`}>{tech}</div>
                        ))}

                    </div>
                </Link>
            </div>
    )

}