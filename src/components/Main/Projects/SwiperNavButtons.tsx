
import ArrowSvg from "@/components/svgs/arrow";
import {useSwiper} from "swiper/react"

export const SwiperNavButtons = () =>{


    const Swiper = useSwiper();

    return(
        <div className="swiper-nav-btns">
            <div className="w-36 h-full flex">
                <button onClick={()=>Swiper.slidePrev()} className="rotate-90"><ArrowSvg color="#ffffff" size="30px" /></button>
                <button onClick={()=>Swiper.slideNext()} className="-rotate-90"><ArrowSvg color="#ffffff" size="30px" /></button>  
            </div>
            <div className="swiper-pagination"></div>
        </div>
    )

}