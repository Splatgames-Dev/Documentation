import Link from "@docusaurus/Link";
import clsx from "clsx";
import React from "react";
import { Icon } from "@iconify/react";
import "../css/projects.css";

const projects: Project[] = [
  {
    title: "Splatgames.de Tutorial",
    description:
      "Tutorial für den Server Splatgames.de, inklusive how-to's, Tipps und Tricks und vieles mehr.",
    repo: "splatgames-dev/Documentation",
    link: "/splatgames-tutorial",
  },
  {
    title: "CityBuild-API",
    description: "Dokumentation für die CityBuild-API, die von Splatgames.de verwendet wird.",
    repo: "splatgames-dev/CityBuild-API",
    link: "/citybuild-api",
  },
  {
    title: "Allgemeine Dokumentation",
    description: "Allgemeine Dokumentation die nicht in die anderen Kategorien passt.",
    repo: "splatgames-dev",
    link: "/misc",
  },
];

function Project(project: Project) {
  return (
    <div className={"project"}>
      <div className={"flex"}>
        <Link
          className={clsx("projectGitHub", project.eol && "archivedProjectTitle")}
          to={`https://github.com/${project.repo}`}
        >
          {project.title}
          {project.eol && <Icon className={"margin-left--sm"} icon={"mdi:archive"} height={25} />}
        </Link>
        <p>{project.description}</p>
      </div>
      <div>
        <Link
          className={clsx("button button--primary", project.eol && "archivedProjectButton")}
          to={project.link}
        >
          Go
        </Link>
      </div>
    </div>
  );
}

export default function Projects(): JSX.Element {
  return (
    <section className={"projects"}>
      <div className={"projectsContainer"}>
        {projects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </section>
  );
}

interface Project {
  title: string;
  description: string;
  repo: string;
  link: string;
  eol?: boolean;
}
