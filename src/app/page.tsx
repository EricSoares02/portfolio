"use client"

import Header from "@/components/Header/Header";
import { useState } from "react";



export default function Home(){

    const [theme, setTheme] = useState(false);

    const toggleTheme = ()=>{
        setTheme(!theme);
        console.log(theme)
    }


    return(
        <div className={`w-screen h-screen ${theme ? "bg-white text-black" : "bg-slate-900 text-white"}`}>
            <Header theme={theme} toggleTheme={toggleTheme}/>
        </div>
    )

}