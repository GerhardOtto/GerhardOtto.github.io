import { About } from "./sections/about";
import { Education } from "./sections/education";
import { Projects } from "./sections/projects";
import { TechStack } from "./sections/tech-stack";
import { WorkHistory } from "./sections/work-history";

export default function Home() {
  return (
    <>
      <About />
      <Education />
      <TechStack />
      {/* <WorkHistory />
      <Projects /> */}
    </>
  );
}
