import { Badge } from "@/components/ui/badge";

export const TechStack = () => {
  return (
    <section className="mx-10 space-y-3 pt-5" id="#tech-stack">
      <Badge variant="secondary" className="text-2xl pl-3">
        Tech Stack
      </Badge>
      <div className="grid md:grid-cols-2">
        <div className="pb-5 md:pb-0">
          <p className="pl-3 pb-3">My go-to stack:</p>
          <div className="pl-5">
            <div className="flex flex-col gap-3">
              <Badge>Next.js</Badge>
              <Badge>Go</Badge>
              <Badge>MongoDB</Badge>
              <Badge>AWS</Badge>
            </div>
          </div>
        </div>
        <div>
          <p className="pl-3 pb-3">My other options:</p>
          <div className="pl-5">
            <div className="flex flex-col gap-3">
              <Badge>Java</Badge>
              <Badge>C#</Badge>
              <Badge>C++</Badge>
              <Badge>GCP</Badge>
              <Badge>PostgreSQL</Badge>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
