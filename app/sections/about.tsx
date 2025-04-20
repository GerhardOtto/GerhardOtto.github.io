import Link from "next/link";

export const About = () => {
  return (
    <section>
      <p>
        {
          "I obtained my BCom Economics With International Trade degree from the "
        }
        <Link
          href={"https://www.nwu.ac.za/"}
          target="_blank"
          className="text-amber-500 hover:underline"
        >
          North West University
        </Link>
        {
          "`s Potchefstroom Campus at the end of 2021. The following year I started with a BSc Information Technology and obtained that degree at the end of 2024."
        }
      </p>
    </section>
  );
};
