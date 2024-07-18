import { Navigation, Pagination, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';


import 'swiper/css';
import 'swiper/css/pagination';
import "./Swiper.css"
import { SwiperNavButtons } from '@/components/Swiper/SwiperNavbutton';
import { driveLink } from '@/utils/links';



interface props<T>{

    slides: Array<T>
}

export default function ImagesSlider({slides}: props<string>){


    return(
        <>
            <div className="slide-conteiner">
                <Swiper
                    // install Swiper modules
                    modules={[Navigation, Pagination, A11y]}
                    spaceBetween={10}
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
                        
                        {slides.map((id)=>(
                            <SwiperSlide key={id} className='bg-green-500'>
                                <Image
                                src={`${driveLink}${id}`}
                                width={500}
                                height={500}
                                alt="Picture of the author"
                                className='w-full h-64'
                                />
                            </SwiperSlide>
                        ))}
                        <SwiperNavButtons />
                    </Swiper>
            </div>
        </>
    )


}