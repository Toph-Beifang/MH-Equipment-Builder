---

```markdown
# Monster Hunter 装备配装器

## 项目简介
这是一个基于 **React + Redux** 的装备配装器应用，旨在帮助玩家选择装备并查看装备详情及已激活的技能和孔位信息。

---

## 目录结构

以下是项目 `src` 文件夹的结构说明：

```
src
├── assets                      # 存放图片、图标等静态资源
├── components                  # 存放所有 React 组件
│   ├── EquipmentDetailsCard.tsx  # 显示选中装备的详细信息卡片
│   ├── EquipmentSelector.tsx     # 装备选择组件（按部位选择装备）
│   ├── SelectedEquipments.tsx    # 已选装备列表组件
│   ├── SelectedSkills.tsx        # 已出技能显示组件
│   ├── SelectedSlots.tsx         # 已出孔位显示组件
├── store                       # Redux 状态管理文件夹
│   ├── equipmentDetailsSlice.ts  # 管理当前选中装备详情的状态
│   ├── equipmentSlice.ts         # 管理已选装备的状态
│   ├── store.ts                  # 配置 Redux Store
├── App.css                     # 应用的全局样式
├── App.tsx                     # 应用的根组件
├── data.ts                     # 示例装备数据
├── index.css                   # 应用的全局样式表
├── main.tsx                    # 应用的入口文件
├── types.ts                    # 定义 TypeScript 类型和接口
├── vite-env.d.ts               # Vite 配置相关文件
```

---

## 功能特性

1. **装备选择**：

   - 按照装备部位（头部、胸部、腰部、手部、腿部、武器）选择装备。
   - 实时更新选中装备并在页面显示。

2. **装备详情**：

   - 点击 "装备细节" 按钮后弹出详细信息卡片，显示装备的技能及孔位信息。

3. **技能激活**：

   - 根据当前选中装备计算已激活的技能并显示等级。

4. **孔位信息**：

   - 统计当前选中装备提供的所有孔位，并按孔位等级分类显示。

5. **Redux 状态管理**：
   - 使用 Redux 管理已选装备和装备详情的状态，保持组件间的状态同步。

---

## 安装与运行

### 1. 克隆项目

```bash
git clone <your-repository-url>
cd <your-project-folder>
```

### 2. 安装依赖

确保已安装 Node.js（建议版本 >= 14.0）。

```bash
npm install
```

### 3. 运行项目

```bash
npm run dev
```

---

## 技术栈

- **前端框架**：React, Redux Toolkit
- **状态管理**：Redux
- **构建工具**：Vite
- **类型检查**：TypeScript
- **样式**：CSS

---

## 文件说明

### `App.tsx`

应用的主入口，组织各组件并实现以下功能：

- 渲染装备选择器、已选装备、技能和孔位的显示。
- 调用 Redux 的 `dispatch` 和 `useSelector` 管理状态。

### `components` 文件夹

- `EquipmentDetailsCard.tsx`：显示装备的详细信息（名称、技能、孔位）。
- `EquipmentSelector.tsx`：渲染下拉框供用户选择装备。
- `SelectedEquipments.tsx`：显示用户已选装备的列表及每件装备的细节按钮。
- `SelectedSkills.tsx`：计算并显示所有已激活的技能。
- `SelectedSlots.tsx`：统计并显示装备的所有孔位信息。

### `store` 文件夹

- `equipmentSlice.ts`：管理已选装备的状态（按部位存储）。
- `equipmentDetailsSlice.ts`：管理当前选中装备的详情状态。
- `store.ts`：配置 Redux Store，将多个 Slice 组合为一个状态树。

### `data.ts`

存放示例装备数据，定义每件装备的技能、孔位信息等。

### `types.ts`

定义 TypeScript 类型，如 `Equipment`（装备）、`Skill`（技能）和 `Slot`（孔位）等。

### `assets` 文件夹

存放项目中的静态资源，如图片、图标等。

---

## 示例装备数据

```typescript
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
  { name: "大剑", part: "武器", baseSkills: [], slots: [3, 1] },
];
```

---

## 待开发功能

1. **动态添加/删除装备数据**：

   - 通过表单从界面动态添加装备到数据库。

2. **后端支持**：

   - 使用 Node.js + MongoDB 存储和管理装备数据。
   - 使用 Swagger 文档生成 API 文档，支持前后端联调。

3. **装备优化器**：
   - 根据优先级算法自动推荐最优装备组合。

---
