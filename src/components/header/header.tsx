'use client'
import Link from "next/link";
import { HeaderCSS } from "./header.css";
import Image from "next/image";
import { MouseEvent } from "react";

function goTo(event?:  MouseEvent){
  event?.preventDefault();

  const id = event?.currentTarget.getAttribute('href') ?? '';

  const to = document.querySelector(id)?.getBoundingClientRect().y ?? 0;
  

  window.scrollBy({
    top: to - 80,
    behavior: "smooth"
  });


}

export default function Header() {



  return (
    <HeaderCSS.Header>
      <HeaderCSS.Conteiner>
        <HeaderCSS.Divisions>
          <HeaderCSS.MyName>
            <h1>Eric Soares</h1>
          </HeaderCSS.MyName>
        </HeaderCSS.Divisions>
        <HeaderCSS.Divisions>
          <Image
            src="/e.png"
            alt="Picture of the author"
            width={100}
            height={100}
          />
        </HeaderCSS.Divisions>
        <HeaderCSS.Divisions>
          <HeaderCSS.List>
            <HeaderCSS.Inside_list><Link href="#aboutme" onClick={(event)=>goTo(event)}>ABOUT ME</Link></HeaderCSS.Inside_list>
            <HeaderCSS.Inside_list><Link href="#business" onClick={(event)=>goTo(event)}>BUSINESS</Link></HeaderCSS.Inside_list>
            <HeaderCSS.Inside_list><Link href="#projects" onClick={(event)=>goTo(event)}>PROJECTS</Link></HeaderCSS.Inside_list>
            <HeaderCSS.Inside_list>
              <Link href="#skills" onClick={(event)=>goTo(event)}>TECHNOLOGIES</Link>
            </HeaderCSS.Inside_list>
          </HeaderCSS.List>

          <HeaderCSS.Language_options>
            <Image
              src="/language/pt-br.png"
              alt="language"
              width={30}
              height={30}
            />
          </HeaderCSS.Language_options>
        </HeaderCSS.Divisions>
      </HeaderCSS.Conteiner>
    </HeaderCSS.Header>
  );
}

/**
 *  <HeaderCSS.Logo>
        <h1>Eric Soares</h1>
      </HeaderCSS.Logo>

      


      <HeaderCSS.Options_part>
        <HeaderCSS.List>
          <HeaderCSS.Inside_list>SOBRE MIM</HeaderCSS.Inside_list>
          <HeaderCSS.Inside_list>PROJETOS</HeaderCSS.Inside_list>
          <HeaderCSS.Inside_list>CONTATOS</HeaderCSS.Inside_list>
          <HeaderCSS.Inside_list>TECNOLÓGIAS</HeaderCSS.Inside_list>
        </HeaderCSS.List>
        <HeaderCSS.Language_options>
            Language 
        </HeaderCSS.Language_options>
      </HeaderCSS.Options_part>
 */
