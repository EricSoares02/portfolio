import Link from "next/link";
import { ProjectsCSS } from "./projects.css";
import Image from "next/image";


const projects = [
  {
    name: "Soares Shopping",
    title:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. In labore laudantium consequuntur eveniet officia excepturi voluptas, nostrum corrupti unde est amet mollitia, repellendus enim, laboriosam eos inventore explicabo reiciendis tempore.",
    img: "/projects/port.jpeg",
    git: "https://dribbble.com/shots/21084045-Web-Developer-Portfolio-landing-page",
    deploy: "https://dribbble.com/Soares02/collections/7025021-port-ideia",
  },
  {
    name: "Soares Shopping",
    title:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. In labore laudantium consequuntur eveniet officia excepturi voluptas, nostrum corrupti unde est amet mollitia, repellendus enim, laboriosam eos inventore explicabo reiciendis tempore.",
    img: "/projects/port.jpeg",
    git: "https://dribbble.com/shots/21084045-Web-Developer-Portfolio-landing-page",
    deploy: "https://dribbble.com/Soares02/collections/7025021-port-ideia",
  },
  {
    name: "Soares Shopping",
    title:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. In labore laudantium consequuntur eveniet officia excepturi voluptas, nostrum corrupti unde est amet mollitia, repellendus enim, laboriosam eos inventore explicabo reiciendis tempore.",
    img: "/projects/port.jpeg",
    git: "https://dribbble.com/shots/21084045-Web-Developer-Portfolio-landing-page",
    deploy: "https://dribbble.com/Soares02/collections/7025021-port-ideia",
  },
  {
    name: "Soares Shopping",
    title:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. In labore laudantium consequuntur eveniet officia excepturi voluptas, nostrum corrupti unde est amet mollitia, repellendus enim, laboriosam eos inventore explicabo reiciendis tempore.",
    img: "/projects/port.jpeg",
    git: "https://dribbble.com/shots/21084045-Web-Developer-Portfolio-landing-page",
    deploy: "https://dribbble.com/Soares02/collections/7025021-port-ideia",
  },
];

export default function Projects() {
  return (
    <ProjectsCSS.Conteiner>
      <ProjectsCSS.Text>
        <span>Projects I Built</span>
      </ProjectsCSS.Text>
      <ProjectsCSS.ProjectsConteiner>
        {projects.map((project) => (
          <ProjectsCSS.ProjectsCase key={project.name}>
            <Image
              src={project.img}
              width={500}
              height={290}
              alt="project"
            />
            <ProjectsCSS.Details>
                <h1>{project.name}</h1>
                <p>{project.title}</p>
            </ProjectsCSS.Details>
            <ProjectsCSS.ViewProject>
              <Link href={project.git}>View Project Code</Link>
              <Link href={project.deploy}>Deploy</Link>
            </ProjectsCSS.ViewProject>
          </ProjectsCSS.ProjectsCase>
        ))}
      </ProjectsCSS.ProjectsConteiner>
    </ProjectsCSS.Conteiner>
  );
}
