import Image from "next/image"

export default function Services(){

    return(
        <section className="w-4/5 h-[740px] grid grid-cols-3 grid-rows-3 gap-1 mb-8
        max-md:w-10/12
        max-md:h-[500px]
        ">
            <div className="flex items-center justify-end">
                <Image
                src="/solutions/play_store.png"
                width={65}
                height={65}
                alt="Picture of the author"
                className="rounded-2xl w-16 h-16 bg-white flex items-center justify-center"
                />
            </div>
            <div className=""></div>
            <div className="flex items-center justify-start">
                <Image
                src="/solutions/figma.png"
                width={65}
                height={65}
                alt="Picture of the author"
                className="rounded-2xl w-16 h-16 bg-white flex items-center justify-center"
                />
            </div>
            <div className="flex items-start justify-center">
                <Image
                src="/solutions/app_store.png"
                width={65}
                height={65}
                alt="Picture of the author"
                className="rounded-2xl w-16 h-16 bg-white flex items-center justify-center"
                />
            </div>
            <div className=" flex flex-col items-center justify-center text-2xl font-bold text-center
            max-md:text-lg
            ">
                <h1>What do I do</h1>
                <span className="flex 
                max-sm:hidden
                ">Here is some of my</span>
                <span>services and solutions</span>  
            </div>
            <div className="flex items-center justify-center">
                <Image
                src="/solutions/notion.png"
                width={65}
                height={65}
                alt="Picture of the author"
                className="rounded-2xl w-16 h-16 bg-white flex items-center justify-center"
                />
            </div>
            <div className="flex items-start justify-end">
                <Image
                src="/solutions/unity.png"
                width={65}
                height={65}
                alt="Picture of the author"
                className="rounded-2xl w-16 h-16 bg-white flex items-center justify-center object-cover"
                />
            </div>
            <div className="flex items-end justify-start">
                <Image
                src="/solutions/blender.png"
                width={65}
                height={65}
                alt="Picture of the author"
                className="rounded-2xl w-16 h-16 bg-white flex items-center justify-center"
                />
            </div>
            <div className="flex items-center justify-center">
                <Image
                src="/solutions/git.png"
                width={65}
                height={65}
                alt="Picture of the author"
                className="rounded-2xl w-16 h-16 bg-white flex items-center justify-center object-cover"
                />
            </div>     
        </section>
    )
}