import { ExperienceType } from "@/types/experienceType"



interface props{
    experience: ExperienceType
}

export default function ExperienceCard({experience}:props){

    return(
        <section className="w-full h-[330px] py-8 flex justify-center
        max-2xl:h-[400px]
        max-lg:h-[450px]
        max-md:h-[500px]
        ">
            <div className="w-[90%] h-full flex flex-col justify-between bg-gray-800 p-10 rounded-lg">
                <h1 className="text-lg text-gray-500">{experience.category}</h1>
                <span className="flex gap-2 text-2xl font-bold
                max-2xl:flex-col">
                    <h2>{experience.roleOrCourse}</h2>
                    <span className="flex
                    max-2xl:hidden
                    ">-</span>
                    <h3>{experience.place}</h3>
                </span>
                <p className="text-sm text-justify">{experience.description}</p>
                <h4 className="text-xs">{experience.period}</h4>
            </div>
        </section>
    )
}