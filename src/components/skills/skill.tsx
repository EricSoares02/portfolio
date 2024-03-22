import { SkillCSS } from "./skill.css";
import Image from "next/image";

const techSkills = [
  {
    name: "React",
    path: "https://docs.google.com/uc?id=1YrTdsb9AEFNECHB-Hx-ZYFZcADqZf5jZ",
    active: true,
  },
  {
    name: "JavaScript",
    path: "https://docs.google.com/uc?id=1g5ZKxEbBV7DzLzoMH3M7NMDHsDXjD9jm",
    active: true,
  },
  {
    name: "TypeScript",
    path: "https://docs.google.com/uc?id=1_6zFZ4QUpmpadqTGoeAP00YRvNd4ZWia",
    active: true,
  },
  {
    name: "Node JS",
    path: "https://docs.google.com/uc?id=1A3L7KkTFImPJEhhwEJXa9Xm6ok05rI1O",
    active: true,
  },

  {
    name: "Docker",
    path: "https://docs.google.com/uc?id=13k-Vk_sqMr1dt2401VoIFeArhVasaM77",
    active: true,
  },
  {
    name: "Mongo DB",
    path: "https://docs.google.com/uc?id=1pCJkCMrVMhQrKiD5mFUD6dNH_t-7c3WE",
    active: true,
  },
  {
    name: "Next JS",
    path: "https://docs.google.com/uc?id=1ohQR4IiJ6wACzrHHgsdY0L6aqPNJpsnw",
    active: true,
  },
  {
    name: "Angular",
    path: "https://docs.google.com/uc?id=13wjoET_aVYHqQH7wH_CuHGaBNsFo8ENH",
    active: true,
  },
  {
    name: "Vue",
    path: "https://docs.google.com/uc?id=1KtgT7PfAS_oPYHQzUTYySVBUwjMmkVD6",
    active: true,
  },
  {
    name: "Nuxt",
    path: "https://docs.google.com/uc?id=1eaX-BzmwXfxgl3Zhf5nAIsBj2J_Fnujv",
    active: true,
  },

  {
    name: "MySQL",
    path: "https://docs.google.com/uc?id=15ROu5jqA8ebWjM3E9BlFNnnDkrX53FEr",
    active: true,
  },
  {
    name: "Postgres",
    path: "https://docs.google.com/uc?id=1O21dUuyr-3duJ7MlZVkNCsK12MruyXto",
    active: true,
  },
  {
    name: "Redux",
    path: "https://docs.google.com/uc?id=12qQ12J9IZkh13z473JNNUA8eJZmi7dtL",
    active: true,
  },

  {
    name: "Nest",
    path: "https://docs.google.com/uc?id=1k_aOgMO8niHcP_AzWHBJ-54rfGz4OGys",
    active: true,
  },

  {
    name: "Java",
    path: "https://docs.google.com/uc?id=1eLx3D7GpFHyBwNxDj_mTCZ_FOxUphJ3B",
    active: true,
  },

  {
    name: "Spring Boot",
    path: "https://docs.google.com/uc?id=1ZXLPtijnNTeYNNfxvYoZj-eYHsQ59DNo",
    active: true,
  },
  {
    name: "Tailwind",
    path: "https://docs.google.com/uc?id=1rWUnpmG7x1PBTyAB9CxGRqrN1Ed8AMav",
    active: true,
  },
];

const size = 65;

export default function Skills() {
  return (
    <SkillCSS.Conteiner id="skills">
      <SkillCSS.Text>
        <h1>Tech Skills</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem
          itaque molestias blanditiis adipisci, delectus <br />
          veritatis nesciunt sequi vitae eaque odit est modi quasi esse
          expedita, temporibus maxime recusandae architecto! Nemo!
        </p>
      </SkillCSS.Text>
      <SkillCSS.SkillConteiner>
        {techSkills.map((skill) => {
          if (skill.active) {
            return (
              <SkillCSS.SkillCase key={skill.name}>
                <Image
                  src={skill.path}
                  width={size}
                  height={size}
                  alt="Skill Picture"
                />
                <div>{skill.name}</div>
              </SkillCSS.SkillCase>
            );
          }
        })}
      </SkillCSS.SkillConteiner>
    </SkillCSS.Conteiner>
  );
}
