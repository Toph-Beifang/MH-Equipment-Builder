// src/components/EquipmentSelector.tsx

import React from "react";
import { Equipment, EquipmentPart } from "../types";

//一个接口，定义了EquipmentSelector跟外界交互的数据
interface EquipmentSelectorProps {
  part: EquipmentPart;
  equipments: Equipment[];
  selectedEquipment: string | null;
  //回调函数，用于处理选择的选项
  onSelect: (equipmentName: string) => void;
}

/*React.FC<MyComponentProps>：这里的 React.FC 表示这是一个 React 函数组件，
同时 <MyComponentProps> 指定了这个组件接收的 props 类型。

使用 React.FC 可以让 TypeScript 知道这个组件应该如何使用 props，
从而在编写代码时提供更好的类型检查和自动补全 */
const EquipmentSelector: React.FC<EquipmentSelectorProps> = ({
  part,
  equipments,
  selectedEquipment,
  onSelect,
}) => {
  return (
    <div style={{ marginBottom: "10px" }}>
      <h3>{part}</h3>
      {/*下拉选择框, 有两个重要的属性：
      value表示下拉框当前选中的值，如果没有选中任何东西就使用空字符串
      onChange 表示用户更改选择时，onchange事件会触发并调用回调函数 onSelect，
      将用户选择的装备名称传递给父组件进行处理。*/}
      <select
        value={selectedEquipment || ""}
        onChange={(e) => onSelect(e.target.value)}
      >
        {/*下拉框的默认选项，因为它的 value 设置为空字符串 ""，
        所以当用户未选择任何装备时会显示这一选项。*/}
        <option value="">选择{part}</option>

        {/*使用 map 方法，将 equipments 数组中的每一个装备渲染为一个 <option> 元素：*/}
        {equipments.map((equipment) => (
          //key 是 React 渲染列表时要求的唯一标识，用于优化渲染。
          //value 表示每个选项的值，即装备的名称。当用户选择该选项时，
          //下拉框的 value 会变成该名称。
          <option key={equipment.name} value={equipment.name}>
            {equipment.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default EquipmentSelector;
