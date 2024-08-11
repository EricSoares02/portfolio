
import Image from 'next/image';
import "./animation.css"

export default function AboutMe(){

    return(
        <section className="aboutme w-4/5 h-auto flex mb-4
        max-xl:w-10/12
        max-lg:flex-col-reverse
        ">

            <div className="w-1/2 h-auto
            max-lg:w-full
            max-lg:h-[530px]
            ">
                <h1 className="w-full h-20 flex items-center text-lg font-semibold text-green-400">
                    Quem sou.
                </h1>
                <p className="text-justify text-base mb-4 leading-7
                max-md:text-sm
                ">
                     Apaixonado pelo desenvolvimento web, sou formado em TI pelo Instituto Federal de Educação Ciência e Tecnologia da Bahia (IFBA), antigo CEFET. Sou uma pessoa que adora desafios, assim como todo desenvolvedor, mas em especial aqueles que me tiram da minha zona de conforto.
                </p>
                <p className="text-justify text-base mb-4 leading-7
                max-md:text-sm"
                >
                     Sou desenvolvedor<strong> Full Stack </strong>com foco em <strong> Back End</strong>. Minha expertise abrange desde a prototipação à aplicação de projetos robustos e complexos. Ferramentas como <strong> Docker, TypeScript, Spring Boot, React, Angular, Java, AWS, Mongo DB, MySQL</strong>, são fundamentais em meu trabalho diário. Além disso, habilidades em comunicação eficaz e resolução de problemas são cruciais para transmitir insights de forma clara e impactante.
                </p>
                <p className="text-justify text-base mb-4 leading-7
                max-md:text-sm"
                >
                     Além do desenvolvimento de interfaces responsivas e fiéis aos designs, e criação de Apis, sou um entusiasta de games 3D, desenvolvidos na Unity, e apps desenvolvidos em Kotlin ou React Native. Se interessou?
                    <a href="#expirience" className="text-blue-700 font-semibold"> baixe meu currículo</a>. 
                </p>
            </div>
            <div className="w-1/2 h-[550px] flex items-center justify-center
            max-lg:w-full
            ">
                <Image
                src="/eu.jpeg"
                width={400}
                height={400}
                alt="Picture of the author"
                />
            </div>
        </section>
    )
}