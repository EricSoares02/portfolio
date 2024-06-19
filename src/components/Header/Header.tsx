import Link from "next/link";
import BgImage from "./BgImage";
import MyImageOnHeader from "./MyImage";
import ToggleThemeButton from "./ThemeButton";
import GitHubSvg from "../svgs/midia/GitHub.svg";
import LinkedinSvg from "../svgs/midia/LinkedIn.svg";
import { links } from "@/utils/links";

interface props{
    theme: boolean;
    toggleTheme: ()=> void

}


export default function Header({theme, toggleTheme}:props){


    return(
        <header className="w-full h-auto flex flex-col items-center">
            <BgImage color={`${theme ? "bg-gradient-to-r from-fuchsia-600 to-pink-600" : "bg-gradient-to-r from-fuchsia-500 to-cyan-500"}`} />
            <div className="w-4/5 h-20 flex items-center justify-between
            max-md:w-11/12
            ">
                <MyImageOnHeader/>
                <div className="h-full flex gap-2 items-center">
                    <ToggleThemeButton theme={theme} toggleTheme={toggleTheme}/>
                    <Link href={links.git} target="true">
                        <GitHubSvg size="35px" color={`${theme ? "#000000" : "#FFFFFF"}`}/>
                    </Link>
                    <Link href={links.linkedIn} target="true">
                        <LinkedinSvg size="35px" color={`${theme ? "#000000" : "#FFFFFF"}`}/>
                    </Link>
                </div>
            </div>
        </header>
    )

}