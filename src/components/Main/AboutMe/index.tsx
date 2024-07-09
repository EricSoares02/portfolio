
interface props{
  className: string
}

export default function AboutMe({className}:props){

    return(
        <section className={`${className} w-4/5 h-64 flex flex-col mb-4
        max-md:h-96
        max-md:w-10/12
        `}>
            <h1
            className="pt-16 text-3xl font-semibold mb-1
            max-md:text-xl
            max-md:pt-4
            "
            >
              Hi, <br /> I&apos;m{" "}
              <span className="bg-gradient-to-r from-amber-500 to-pink-500 inline-block text-transparent bg-clip-text">
                Eric Soares ;&#41;
              </span>
            </h1>
            <h2 className="text-zinc-400 mb-4">Full Stack Developer</h2>
            <p className="text-justify
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
        </section>
    )
}