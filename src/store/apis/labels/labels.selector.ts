import { createSelector } from "@reduxjs/toolkit";

import { RootState } from "@/store";

export const selectLabels = createSelector(
  (state: RootState) => state.labels.queries["getLabels(undefined)"],
  apiResult => apiResult?.data,
);

export const selectSelectedTags = (state: RootState) =>
  state.labelSlice.selectedTags;

export const selectCurrentSelectedTags = (state: RootState) =>
  state.labelSlice.currentSelectedTags;
