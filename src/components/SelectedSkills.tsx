import React from "react";
import { equipments } from "../data";

interface SelectedSkillsProps {
  selectedEquipments: {
    头部?: string | undefined;
    胸部?: string | undefined;
    腰部?: string | undefined;
    手部?: string | undefined;
    腿部?: string | undefined;
    武器?: string | undefined;
  };
}
const SelectedSkills: React.FC<SelectedSkillsProps> = ({
  selectedEquipments,
}) => {
  // 计算已出技能
  const calculateSkills = () => {
    const skills: { [skillName: string]: number } = {};

    // 遍历用户选择的装备，并汇总技能
    Object.values(selectedEquipments).forEach((equipmentName) => {
      const equipment = equipments.find((eq) => eq.name === equipmentName);
      if (equipment) {
        equipment.baseSkills.forEach(({ skillName, level }) => {
          if (skills[skillName]) {
            skills[skillName] += level; // 累加技能等级
          } else {
            skills[skillName] = level;
          }
        });
      }
    });

    return skills;
  };

  const skills = calculateSkills();
  return (
    <div>
      <section style={{ marginTop: "20px" }}>
        <h2>已出技能</h2>
        <ul>
          {Object.entries(skills).map(([skillName, level]) => (
            <li key={skillName}>
              {skillName}: 等级 {level}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default SelectedSkills;
