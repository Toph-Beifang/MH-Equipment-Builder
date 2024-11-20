import React from "react";
import { Equipment } from "../types";

interface EquipmentDetailsProps {
  equipmentToShow: Equipment;
}
const EquipmentDetailsCard: React.FC<EquipmentDetailsProps> = ({
  equipmentToShow,
}) => {
  return (
    <div
      style={{
        margin: "10px 10px",
        padding: "80px 80px",

        borderRadius: "30px",
        borderColor: "black",
        borderWidth: "2px", // 设置边框宽度
        borderStyle: "solid", // 设置边框样式
      }}
    >
      <h3>装备名称: {equipmentToShow.name}</h3>
      <p>装备部位: {equipmentToShow.part}</p>

      <h4>技能</h4>
      <ul>
        {/* 遍历 baseSkills 数组 */}
        {equipmentToShow.baseSkills.map((skill, index) => (
          <li key={index}>
            {skill.skillName}: 等级 {skill.level}
          </li>
        ))}
      </ul>

      <h4>孔位</h4>
      <ul>
        {/* 遍历 slots 数组 */}
        {equipmentToShow.slots.map((slot, index) => (
          <li key={index}>孔位大小: {slot}</li>
        ))}
      </ul>
    </div>
  );
};

export default EquipmentDetailsCard;
