import { ChangeEvent, ComponentType, useEffect, useRef, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { getCellValueState } from "../../store/CellValueState";
import { EvaluatedCellValueState } from "../../store/EvaluatedCellValueState";
export type CellProps = {
  cellId: string;
};

export const CELL_WIDTH = 100;
export const CELL_HEIGHT = 25;

export default function Cell(props: CellProps) {
  const [cellValue, setCellValue] = useRecoilState<string>(
    getCellValueState(props.cellId)
  );

  const evaluatedCellValueState = useRecoilValue<string>(
    EvaluatedCellValueState(props.cellId)
  );

  const [isEditMode, setIsEditMode] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const ChangeLabeltoInput = () => {
    setIsEditMode(true);
    setTimeout(() => {
      inputRef.current?.focus();
    });
  };

  const ChangeInputtoLabel = () => {
    setIsEditMode(false);
  };

  const onClickOutsideInputHandler = (event: MouseEvent) => {
    if ((event.target as HTMLElement)?.dataset?.cellId !== props.cellId) {
      console.log("Hello Clicking");
      ChangeInputtoLabel();
    }
  };

  const onDefocusInputHandler = (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key === "Enter") {
      setIsEditMode(false);
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
      className="w-full h-full text-xs p-0 m-0 border-0"
      ref={inputRef}
      data-cell-id={props.cellId}
      value={cellValue}
      onChange={updateCellValueState}
      onKeyDown={onDefocusInputHandler}
    ></input>
  ) : (
    <div
      className="overflow-hidden w-full h-full text-clip whitespace-nowrap leading-6 p-0.5"
      onClick={ChangeLabeltoInput}
      data-cell-id={props.cellId}
    >
      {evaluatedCellValueState}
    </div> //if we return props.childeren it will give everything between Cell component refer word doc
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
