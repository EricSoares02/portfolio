import Link from "next/link";
import FullArrowSvg from "../svgs/fullArrow";

interface props{
    pathname: string
}


export default function SeeProjectRunning({pathname}: props){
    return(
        <>
            <Link href={pathname} 
            className="w-10 h-10 flex items-center justify-between text-sm -rotate-45"
            >
                <FullArrowSvg size="36px" color="#ffffff"/>
            </Link>
        </>
    )
}