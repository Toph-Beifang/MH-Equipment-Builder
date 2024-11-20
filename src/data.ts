// src/data.ts

import { Equipment, Jewel, Skill } from "./types";

// 定义技能及其最大等级
export const skills: Skill[] = [
  { name: "攻击", maxLevel: 7 },
  { name: "会心", maxLevel: 5 },
];

// 定义一些装备，包含部位信息和武器
export const equipments: Equipment[] = [
  {
    name: "苍火龙头盔",
    part: "头部",
    baseSkills: [{ skillName: "攻击", level: 4 }],
    slots: [1, 2],
  },
  {
    name: "苍火龙胸甲",
    part: "胸部",
    baseSkills: [{ skillName: "会心", level: 2 }],
    slots: [2, 3],
  },
  {
    name: "苍火龙腰甲",
    part: "腰部",
    baseSkills: [{ skillName: "攻击", level: 3 }],
    slots: [1],
  },
  {
    name: "苍火龙护手",
    part: "手部",
    baseSkills: [{ skillName: "攻击", level: 2 }],
    slots: [1, 2],
  },
  {
    name: "苍火龙护腿",
    part: "腿部",
    baseSkills: [{ skillName: "会心", level: 1 }],
    slots: [1],
  },
  {
    name: "惨爪龙头盔",
    part: "头部",
    baseSkills: [{ skillName: "攻击", level: 4 }],
    slots: [1, 4],
  },
  {
    name: "惨爪龙胸甲",
    part: "胸部",
    baseSkills: [{ skillName: "会心", level: 2 }],
    slots: [2, 3],
  },
  {
    name: "惨爪龙腰甲",
    part: "腰部",
    baseSkills: [{ skillName: "攻击", level: 3 }],
    slots: [1],
  },
  {
    name: "惨爪龙护手",
    part: "手部",
    baseSkills: [{ skillName: "攻击", level: 2 }],
    slots: [1, 2],
  },
  {
    name: "惨爪龙护腿",
    part: "腿部",
    baseSkills: [{ skillName: "会心", level: 1 }],
    slots: [1],
  },
  { name: "大剑", part: "武器", baseSkills: [], slots: [3, 1] }, // 武器没有自带技能，但有孔位
];

// 定义一些珠子
export const jewels: Jewel[] = [
  { name: "攻击珠", skillLevels: [{ skillName: "攻击", level: 1 }], slot: 1 },
  { name: "会心珠", skillLevels: [{ skillName: "会心", level: 1 }], slot: 2 },
  {
    name: "攻击会心双技能珠",
    skillLevels: [
      { skillName: "攻击", level: 1 },
      { skillName: "会心", level: 1 },
    ],
    slot: 3,
  },
];
