import "./SkillListItem.css";

export default function SkillListItem({ skill, index }) {
  return (
    <li className="SkillListItem">
      <div>{skill.name}</div>
      <div className="SkillLevel">LEVEL {skill.level}</div>
    </li>
  );
}
