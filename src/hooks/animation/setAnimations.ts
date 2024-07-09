import { useEffect } from "react";
import { AnimationKey } from "./defaultAnimationsKey";


const Observer = (animationClass: string) =>{

    return new IntersectionObserver((entries)=>{
        entries.forEach((entry)=>{
            if (entry.isIntersecting) {
                entry.target.classList.add(animationClass)
            } else {
                entry.target.classList.remove(animationClass)
            }
        })
    });
}


const SetAnimation = (elementClass: string, animationClass: string) =>{

    useEffect(() => {
        const element = document.querySelector(`.${elementClass}`)
        Observer(animationClass).observe(element)
    });

}



const useCssAnimations = (elements: Array<{elementClass: string, 
    animationKey: AnimationKey | string}>) => {
 
    elements.forEach((n)=>{
        switch (n.animationKey) {
            case AnimationKey.Bounce:
                return SetAnimation(n.elementClass, "bounce")

            case AnimationKey.SlideIn:
                return SetAnimation(n.elementClass, "slideIn")

            case AnimationKey.SlideOut:
                return SetAnimation(n.elementClass, "slideOut")
            
            case AnimationKey.MoveUp:
                return SetAnimation(n.elementClass, "moveUp")

            case AnimationKey.MoveDown:
                return SetAnimation(n.elementClass, "moveDown")
            default:
                return SetAnimation(n.elementClass, n.animationKey)
        }
    })
}

export default useCssAnimations;