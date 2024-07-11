import { ExperienceType } from "@/types/experienceType"



interface props{
    experience: ExperienceType
}

export default function ExperienceCard({experience}:props){

    return(
        <section className="w-full h-[330px] py-8 flex justify-center
        max-md:h-[500px]
        ">
            <div className="w-[90%] h-full flex flex-col justify-between bg-gray-800 p-10 rounded-lg">
                <h1 className="text-lg text-gray-500">{experience.category}</h1>
                <span className="flex gap-2 text-2xl font-bold
                max-md:flex-col">
                    <h2>{experience.roleOrCourse}</h2> -
                    <h3>{experience.place}</h3>
                </span>
                <p className="text-sm text-justify">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet praesentium fugiat consequuntur sunt ex accusamus voluptate nulla illum facilis, accusantium rem, ducimus totam doloremque minus fuga tempora, ab nisi placeat.</p>
                <h4 className="text-xs">{experience.period}</h4>
            </div>
        </section>
    )
}