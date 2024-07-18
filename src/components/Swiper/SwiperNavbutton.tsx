
import ArrowSvg from "@/components/svgs/arrow";
import {useSwiper} from "swiper/react"

export const SwiperNavButtons = () =>{


    const Swiper = useSwiper();

    return(
        <div className="swiper-nav-btns">
            <div className="w-36 h-full flex">
                <button onClick={()=>Swiper.slidePrev()} 
                className="rotate-90 text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl dark:focus:ring-cyan-800 font-medium text-sm text-center rounded-b-xl"><ArrowSvg color="#ffffff" size="30px" /></button>
                <button onClick={()=>Swiper.slideNext()} className="-rotate-90 text-white bg-gradient-to-l from-cyan-500 to-blue-500 hover:bg-gradient-to-bl dark:focus:ring-cyan-800 font-medium text-sm text-center rounded-b-xl"><ArrowSvg color="#ffffff" size="30px" /></button>  
            </div>
            <div className="swiper-pagination"></div>
        </div>
    )

}