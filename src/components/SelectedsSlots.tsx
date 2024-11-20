import React from "react";
import { equipments } from "../data";
interface SelectedSlotsProps {
  selectedEquipments: {
    头部?: string | undefined;
    胸部?: string | undefined;
    腰部?: string | undefined;
    手部?: string | undefined;
    腿部?: string | undefined;
    武器?: string | undefined;
  };
}
const SelectedsSlots: React.FC<SelectedSlotsProps> = ({
  selectedEquipments,
}) => {
  const calculateSlots = () => {
    const slots: { [slotSize: number]: number } = {};

    Object.values(selectedEquipments).forEach((equipmentName) => {
      const equipment = equipments.find((eq) => eq.name === equipmentName);
      if (equipment) {
        equipment.slots.forEach((slotSize) => {
          if (slots[slotSize]) {
            slots[slotSize] += 1;
          } else {
            slots[slotSize] = 1;
          }
        });
      }
    });
    return slots;
  };

  const slots = calculateSlots();

  return (
    <section style={{ marginTop: "20px" }}>
      <h2>已出孔位</h2>
      <ul>
        {Object.entries(slots).map(([slotSize, number]) => (
          <li key={slotSize}>
            共有 {slotSize} 级孔 {number} 个
          </li>
        ))}
      </ul>
    </section>
  );
};

export default SelectedsSlots;
