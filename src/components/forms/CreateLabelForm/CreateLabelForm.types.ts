import { UseFormReturn } from "react-hook-form";

import { LabelItem } from "@/types";

export interface Props {
  onClose: () => void;
  editItemId?: number;
  formHandler: UseFormReturn<LabelItem, any>;
  findLabel?: Required<LabelItem>;
}
