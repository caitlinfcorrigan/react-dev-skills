import "./NewSkillForm.css";
import { useState } from "react";

export default function NewSkillForm({ addSkill }) {
  // newSkill state template
  const [newSkill, setNewSkill] = useState({
    name: "",
    level: 3
  });
  // Handle newSkill state (as user inputs)
  function handleAddSkill(e) {
    // As the user types/sets level, hold the data as a newStill state
    const newSkillData = { ...newSkill, [e.target.name]: e.target.value };
    // Update the newSkill state with the new state, held in newSkillData
    setNewSkill(newSkillData);
  }
  // Submit new skill to app (button)
  function handleSubmit(e) {
    e.preventDefault();
    // Pass in newSkill object to addSkill function (in app.jsx)
    addSkill(newSkill);
    // Reset newSkill by setting setNewSkill to the defaul
    setNewSkill({ name: "", level: 3 });
  }

  return (
    <form className="NewSkillForm" onSubmit={handleSubmit}>
      <label className="label">Skill</label>
      <input
        className="input"
        type="text"
        name="name"
        value={newSkill.name}
        onChange={handleAddSkill}
      />
      <label className="label">Level</label>
      <select
        className="input"
        name="level"
        value={newSkill.level}
        onChange={handleAddSkill}
      >
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
        <option value={4}>4</option>
        <option value={4}>5</option>
      </select>
      <button className="button" type="submit">
        ADD SKILL
      </button>
    </form>
  );
}
