import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export const About = () => {
  return (
    <section className="mx-10 space-y-3 text-pretty" id="#about">
      <Badge variant="secondary" className="text-2xl">
        About
      </Badge>
      <p className="pl-3">
        The last few years I find myself programming more than ever before, and
        the more capable I become, the more I enjoy it.
      </p>
      <p className="pl-3">
        I obtained my BCom Economics With International Trade degree from the{" "}
        <Link
          href={"https://www.nwu.ac.za/"}
          target="_blank"
          className="text-primary hover:underline"
        >
          North West University
        </Link>
        &apos;s Potchefstroom Campus at the end of 2021. The following year I
        started with a BSc Information Technology and obtained that degree at
        the end of 2024. My time at university was not just economics and
        computers, I also took German and French.
      </p>

      <p className="pl-3">
        In my free time I attempt to live an active lifestyle, from running and
        swimming to rock climbing and socializing with friends. If it sounds
        like an adventure you can probably persuade me to tag along.
      </p>
    </section>
  );
};
