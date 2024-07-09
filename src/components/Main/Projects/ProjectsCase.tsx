import { ProjectsType } from "@/types/projectsType"
import Image from "next/image"

interface props {
    project: ProjectsType
}


export default function ProjectsCase({project}:props){

    const driveLink = "https://drive.google.com/uc?export=view&id=";

    return(
        <div className={`w-[334px] h-full flex flex-col bg-emerald-600`}
        >
            <Image
                src={`${driveLink}${project.imagesIdAtDrive[0]}`}
                width={330}
                height={400}
                className="w-full h-1/2 object-cover"
                alt="project image"
                
            /> 
            <span className="">{project.name}</span>
            {project.technologies.map((tech)=>(
                <span key={tech}>
                    {tech}
                </span>
            ))}
            
        </div>
    )

}

/**
 * <Image
                src={image}
                width={330}
                height={430}
                className="w-full h-full min-h-full object-cover duration-500
                hover:opacity-35"
                alt="project image"
                
            /> 
            <div className="absolute bottom-8 left-5 flex flex-col gap-2">
                <span className="font-semibold">{name}</span>
              
                <span className="text-sm">Main Technologies:</span>
                <span className="flex gap-2">
                    {technologies.map((tech)=>(
                        <Image
                        src={tech.image}
                        width={20}
                        height={20}
                        className="w-5 h-5"
                        alt="project image"
                        key={tech.name}
                        />
                        ))}
                </span>
                <div className="flex gap-7">
                    <a href="" className="text-sm">view</a>
                    <a href="" className="text-sm">deploy</a>
                </div>
                
            </div>
 * 
 */