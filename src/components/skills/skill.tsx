import { SkillCSS } from "./skill.css";
import Image from "next/image";

const techSkills = [
  {
    name: "React",
    path: "/skills/react.png",
    active: true,
  },
  {
    name: "Vue",
    path: "/skills/vue.png",
    active: true,
  },
  {
    name: "JavaScript",
    path: "/skills/js.png",
    active: true,
  },
  {
    name: "TypeScript",
    path: "/skills/ts.png",
    active: true,
  },
  {
    name: "Angular",
    path: "/skills/angular.png",
    active: true,
  },
  {
    name: "Node",
    path: "/skills/node.png",
    active: true,
  },
  {
    name: "Nuxt",
    path: "/skills/nuxt.png",
    active: true,
  },
  {
    name: "Postgres",
    path: "/skills/pt.png",
    active: true,
  },
  {
    name: "Redux",
    path: "/skills/redux.png",
    active: true,
  },
  {
    name: "Tailwind",
    path: "/skills/tw.png",
    active: true,
  },
  {
    name: "Spring",
    path: "/skills/spring.png",
    active: true,
  },

];


  const size = 65;

export default function Skills() {
  return (
    <SkillCSS.Conteiner>
        <SkillCSS.Text>
          <h1>Tech Skills</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem itaque molestias blanditiis adipisci, delectus <br />veritatis nesciunt sequi vitae eaque odit est modi quasi esse expedita, temporibus maxime recusandae architecto! Nemo!</p>
        </SkillCSS.Text>
        <SkillCSS.SkillConteiner>
            
          {techSkills.map((skill)=>{
              if (skill.active) {
                return (
                <Image
                key={skill.name}
                  src={skill.path}
                  width={size}
                  height={size}
                  alt="Skill Picture"
                />)
              }
          })}


        </SkillCSS.SkillConteiner>
    </SkillCSS.Conteiner>
  );
}
