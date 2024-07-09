import Link from "next/link";
import ProjectsCase from "./ProjectsCase";
import { Navigation, Pagination, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Swiper.css'
import useWindowSize from "@/hooks/windowSize";
import { ProjectsType } from "@/types/projectsType";




interface props{
    projects: ProjectsType[] | null
}

export default function Projects({projects}:props){
  
    const size = useWindowSize()

    const toggleSlidesPerView = ()=>{
        if(size.width <= 1800 && size.width >= 1500){
            return 4
        }
        if(size.width <= 1500 && size.width >= 1024){
            return 3
        }
        if(size.width <= 1024 && size.width >= 768){
            return 2
        }
        if(size.width <= 768){
            return 1
        }
        return 5
    }


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
                <h1 className="text-2xl font-semibold text-nowrap">Here&#39;s what i&#39;ve been to up</h1>
                <h2 className="text-sm font-semibold text-nowrap text-gray-400">Here are some personal projects for exhibition</h2>
            </div>
            <div className="w-full h-[500px] grid grid-col-2 items-center justify-center">
               
            </div>
            <div className="w-full h-20 flex justify-end items-center mt-4">
                <Link href="/projects" className="w-44 h-12 flex items-center justify-center duration-500 text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 ">See more</Link>
            </div>
        </section>
  );
};

/**
  <div className="w-full h-12 flex flex-col items-center justify-center mb-8">
                <h1 className="text-2xl font-semibold text-nowrap">Here&#39;s what i&#39;ve been to up</h1>
                <h2 className="text-sm font-semibold text-nowrap text-gray-400">Here are some personal projects for exhibition</h2>
            </div>
            <div className="w-full h-[475px] flex justify-center"> 
                <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, A11y]}
                spaceBetween={100}
                slidesPerView={toggleSlidesPerView()}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                >  
                    {
                    projects.map((project)=>(
                        <SwiperSlide key={project.name}>
                            <ProjectsCase description={project.description} image={project.image} name={project.name} technologies={project.technologies} />
                        </SwiperSlide>
                    ))}
                </Swiper>         
            </div>
            <div className="w-full h-20 flex justify-end items-center mt-4">
                <Link href="/projects" className="w-44 h-12 flex items-center justify-center text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 ">See more</Link>
            </div>
*/