
interface props {
    color: string
}


export default function BgImage({color}: props){


    return(
        
        <div className={`w-full h-[460px] ${color}`}></div>
        
    )

}