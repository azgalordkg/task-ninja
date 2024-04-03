export interface TaskListContextType {
  timeFormat: string;
  inputVisible: boolean;
  toggleSearchInput: () => void;
  searchValue: string;
  handleSearchValueChange: (value: string) => void;
}
