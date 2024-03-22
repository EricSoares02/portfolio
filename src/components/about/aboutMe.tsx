import Link from "next/link";
import { AboutMeCSS } from "./aboutMe.css";
import Image from "next/image";

export default function AboutMe() {
  return (
    <AboutMeCSS.Conteiner>
      <AboutMeCSS.AlignConteiner id="aboutme">
        <AboutMeCSS.Division>
          <AboutMeCSS.Me>
            <h1>
              Hi, <br /> I&apos;m <span>Eric Soares ;&#41;</span>
            </h1>
            <h2>Full Stack Developer</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum expedita corrupti dolore nobis repudiandae. Fugiat est repellendus ipsam ducimus quos facere officia cum, accusantium ab impedit, voluptas rerum eius unde.</p>

            <Link href="https://drive.google.com/uc?export=download&id=1yeRkcU4Le65G3NPvbNJ8fO2pg4a9HDdX">Download Resume  <Image src="/download.svg" alt="avatar" width={30} height={30} /></Link>
          </AboutMeCSS.Me>
        </AboutMeCSS.Division>
        <AboutMeCSS.Division>
          <AboutMeCSS.AvatarCase>
            <Image src="/avatar.png" alt="avatar" width={300} height={350} />
          </AboutMeCSS.AvatarCase>
        </AboutMeCSS.Division>
      </AboutMeCSS.AlignConteiner>
    </AboutMeCSS.Conteiner>
  );
}
