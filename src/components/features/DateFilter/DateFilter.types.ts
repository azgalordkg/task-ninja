import { CreateTaskKey } from "@/types";

export interface Props {
  currentStartDate: Date | null;
  onPressHandler: (name: CreateTaskKey, day: Date | null) => void;
}
