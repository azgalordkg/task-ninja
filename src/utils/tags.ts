import { LabelItem } from "@/types/labels";

export const prepareTagsForRender = (
  labels: LabelItem[],
  allTags: LabelItem[],
) => {
  return labels
    .map(label => {
      return allTags?.find(({ id }) => label.id === id);
    })
    .filter(item => item) as LabelItem[];
};
