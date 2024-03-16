import { ChangeEvent, ComponentType, useEffect, useRef, useState } from "react";
import { useRecoilState } from "recoil";
import { CellValueState } from "../../store/CellValueState";

export type CellProps = {
  children: ComponentType | string;
};

export default function Cell(props: CellProps) {
  const [cellValue, setCellValue] = useRecoilState<string>(CellValueState);
  const [isEditMode, setIsEditMode] = useState(false);
  const inputRef = useRef(null);
  const ChangeLabeltoInput = () => {
    setIsEditMode(true);
  };

  const ChangeInputtoLabel = () => {
    setIsEditMode(false);
  };

  const onClickOutsideInputHandler = (event: MouseEvent) => {
    if ((event.target as HTMLElement)?.dataset?.cellId !== "2") {
      console.log("Hello Clicking");
      ChangeInputtoLabel();
    }
  };

  const updateCellValueState = (e: ChangeEvent<HTMLInputElement>) => {
    setCellValue(e.target.value);
  };

  useEffect(() => {
    document.addEventListener("click", onClickOutsideInputHandler);
  });
  return isEditMode ? (
    <input
      ref={inputRef}
      data-cell-id={"2"}
      value={cellValue}
      onChange={updateCellValueState}
    ></input>
  ) : (
    <div onClick={ChangeLabeltoInput} data-cell-id={"2"}>
      {cellValue}
    </div>
  );
}

// export type CellProps = {
//   children: ComponentType | string;
// };

// const Cells: FunctionComponent<CellProps> = (props) => {
//   const [isEditMode, setIsEditMode] = useState(false);
//   const ChangeLabeltoInput = () => {
//     setIsEditMode(true);
//   };

//   return isEditMode ? (
//     <input></input>
//   ) : (
//     <div onClick={ChangeLabeltoInput}>{props.children}</div>
//   );
// };

// export default Cells;
