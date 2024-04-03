export interface Props {
  monthItem: { [x: number]: { name: string; value: string }[] };
  handleDatePress: (date: string) => void;
  selectedMonth: Date;
}
