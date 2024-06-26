import { Projects } from "@/types/projectsType"
import Image from "next/image"



export default function ProjectsCase({image, name, description, technologies}:Projects){



    return(
        <div className={`w-[330px] h-[430px] max-h-[430px] rounded-md flex flex-col relative`}
        >
            <Image
                src={image}
                width={500}
                height={500}
                className="w-full h-full min-h-full"
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
            
        </div>
    )

}

/**
 * <div className="w-[300px] h-[420px] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] rounded-md flex flex-col">
            <div className="w-full h-[275px]">
                <Image
                src={image}
                width={500}
                height={500}
                className="w-full h-full"
                alt="project image"
                />
            </div>
            <div className="w-full h-[85px] p-8">
                <span className="font-semibold">{name}</span>
                <p>{description}</p>
            </div>
            <div className="w-full h-[60px] p-8 flex">
                    <div className="w-2/3 h-full flex items-center justify-start gap-1">
                        <span className="text-sm text-gray-300">Main Technologies:</span>
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
                    </div>
                    <div className="w-1/3 h-full flex items-center justify-end gap-1 bg-red-700">
                        <a href="" className="text-sm">view</a>
                        <a href="" className="text-sm">deploy</a>
                    </div>
            </div>
        </div>
 * 
 * 
 */