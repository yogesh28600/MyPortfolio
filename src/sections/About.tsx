import { AboutMe } from "../constants";

const About = () => {
  return (
    <section id="About" className="font-kalam px-5 lg:px-56">
      <h1 className="mt-10 text-4xl">I am a {AboutMe.Position}.|</h1>
      <h2 className="text-xs">{AboutMe.Company}</h2>
      <h2 className="mt-8 w-96 text-xs">{AboutMe.about}</h2>
    </section>
  );
};

export default About;
