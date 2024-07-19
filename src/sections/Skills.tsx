import SkillCard from "../components/SkillCard";
import { skills } from "../constants";

const Skills = () => {
  return (
    <section id="Skills" className="mt-14 px-5 lg:px-56">
      <h1 className="font-kalam text-4xl">Skills</h1>
      <div className="mt-5 grid grid-cols-4 gap-4">
        {skills.map((skill, index) => (
          <SkillCard key={index} skill={skill} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
