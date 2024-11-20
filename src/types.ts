// src/types.ts

// 定义技能的结构
export interface Skill {
  name: string; // 技能名称，作为唯一标识
  maxLevel: number; // 技能的最大等级
}

// 定义孔位的大小类型
export type SlotSize = 1 | 2 | 3 | 4; // 1孔 2孔 3孔 4孔

// 定义装备部位的类型，增加武器部位
export type EquipmentPart = "头部" | "胸部" | "腰部" | "手部" | "腿部" | "武器";

// 定义装备结构，包含部位信息
export interface Equipment {
  name: string; // 装备名称，作为唯一标识
  part: EquipmentPart; // 装备部位
  baseSkills: { skillName: string; level: number }[]; // 装备自带的技能及其等级
  slots: SlotSize[]; // 装备孔位大小数组
}

// 定义珠子的结构
export interface Jewel {
  name: string; // 珠子名称，作为唯一标识
  skillLevels: { skillName: string; level: number }[]; // 珠子提供的技能及其等级
  slot: SlotSize; // 珠子大小
}
