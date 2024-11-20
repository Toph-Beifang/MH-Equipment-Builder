// src/store/store.ts

import { configureStore } from "@reduxjs/toolkit";

//在 JavaScript 和 TypeScript 中，当你从一个模块中导入默认导出时，可以随意给它命名。
//而我们要导入的 equipmentSlice.reducer是equipmentSlice的默认导出，所以命名不是问题
import equipmentReducer from "./equipmentSlice";
import equipmentDetailsReducer from "./equipmentDetailsSlice";

// 使用 configureStore 创建 Redux store
/*configureStore 函数接收一个配置对象，常用的配置项如下：
reducer, middleware,devTools,preloadedState,enhancers
这里我们只使用了reducer
 */
const store = configureStore({
  //reducer 是一个对象，用于定义应用的(state)状态结构和
  // 每个状态片段(slice)的处理函数。
  reducer: {
    /*在这里，我们传入了 { equipment: equipmentReducer }，
    意思是把 equipmentReducer 作为 equipment 状态片段的处理函数。

    通过这种方式，我们可以在 Redux Store 中创建一个 equipment 状态，
    它的更新逻辑由 equipmentReducer 控制。
    
    在 Redux 的状态树中，这会创建一个 equipment 状态，
    存储在 store.getState().equipment 中。
    
    如果有多个 slice，我们可以将它们的 reducers 组合在 reducer 对象中，
    例如 { equipment: equipmentReducer, user: userReducer }，
    每个 reducer 都会管理不同的状态部分。
    
    在 Store 中，equipment 并不是 equipmentReducer 本身，
    而是 equipmentReducer 返回的状态。
    equipmentReducer 只是用来定义如何根据 action 更新 equipment 状态的函数。
    
    当 Redux Store 初始化时：
      Redux 会调用 equipmentReducer(undefined, { type: '@@INIT' })，
      这个初始化 action 会触发 equipmentReducer，
      返回 equipmentReducer 中定义的初始状态。
      
      equipmentReducer 返回的初始状态（例如 initialState）会被存储在 
      currentState.equipment 中。
      
      这样，equipment 状态片段实际上是由 equipmentReducer 管理和更新的状态。
    
    */
    equipment: equipmentReducer, // 将装备选择的 reducer 添加到 store 中
    equipmentDetail: equipmentDetailsReducer,
  },
});

// 定义 RootState 和 AppDispatch 类型，以便在应用中使用

/*TypeScript 中的 ReturnType 是一种实用类型，用于提取函数返回值的类型。
在这里，我们使用它来提取 store.getState() 的返回类型，并将其赋值给 RootState。

store.getState() 是一个函数，用于获取 Redux Store 中的当前状态。
返回的是一个对象，包含了我们在 reducer 中定义的所有状态片段。

因为在 Redux 中，所有的状态都集中存储在一个大的状态对象中，
因此 getState() 返回的就是这个状态树的根对象。

当我们调用 store.getState() 时，它返回的是当前整个状态树的根对象，
而这个根对象包含了所有状态片段。根据上面的例子，
store.getState() 返回的对象结构大致如下：

typescript
Copy code
const currentState = store.getState();
console.log(currentState); 
// 输出类似于：
// {
//   equipment: {...},  // equipmentReducer 管理的状态
//   user: {...}        // userReducer 管理的状态
// }

在这个 currentState 对象中：
currentState.equipment 是 equipmentReducer 管理的状态片段。
currentState.user 是 userReducer 管理的状态片段。
*/
export type RootState = ReturnType<typeof store.getState>;

/*
AppDispatch 是 Redux Store 中 dispatch 函数的类型。
我们通过 typeof store.dispatch 获取 dispatch 的类型，并将其赋给 AppDispatch。

store.dispatch 是 Redux 中用于触发 action 的方法。
调用 dispatch(action) 会将 action 发送到 reducer 中进行处理。 */
export type AppDispatch = typeof store.dispatch;
export default store;
