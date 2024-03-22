import Link from "next/link";
import { ProjectsCSS } from "./projects.css";
import Image from "next/image";


const projects = [
  {
    name: "Soares Shopping",
    title:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. In labore laudantium consequuntur eveniet officia excepturi voluptas, nostrum corrupti unde est amet mollitia.",
    img: "/projects/port.jpeg",
    git: "https://dribbble.com/shots/21084045-Web-Developer-Portfolio-landing-page",
    deploy: "https://dribbble.com/Soares02/collections/7025021-port-ideia",
  },
  {
    name: "Soares Bank",
    title:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. In labore laudantium consequuntur eveniet officia excepturi voluptas, nostrum corrupti unde est amet mollitia.",
    img: "https://docs.google.com/uc?id=1016Q5QCVihIsE8Y4C9nLWlLX6z_06xvs",
    git: "https://dribbble.com/shots/21084045-Web-Developer-Portfolio-landing-page",
    deploy: "https://dribbble.com/Soares02/collections/7025021-port-ideia",
  },
  {
    name: "Bet Nacional",
    title:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. In labore laudantium consequuntur eveniet officia excepturi voluptas, nostrum corrupti unde est amet mollitia.",
    img: "https://docs.google.com/uc?id=18AilxNZ5TYFyxkmSUOtYaj60ViYG76iC",
    git: "https://dribbble.com/shots/21084045-Web-Developer-Portfolio-landing-page",
    deploy: "https://dribbble.com/Soares02/collections/7025021-port-ideia",
  },
  {
    name: "Inter Midia",
    title:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. In labore laudantium consequuntur eveniet officia excepturi voluptas, nostrum corrupti unde est amet mollitia.",
    img: "https://docs.google.com/uc?id=120U25zqf2XZMVNbBXneB27YcooxzDi07",
    git: "https://dribbble.com/shots/21084045-Web-Developer-Portfolio-landing-page",
    deploy: "https://dribbble.com/Soares02/collections/7025021-port-ideia",
  },
  {
    name: "Pokemon Care",
    title:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. In labore laudantium consequuntur eveniet officia excepturi voluptas, nostrum corrupti unde est amet mollitia.",
    img: "https://docs.google.com/uc?id=120U25zqf2XZMVNbBXneB27YcooxzDi07",
    git: "https://dribbble.com/shots/21084045-Web-Developer-Portfolio-landing-page",
    deploy: "https://dribbble.com/Soares02/collections/7025021-port-ideia",
  },
];

export default function Projects() {
  return (
    <ProjectsCSS.Conteiner id="projects">
      <ProjectsCSS.TextConteiner>
        <ProjectsCSS.TextBox>
           <span>Projects I Built</span>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet, perspiciatis error ab tenetur nesciunt at odit, enim, dolorem quasi iure.</p> 
        </ProjectsCSS.TextBox>
      </ProjectsCSS.TextConteiner>
      <ProjectsCSS.ProjectsConteiner>
        {projects.map((project) => (
          <ProjectsCSS.ProjectsCase key={project.name}>
            <Image
              src={project.img}
              width={400}
              height={250}
              alt="project"
            />
            <ProjectsCSS.Details>
                <h1>{project.name}</h1>
                <p>{project.title}</p>
            </ProjectsCSS.Details>
            <ProjectsCSS.ViewProject>
              <Link href={project.git} target="blank">View Project Code</Link>
              <Link href={project.deploy} target="blank">Deploy</Link>
            </ProjectsCSS.ViewProject>
          </ProjectsCSS.ProjectsCase>
        ))}
      </ProjectsCSS.ProjectsConteiner>
    </ProjectsCSS.Conteiner>
  );
}
