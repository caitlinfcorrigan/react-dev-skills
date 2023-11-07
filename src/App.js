import "./styles.css";
import SkillList from "./SkillList";
import NewSkillForm from "./NewSkillForm";
import { useState } from "react";

export default function App() {
  // Default skills
  const [skills, setSkills] = useState([
    { name: "HTML", level: 5 },
    { name: "CSS", level: 3 },
    { name: "JavaScript", level: 4 },
    { name: "Python", level: 2 }
  ]);
  // Function to addNewSkill
  function addSkill(newSkill) {
    setSkills([...skills, newSkill]);
  }
  return (
    <div className="App">
      <h1>React Dev Skills</h1>
      <SkillList skills={skills} />
      <hr />
      <NewSkillForm addSkill={addSkill} />
    </div>
  );
}
