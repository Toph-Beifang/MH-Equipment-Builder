import React from "react";
import "./SelectedEquipments.css";
import { useDispatch } from "react-redux";

import { showEquipmentDetails } from "../store/equipmentDetailsSlice";
import { Equipment } from "../types";

interface SelectedEquipmentsProps {
  selectedEquipments: {
    头部?: string | undefined;
    胸部?: string | undefined;
    腰部?: string | undefined;
    手部?: string | undefined;
    腿部?: string | undefined;
    武器?: string | undefined;
  };
  equipments: Equipment[];
}

const SelectedEquipments: React.FC<SelectedEquipmentsProps> = ({
  selectedEquipments,
  equipments,
}) => {
  const dispatch = useDispatch();
  const handleShowDetails = (equipmentName: string | undefined) => {
    if (!equipmentName) return;
    const equipment = equipments.find((eq) => eq.name === equipmentName);
    if (equipment) {
      dispatch(showEquipmentDetails(equipment));
    }
  };
  return (
    <div>
      <section style={{ marginTop: "20px" }}>
        <h2>已选装备</h2>
        <ul>
          {Object.entries(selectedEquipments).map(([part, equipmentName]) => (
            <li className="li" key={part}>
              <span style={{ marginRight: "10px", fontSize: "20px" }}>
                {part}: {equipmentName || "未选择"}
              </span>
              <button
                className="button"
                onClick={() => handleShowDetails(equipmentName)}
              >
                装备细节
              </button>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default SelectedEquipments;
