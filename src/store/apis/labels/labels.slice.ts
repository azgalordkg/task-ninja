import { createSlice } from "@reduxjs/toolkit";

import { LabelState } from "./labels.types";

const labelSlice = createSlice({
  name: "labelSlice",
  initialState: { selectedTags: [], currentSelectedTags: [] } as LabelState,
  reducers: {
    selectTagHandler: (state, action) => {
      const tagId = action.payload;
      if (state.currentSelectedTags.includes(tagId)) {
        state.currentSelectedTags = state.currentSelectedTags.filter(
          (id: number) => id !== tagId,
        );
      } else {
        if (state.currentSelectedTags.length < 3) {
          state.currentSelectedTags.push(tagId);
        }
      }
    },

    setTagsForEdit: (state, action) => {
      const tagsForEdit = action.payload;

      state.selectedTags = tagsForEdit;
      state.currentSelectedTags = tagsForEdit;
    },

    clearSelectedTags: state => {
      state.selectedTags = [];
      state.currentSelectedTags = [];
    },

    acceptSelectedTags: state => {
      state.selectedTags = state.currentSelectedTags;
    },

    updateCurrentSelectedTags: state => {
      state.currentSelectedTags = state.selectedTags;
    },
  },
});

export const {
  selectTagHandler,
  clearSelectedTags,
  acceptSelectedTags,
  updateCurrentSelectedTags,
  setTagsForEdit,
} = labelSlice.actions;

export default labelSlice;
