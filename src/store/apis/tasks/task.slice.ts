import { createSlice } from "@reduxjs/toolkit";

import { TaskState } from "@/store/apis/tasks";

const taskSlice = createSlice({
  name: "taskSlice",
  initialState: { selectedDate: new Date().valueOf() } as TaskState,
  reducers: {
    changeSelectDate: (state, action) => {
      state.selectedDate = action.payload;
    },
  },
});

export const { changeSelectDate } = taskSlice.actions;

export default taskSlice;
