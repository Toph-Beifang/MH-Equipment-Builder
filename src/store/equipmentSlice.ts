// src/store/equipmentSlice.ts

/*什么是 Redux Slice？
Redux Store 的一部分，管理某个特定模块的状态（在这个项目中，装备选择的状态）

在 Redux 中，应用的状态一般会被分成多个逻辑部分来管理。
每个部分可以代表应用中的某个模块，例如用户管理、商品列表、装备选择等等。
Slice 代表了应用状态树的一个“切片”（slice），即应用状态的一个逻辑部分。

每个 slice 都包含：

这个状态的初始值（initialState）。
一组用于修改这个状态的函数（reducers）。
自动生成的用于触发这些修改的 actions。

为什么叫 slice？

想象应用的整体状态是一块大的状态树，Redux 通过将这块状态树切分成不同的部分（slices）
，每个 slice 管理一部分状态。Redux Toolkit 使用 createSlice 函数来定义这些状态片段。

每个 slice 负责：
    管理一个特定的状态片段。
    包含操作该片段的 reducers（即状态更新逻辑）。
    包含可以触发这些 reducers 的 actions

equipmentSlice 的整体作用
在这个项目中，我们需要管理装备的选择状态。
我们可以使用一个 Redux slice 来集中管理“装备选择”这一状态片段。
equipmentSlice 就是我们为“装备选择”创建的 slice，它包含了以下内容：

状态定义：定义装备选择的初始状态。
reducer 函数：定义一个函数 selectEquipment，用于更新用户选择的装备。
action：Redux 会自动为我们生成对应的 action，
这样我们可以通过 dispatch(selectEquipment) 来更新装备选择的状态。
*/

/*createSlice：这是 Redux Toolkit 提供的一个工具函数，
用于简化创建 Redux slice 的过程。它可以自动生成 action 和 reducer，
减少手动编写的代码量。

PayloadAction：PayloadAction 是一种类型，用于定义 action 的数据结构。
这里我们用它来定义 selectEquipment action 需要的 payload。*/
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { EquipmentPart } from "../types";

//EquipmentState 是一个接口（interface）,作用是 定义 EquipmentState 数据结构的类型
//? 表示键值对是可选的，意味着并非所有部位都必须有选中的装备。
interface EquipmentState {
  selectedEquipments: { [part in EquipmentPart]?: string };
}

/*initialState：定义了初始状态 selectedEquipments，
  这是一个对象，用来记录每个部位选择的装备。
  
  : EquipmentState 这个类型标注告诉 TypeScript，
  initialState 必须符合 EquipmentState 的结构。*/
const initialState: EquipmentState = {
  // 用于存储每个部位选择的装备, 初始状态为空对象，表示尚未选择任何装备
  selectedEquipments: {},
};

// 使用 createSlice 定义一个装备选择的 slice
/*createSlice 是 Redux Toolkit 提供的一个简化工具，
它可以自动生成 reducer 和 action，使得代码更加简洁。

我们在这里定义了一个名为 equipment 的 slice，
它包含一个 reducer selectEquipment。

在 createSlice 中，
name、initialState、和 reducers 是必须的参数，
而且它们的名字不能更改*/
const equipmentSlice = createSlice({
  name: "equipment", // slice 名称
  initialState, // 初始状态

  /*每个 reducer 函数代表一个状态更新操作，
  它会接受当前的 state 和一个 action 作为参数，
  然后返回更新后的状态。*/
  reducers: {
    /*selectEquipment：这是一个 reducer 函数，用于更新装备的选择状态。
    
    参数：
        state：当前 slice 的状态，也就是equipmentSlice 当前的状态。
        action：包含要执行的操作的信息，这里使用了
                PayloadAction<{ part: EquipmentPart; equipmentName: string }>，
                表示 action.payload 需要包含 part 和 equipmentName 两个字段
    */
    selectEquipment: (
      state,
      action: PayloadAction<{ part: EquipmentPart; equipmentName: string }>
    ) => {
      //从 action.payload 中提取 part 和 equipmentName。
      const { part, equipmentName } = action.payload;
      //更新 state.selectedEquipments[part]，将指定部位的装备名称设置为 equipmentName。
      state.selectedEquipments[part] = equipmentName;
    },
  },
});

/*每个在 reducers 中定义的函数都会自动生成一个对应的 action。
createSlice 会将这些 action 自动加入到 equipmentSlice.actions 中。
我们可以通过 equipmentSlice.actions 来访问这些自动生成的 actions，
并在组件中使用它们触发状态更新。

在这个例子中，createSlice 会自动生成一个 selectEquipment action，
供我们在 React 组件中使用。*/
// 这行代码将 selectEquipment action 导出，使我们能够在组件中调用
// dispatch(selectEquipment({ part, equipmentName })) 来更新状态。
export const { selectEquipment } = equipmentSlice.actions;

/*createSlice 最终会生成一个 reducer，
这个 reducer 会作为 Redux Store 中的状态管理函数之一。
equipmentSlice.reducer 就是 equipment 状态的实际管理者。 */
// 导出 reducer，，供 store 使用, 稍后将添加到 store 中
export default equipmentSlice.reducer;
