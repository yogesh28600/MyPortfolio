import Skill from "../Types/Skill";

interface SkillCardProps {
  skill: Skill;
}
const SkillCard = ({ skill }: SkillCardProps) => {
  return (
    <div className="bg-bg-3 flex h-[60px] w-[60px] items-center justify-center rounded-full transition hover:scale-125">
      <img
        src={skill.image}
        className="max-h-[30px] max-w-[30px]"
        alt={skill.title}
      />
    </div>
  );
};

export default SkillCard;
