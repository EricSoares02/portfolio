import { SkillCSS } from "./skill.css";
import Image from "next/image";

const frontSkills = [
  {
    name: "React",
    path: "/skills/react.png",
    active: true,
  },
  {
    name: "Vue",
    path: "/skills/vue.png",
    active: false,
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
];


const backSkills = [
    {
        name: "Mongo DB",
        path: "/skills/mongo.png",
        active: true,
      },
      {
        name: "My SQL",
        path: "/skills/mysql.png",
        active: true,
      },
  ];


 const mobileSkills =  [
    {
        name: "React Native",
        path: "/skills/react.png",
        active: true,
      },
  ];

  const size = 40;

export default function Skills() {
  return (
    <SkillCSS.Conteiner>
      <SkillCSS.Align>
        <SkillCSS.Text>
          <h1>Tech Skills</h1>
        </SkillCSS.Text>
        <SkillCSS.SkillConteiner>


            <SkillCSS.SkillCases>
            {frontSkills.map((skill) => {
            if (skill.active) {
              return (
                <SkillCSS.TechCase key={skill.name}>
                  <Image src={skill.path} alt="skill" width={size} height={size} />
                  <span>{skill.name}</span>
                </SkillCSS.TechCase>
              );
            }
            })}
            </SkillCSS.SkillCases>

          
            <SkillCSS.SkillCases>
            {backSkills.map((skill) => {
            if (skill.active) {
              return (
                <SkillCSS.TechCase key={skill.name}>
                  <Image src={skill.path} alt="skill" width={size} height={size} />
                  <span>{skill.name}</span>
                </SkillCSS.TechCase>
              );
            }
            })}
            </SkillCSS.SkillCases>


            <SkillCSS.SkillCases>
            {mobileSkills.map((skill) => {
            if (skill.active) {
              return (
                <SkillCSS.TechCase key={skill.name}>
                  <Image src={skill.path} alt="skill" width={size} height={size} />
                  <span>{skill.name}</span>
                </SkillCSS.TechCase>
              );
            }
            })}
            </SkillCSS.SkillCases>

        </SkillCSS.SkillConteiner>
      </SkillCSS.Align>
    </SkillCSS.Conteiner>
  );
}
