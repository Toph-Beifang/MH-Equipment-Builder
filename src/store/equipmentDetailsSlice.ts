import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Equipment } from "../types";

interface equipmentDetailsSlice {
  equipmentToShow: Equipment | null;
}

const initialState: equipmentDetailsSlice = {
  equipmentToShow: null,
};

const equipmentDetailsSlice = createSlice({
  name: "equipmentDetail",
  initialState,
  reducers: {
    showEquipmentDetails: (state, action: PayloadAction<Equipment>) => {
      state.equipmentToShow = action.payload;
    },
    clearEquipmentDetails: (state) => {
      state.equipmentToShow = null;
    },
  },
});

export const { showEquipmentDetails, clearEquipmentDetails } =
  equipmentDetailsSlice.actions;
export default equipmentDetailsSlice.reducer;
