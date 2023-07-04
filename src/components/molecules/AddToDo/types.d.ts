export interface AddToDoProps {
  setInputValue: (value: string) => void;
  inputValue: string;
  setToDos: (value: string[]) => void;
  toDos: string[];
  setSelectedOption: (value: string) => void;
}
