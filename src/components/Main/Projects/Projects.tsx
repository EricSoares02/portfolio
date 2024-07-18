
import ProjectsCase from "./ProjectsCase";
import { Navigation, Pagination, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/pagination';
import "./Swiper.css"
import { ProjectsType } from "@/types/projectsType";
import { SwiperNavButtons } from '@/components/Swiper/SwiperNavbutton';



interface props{
    projects: ProjectsType[] | null
}

export default function Projects({projects}:props){
  


    if(projects === null){
        return (
        <div>
            <span>download data error</span>
        </div>
    )
    }  

  return (
        <section className="w-4/5 h-auto flex flex-col gap-8
        max-md:w-10/12
        ">
            <div className="w-full h-12 flex flex-col items-center justify-center">
                <h1 className="text-3xl font-semibold text-nowrap">O que tenho feito</h1>
                <h2 className="text-sm font-semibold text-nowrap text-gray-400">Aqui estão alguns projetos pessoais para exposição</h2>
            </div>
            <div className="w-[103%] h-[680px] flex">
                    <Swiper
                    // install Swiper modules
                    modules={[Navigation, Pagination, A11y]}
                    spaceBetween={20}
                    slidesPerView={4}
                    breakpoints={{
                        2000: { slidesPerView: 4 }, 
                        1500: { slidesPerView: 4 }, 
                        1224: {slidesPerView: 3},
                        768: { slidesPerView: 2 },
                        600: { slidesPerView: 1 }, 
                        500: { slidesPerView: 1 }, 
                        400: { slidesPerView: 1 }, 
                    }}
                    pagination={
                        {
                            el: ".swiper-pagination",
                            clickable: true,
                            type: "bullets",
                        }
                    }
                    >
                        
                        {projects.map((project)=>(
                            <SwiperSlide key={project.name}>
                                <ProjectsCase  project={project}/> 
                            </SwiperSlide>
                        ))}
                        <SwiperNavButtons />
                    </Swiper>

              
            </div>
            <div className="w-full h-20 flex justify-end items-center mt-4">
                <button className="cursor-not-allowed w-44 h-12 flex items-center justify-center duration-500 text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 ">Ver mais</button>
            </div>
        </section>
  );
};