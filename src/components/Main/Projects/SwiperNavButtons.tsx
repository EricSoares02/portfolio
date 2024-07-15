
import {useSwiper} from "swiper/react"

export const SwiperNavButtons = () =>{


    const Swiper = useSwiper();

    return(
        <div className="swiper-nav-btns">
            <div>
                <button onClick={()=>Swiper.slidePrev()}>prev</button>
                <button onClick={()=>Swiper.slideNext()}>next</button>  
            </div>
            <div className="swiper-pagination"></div>
        </div>
    )

}