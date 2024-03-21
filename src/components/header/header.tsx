import { HeaderCSS } from "./header.css";
import Image from "next/image";

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
            <HeaderCSS.Inside_list>ABOUT ME</HeaderCSS.Inside_list>
            <HeaderCSS.Inside_list>PROJECTS</HeaderCSS.Inside_list>
            <HeaderCSS.Inside_list>CONTACTS</HeaderCSS.Inside_list>
            <HeaderCSS.Inside_list>TECHNOLOGIES</HeaderCSS.Inside_list>
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
