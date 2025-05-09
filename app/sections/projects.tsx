"use client"
import { Marquee } from "@/components/marquee";
import {
  DiDocker,
  DiGithubBadge,
  DiGo,
  DiMongodb,
  DiPostgresql,
  DiReact,
} from "react-icons/di";
import { SiNextdotjs } from "react-icons/si";

const icons = [
  DiDocker,
  DiGithubBadge,
  DiGo,
  DiMongodb,
  DiPostgresql,
  DiReact,
  SiNextdotjs,
];

export const Projects = () => {
  return (
    <section>
      Projects
      <Marquee icons={icons} />
    </section>
  );
};
