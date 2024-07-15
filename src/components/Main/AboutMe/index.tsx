
import Image from 'next/image';


export default function AboutMe(){

    return(
        <section className="w-4/5 h-[400px] flex mb-4
        max-md:h-[730px]
        max-md:w-10/12
        max-md:flex-col-reverse
        ">

            <div className="w-1/2 h-full
            max-md:w-full
            max-md:h-1/2
            ">
                <h1
                className="pt-16 text-4xl font-semibold mb-1
                max-md:text-2xl
                max-md:pt-4
                "
                >
                Hi, <br /> I&apos;m{" "}
                    <span className="bg-gradient-to-r from-amber-500 to-pink-500 inline-block text-transparent bg-clip-text">
                        Eric Soares ;&#41;
                    </span>
                </h1>
                <h2 className="text-zinc-400 mb-4">Full Stack Developer</h2>
                <p className="text-justify text-base
                max-md:text-sm
                ">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione
                    aperiam earum nostrum, sunt ea quaerat quae similique beatae
                    veritatis cumque eius voluptatum iure facilis quos soluta? Rerum
                    praesentium eum minima. Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Aperiam alias voluptas soluta vitae enim, dicta
                    excepturi illo vero, quis rerum, optio saepe? Dicta minima
                    delectus labore sequi commodi consequatur laudantium! or <a href="https://drive.google.com/uc?export=download&id=1yeRkcU4Le65G3NPvbNJ8fO2pg4a9HDdX" className="text-blue-700 font-semibold">download my resume</a>.
                </p>
            </div>
            <div className="w-1/2 h-full flex items-center justify-center
            max-md:w-full
            max-md:h-1/2
            ">
                <Image
                src="/eu.jpeg"
                width={330}
                height={330}
                alt="Picture of the author"
                />
            </div>
        </section>
    )
}