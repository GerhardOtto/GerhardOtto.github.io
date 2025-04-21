import { Badge } from "@/components/ui/badge";

export const Education = () => {
  return (
    <section className="mx-10 space-y-3 pt-5" id="#education">
      <Badge variant="secondary" className="text-2xl pl-3">
        Education
      </Badge>
      <div className="grid md:grid-cols-2">
        <div className="pb-5 md:pb-0">
          <p className="pl-3 pb-3">My formal education lies in the following:</p>
          <div className="pl-5">
            <div className="flex flex-col gap-3">
              <Badge>BCom Economics with International Trade</Badge>
              <Badge>BSc Information Technology</Badge>
            </div>
          </div>
        </div>

        <div>
          <p className="pl-3 pb-3">
            My informal education includes but is not limited to:
          </p>
          <div className="pl-5">
            <div className="flex flex-col gap-3">
              <Badge>Youtube Tutorials</Badge>
              <Badge>Udemy Courses</Badge>
              <Badge>Reading The Docs</Badge>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
