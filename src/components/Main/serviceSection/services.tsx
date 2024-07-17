import AppSvg from "@/components/svgs/services/app";
import GameSvg from "@/components/svgs/services/game";
import WebSvg from "@/components/svgs/services/web";



export default function ServicesSection(){


    return(
        <section className={`w-full h-[500px] flex flex-col items-center p-4 bg-slate-950
        max-md:h-[1000px]
        `}>
            <div className="w-10/12 h-full flex flex-col items-center">
                <h1 className="w-full h-20 pl-6 pt-3 text-2xl font-bold
                max-md:mb-5 
                max-md:text-center
                ">O que eu faço?</h1>
                <div className="flex items-center justify-between w-4/5 h-[480px]
                max-md:flex-col
                max-md:gap-24
                max-md:justify-start
                ">
                     <div className="w-96 h-60 flex flex-col gap-5
                     max-md:items-center
                     ">
                        <WebSvg size="80px" color="#ffffff"/>
                        <h1 className="font-bold text-xl">Desenvolvimento Web</h1>
                        <p className="text-sm text-gray-400
                        max-md:text-center
                        ">Desenvolvimento de soluções full stack para a web. Utilizando as melhores tecnologias do mercado.</p>
                    </div> 
                    <div className="w-96 h-60 flex flex-col gap-5
                     max-md:items-center
                     ">
                        <GameSvg size="80px" color="#ffffff"/>
                        <h1 className="font-bold text-xl">Games</h1>
                        <p className="text-sm text-gray-400 
                        max-md:text-center
                        ">Desenvolvimento de games para mobile ou desktop utilizando a unity 3D.</p>
                    </div> 
                    <div className="w-96 h-60 flex flex-col gap-5
                     max-md:items-center
                     ">
                        <AppSvg size="80px" color="#ffffff"/>
                        <h1 className="font-bold text-xl">Apps Hibrídos</h1>
                        <p className="text-sm text-gray-400
                        max-md:text-center
                        ">Desenvolvimento de aplicativos híbridos programados em Flutter ou React Native.</p>
                    </div>       
                </div>
            </div>
        </section>
    )
}