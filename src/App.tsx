// src/App.tsx

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./store/store";
import { selectEquipment } from "./store/equipmentSlice";
import { equipments } from "./data";
import { EquipmentPart } from "./types";
import EquipmentSelector from "./components/EquipmentSelector";
import SelectedSkills from "./components/SelectedSkills";
import SelectedsSlots from "./components/SelectedsSlots";
import SelectedEquipments from "./components/SelectedEquipments";
import EquipmentDetailsCard from "./components/EquipmentDetailsCard";
import { clearEquipmentDetails } from "./store/equipmentDetailsSlice";

const App: React.FC = () => {
  const parts: EquipmentPart[] = [
    "头部",
    "胸部",
    "腰部",
    "手部",
    "腿部",
    "武器",
  ];

  //从Redux的store中提取用户已经选择的装备的状态
  //useSelector 是 React-Redux 提供的 Hook，用于从 Redux store 中提取所需的状态。
  const selectedEquipments = useSelector(
    //state：Redux store 的根状态，类型是 RootState
    //state.equipment.selectedEquipments：
    //  state.equipment 是由 equipmentSlice.reducer 管理的状态片段。
    //  selectedEquipments 是 equipmentSlice 中定义的部分状态
    (state: RootState) => state.equipment.selectedEquipments
  );

  const equipmentToShow = useSelector(
    (state: RootState) => state.equipmentDetail.equipmentToShow
  );

  //dispatch 是 React-Redux 提供的 Hook，用于触发 Redux 的 action。
  //通过 dispatch(action)，可以更新 Redux 的状态。
  const dispatch = useDispatch();

  const handleSelect = (part: EquipmentPart, equipmentName: string) => {
    dispatch(selectEquipment({ part, equipmentName }));
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>装备配装器</h1>

      {/*选择装备的部分*/}
      {parts.map((part) => (
        <EquipmentSelector
          key={part}
          part={part}
          equipments={equipments.filter((eq) => eq.part === part)}
          selectedEquipment={selectedEquipments[part] || null}
          onSelect={(equipmentName) => handleSelect(part, equipmentName)}
        />
      ))}
      <hr />
      {/*展示已经选择的装备的部分*/}
      <SelectedEquipments
        selectedEquipments={selectedEquipments}
        equipments={equipments}
      ></SelectedEquipments>

      {/*展示已经配出的技能的部分*/}
      <SelectedSkills selectedEquipments={selectedEquipments}></SelectedSkills>
      {/*展示已经配出的孔位的部分*/}
      <SelectedsSlots selectedEquipments={selectedEquipments}></SelectedsSlots>
      {equipmentToShow && (
        <div
          style={{
            position: "fixed",
            top: "20%",
            left: "50%",
            transform: "translate(-50%, -20%)",
            background: "white",
            padding: "20px",
            borderRadius: "10px",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
          }}
        >
          <button
            onClick={() => dispatch(clearEquipmentDetails())} // 点击关闭详情
            style={{
              position: "absolute",
              top: "10px",
              right: "10px",
              background: "red",
              color: "white",
              border: "none",
              borderRadius: "50%",
              width: "30px",
              height: "30px",
              cursor: "pointer",
            }}
          >
            X
          </button>
          <EquipmentDetailsCard equipmentToShow={equipmentToShow} />
        </div>
      )}
    </div>
  );
};

export default App;
