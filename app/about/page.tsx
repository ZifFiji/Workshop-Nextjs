import Image from "next/image";
import guts from "@/public/guts.jpg";

export default function About() {
  return (
    <div className="max-w-screen-lg mx-auto my-[50px] space-y-12">
      <div className="flex items-center space-x-4">
        <p>
          Hi, I'm Arthur GUERINAULT a French student in IT at Epitech Bordeaux.
          I've been coding for two years now. I started in high school with NSI,
          a specialty focused on learning computer science.
        </p>
        <Image
          src={guts}
          alt=""
          className="rounded-full w-36 border-4 border-zinc"
        />
      </div>
      <p>
        I've done an internship in a startup called "Yalink" which helps
        freelancers in building engineering. I learned TypeScript, Next.js, and
        Nhost at Yalink, it was an incredible experience.
        <br />
      </p>
      <p>
        Since this year, I've been acting as a mentor for new students. For my
        fourth year at Epitech, I want to go to a cold country like Canada or
        Finland.
      </p>
      <p>
        The things I love in life are snowboarding, going out with friends and
        going to concerts.
      </p>
      <p>
        I wish to work as a freelancer in the future or remotely because I chose
        this field to have the freedom to work wherever I want.
      </p>
    </div>
  );
}
