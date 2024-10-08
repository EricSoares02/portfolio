import Image from "next/image";

type props = {
    skills: {
        name: string,
        imageIdAtDrive: string,
        category: string
    }[]
}


export default function Skill({skills}: props){

    const driveLink = "https://drive.google.com/uc?export=view&id=";
    return(
        <section className="w-full h-auto grid grid-cols-4">
            {skills.map((skill)=>(
                <div key={skill.name}
                className="w-24 h-auto flex flex-col gap-1 items-center justify-center"
                >
                    <div className="w-20 h-20 flex items-center justify-center object-cover bg-white rounded-full">
                        <Image
                        src={`${driveLink}${skill.imageIdAtDrive}`}
                        width={53}
                        height={53}
                        alt="Hard Skill"
                        className="w-[53px] h-[53px] flex items-center justify-center object-contain"
                        />
                    </div>
                    <span className="w-20 h-5 flex justify-center text-sm text-center">{skill.name}</span>
                </div>
            ))}
        </section>
      
    )
}