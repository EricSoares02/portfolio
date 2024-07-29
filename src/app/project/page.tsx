
import { useSearchParams } from 'next/navigation'
import SeeProjectRunning from "@/components/SeeProjectRunning/SeeProjectButton";
import BackButton from '@/components/BackButton/backButton';
import { useState, useEffect } from 'react';

import axios from "axios";
import "../../components/Main/Projects/technologies.css"
import ImagesSlider from '@/components/pages/projectPage/slide/ImageSlider';


export default function Project(){

    const searchParams = useSearchParams();
    

    const [data, SetData] = useState(null);
    

    useEffect(()=>{
        async function promises(){
          const projectId = searchParams.get('id');
          

            const api_url = process.env.NEXT_PUBLIC_API_URL;

            async function getProject(id:string){

                const {data} = await axios.get(`${api_url}project?id=${id}`);
                return data
             }
            const promises = await getProject(projectId ?? "");

            return promises
        }

        promises().then((data)=>{
            SetData(data)
        }).catch((e)=>{
            console.log("error", e)
        });

        
    },[]);


    if(!data){
        return(
            <>
                <main className="w-dvw h-screen bg-gray-900 text-white flex flex-col">
                    <div className="w-full h-10 flex justify-center mb-10">
                        <div className="w-11/12 h-full">
                            <BackButton />
                        </div>
                    </div>
                    <span className='w-full h-4/5 flex items-center justify-center text-xl font-semibold'>
                        Project Not Found
                    </span>
                </main>
            </>
        )
    }


    return(
        <>
        <main className="w-dvw h-auto bg-gray-900 text-white">
            <div className="w-full h-10 flex justify-center mb-10">
                <div className="w-11/12 h-full">
                    <BackButton />
                </div>
            </div>
            
            <section className="video w-full h-[500px] flex items-center justify-center">
                <div className="w-4/5 h-full bg-orange-500"></div>
            </section>

            <section className="w-full h-auto flex items-center justify-center ">
                <div className="w-4/5 h-full flex flex-col p-10 gap-14
                max-md:w-11/12
                ">
                    <div className="w-full h-32 flex items-center justify-between"> 
                        <h1 className="text-3xl font-semibold">{data.name}</h1>
                        <SeeProjectRunning pathname="{project.deployLink}" />
                    </div>
                    <div className="w-full max-w-full h-auto text-justify
                    max-md:text-wrap
                    ">
                        <p className='break-words'>{data.description}</p>
                    </div>
                    <div className="w-full h-auto mb-20">
                        <span className="w-full h-10 flex text-lg text-gray-500 font-semibold">Pictures</span>
                        <div className="w-full h-72">
                            <ImagesSlider slides={data.imagesIdAtDrive}/>
                        </div>
                    </div>
                    <div className="w-full h-96">
                        <span className="w-full h-10 flex justify-center text-lg text-gray-500 font-semibold">Technologies</span>
                        <div className="max-w-full h-4/5 flex justify-center items-center gap-5
                        max-md:flex-col
                        max-md:items-start
                        ">
                            {data.technologies.map((tech)=>(
                                <div key={tech} className={`w-24 h-10 ${tech} flex items-center justify-center rounded-xl`}>{tech}</div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </main>
        </>
    )
}