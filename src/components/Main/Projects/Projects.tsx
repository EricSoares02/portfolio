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


const url = process.env.NEXT_PROJECTS_URL 

const projects = [
        {
            "image": "https://drive.google.com/uc?export=view&id=1cWtnz1EhrDnjngmmIwqj7Z6V_IbBxKNV",
            "description": "fiwelhtaçetjgaçkjeghjakjtiaghruzhdjzd",
            "name": "Portfolio",
            "technologies":[ {
                "image": "https://drive.google.com/uc?export=view&id=1YrTdsb9AEFNECHB-Hx-ZYFZcADqZf5jZ",
                "name": "React"
                },]
        },
        {
            "image": "https://drive.google.com/uc?export=view&id=1g5ZKxEbBV7DzLzoMH3M7NMDHsDXjD9jm",
            "description": "fiwelhtaçetjgaçkjeghjakjtiaghruzhdjzd",
            "name": "Soares Shopping",
            "technologies": [
                {
                "image": "https://drive.google.com/uc?export=view&id=1YrTdsb9AEFNECHB-Hx-ZYFZcADqZf5jZ",
                "name": "React"
                },
                {
                    "image": "https://drive.google.com/uc?export=view&id=1A3L7KkTFImPJEhhwEJXa9Xm6ok05rI1O",
                    "name": "Node JS"
                }
            ]
        },
        {
            "image": "https://drive.google.com/uc?export=view&id=19sPAba14chcuQZSeAWvjICGPT-qF4G3t",
            "description": "fiwelhtaçetjgaçkjeghjakjtiaghruzhdjzd",
            "name": "Portfolio",
            "technologies":[ {
                "image": "https://drive.google.com/uc?export=view&id=1YrTdsb9AEFNECHB-Hx-ZYFZcADqZf5jZ",
                "name": "React"
                },]
        },
        {
            "image": "https://drive.google.com/uc?export=view&id=1g5ZKxEbBV7DzLzoMH3M7NMDHsDXjD9jm",
            "description": "fiwelhtaçetjgaçkjeghjakjtiaghruzhdjzd",
            "name": "Soares Shopping",
            "technologies": [
                {
                "image": "https://drive.google.com/uc?export=view&id=1YrTdsb9AEFNECHB-Hx-ZYFZcADqZf5jZ",
                "name": "React"
                },
                {
                    "image": "https://drive.google.com/uc?export=view&id=1A3L7KkTFImPJEhhwEJXa9Xm6ok05rI1O",
                    "name": "Node JS"
                }
            ]
        },
        {
            "image": "https://drive.google.com/uc?export=view&id=19sPAba14chcuQZSeAWvjICGPT-qF4G3t",
            "description": "fiwelhtaçetjgaçkjeghjakjtiaghruzhdjzd",
            "name": "Portfolio",
            "technologies":[ {
                "image": "https://drive.google.com/uc?export=view&id=1YrTdsb9AEFNECHB-Hx-ZYFZcADqZf5jZ",
                "name": "React"
                },]
        },
        {
            "image": "https://drive.google.com/uc?export=view&id=1g5ZKxEbBV7DzLzoMH3M7NMDHsDXjD9jm",
            "description": "fiwelhtaçetjgaçkjeghjakjtiaghruzhdjzd",
            "name": "Soares Shopping",
            "technologies": [
                {
                "image": "https://drive.google.com/uc?export=view&id=1YrTdsb9AEFNECHB-Hx-ZYFZcADqZf5jZ",
                "name": "React"
                },
                {
                    "image": "https://drive.google.com/uc?export=view&id=1A3L7KkTFImPJEhhwEJXa9Xm6ok05rI1O",
                    "name": "Node JS"
                }
            ]
        },
        {
            "image": "https://drive.google.com/uc?export=view&id=19sPAba14chcuQZSeAWvjICGPT-qF4G3t",
            "description": "fiwelhtaçetjgaçkjeghjakjtiaghruzhdjzd",
            "name": "Portfolio",
            "technologies":[ {
                "image": "https://drive.google.com/uc?export=view&id=1YrTdsb9AEFNECHB-Hx-ZYFZcADqZf5jZ",
                "name": "React"
                },]
        },
        {
            "image": "https://drive.google.com/uc?export=view&id=1g5ZKxEbBV7DzLzoMH3M7NMDHsDXjD9jm",
            "description": "fiwelhtaçetjgaçkjeghjakjtiaghruzhdjzd",
            "name": "Soares Shopping",
            "technologies": [
                {
                "image": "https://drive.google.com/uc?export=view&id=1YrTdsb9AEFNECHB-Hx-ZYFZcADqZf5jZ",
                "name": "React"
                },
                {
                    "image": "https://drive.google.com/uc?export=view&id=1A3L7KkTFImPJEhhwEJXa9Xm6ok05rI1O",
                    "name": "Node JS"
                }
            ]
        },
        {
            "image": "https://drive.google.com/uc?export=view&id=19sPAba14chcuQZSeAWvjICGPT-qF4G3t",
            "description": "fiwelhtaçetjgaçkjeghjakjtiaghruzhdjzd",
            "name": "Portfolio",
            "technologies":[ {
                "image": "https://drive.google.com/uc?export=view&id=1YrTdsb9AEFNECHB-Hx-ZYFZcADqZf5jZ",
                "name": "React"
                },]
        },
        {
            "image": "https://drive.google.com/uc?export=view&id=1g5ZKxEbBV7DzLzoMH3M7NMDHsDXjD9jm",
            "description": "fiwelhtaçetjgaçkjeghjakjtiaghruzhdjzd",
            "name": "Soares Shopping",
            "technologies": [
                {
                "image": "https://drive.google.com/uc?export=view&id=1YrTdsb9AEFNECHB-Hx-ZYFZcADqZf5jZ",
                "name": "React"
                },
                {
                    "image": "https://drive.google.com/uc?export=view&id=1A3L7KkTFImPJEhhwEJXa9Xm6ok05rI1O",
                    "name": "Node JS"
                }
            ]
        }
        , {
            "image": "https://drive.google.com/uc?export=view&id=19sPAba14chcuQZSeAWvjICGPT-qF4G3t",
            "description": "fiwelhtaçetjgaçkjeghjakjtiaghruzhdjzd",
            "name": "Portfolio",
            "technologies":[ {
                "image": "https://drive.google.com/uc?export=view&id=1YrTdsb9AEFNECHB-Hx-ZYFZcADqZf5jZ",
                "name": "React"
                },]
        },
        {
            "image": "https://drive.google.com/uc?export=view&id=1g5ZKxEbBV7DzLzoMH3M7NMDHsDXjD9jm",
            "description": "fiwelhtaçetjgaçkjeghjakjtiaghruzhdjzd",
            "name": "Soares Shopping",
            "technologies": [
                {
                "image": "https://drive.google.com/uc?export=view&id=1YrTdsb9AEFNECHB-Hx-ZYFZcADqZf5jZ",
                "name": "React"
                },
                {
                    "image": "https://drive.google.com/uc?export=view&id=1A3L7KkTFImPJEhhwEJXa9Xm6ok05rI1O",
                    "name": "Node JS"
                }
            ]
        }
        , {
            "image": "https://drive.google.com/uc?export=view&id=19sPAba14chcuQZSeAWvjICGPT-qF4G3t",
            "description": "fiwelhtaçetjgaçkjeghjakjtiaghruzhdjzd",
            "name": "Portfolio",
            "technologies":[ {
                "image": "https://drive.google.com/uc?export=view&id=1YrTdsb9AEFNECHB-Hx-ZYFZcADqZf5jZ",
                "name": "React"
                },]
        },
        {
            "image": "https://drive.google.com/uc?export=view&id=1g5ZKxEbBV7DzLzoMH3M7NMDHsDXjD9jm",
            "description": "fiwelhtaçetjgaçkjeghjakjtiaghruzhdjzd",
            "name": "Soares Shopping",
            "technologies": [
                {
                "image": "https://drive.google.com/uc?export=view&id=1YrTdsb9AEFNECHB-Hx-ZYFZcADqZf5jZ",
                "name": "React"
                },
                {
                    "image": "https://drive.google.com/uc?export=view&id=1A3L7KkTFImPJEhhwEJXa9Xm6ok05rI1O",
                    "name": "Node JS"
                }
            ]
        }
    ]

export default function Projects(){
  
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

  return (
        <section className="w-4/5 h-auto flex flex-col
        max-md:w-10/12
        ">
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
        </section>
  );
};

