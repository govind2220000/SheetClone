import React, {
  ComponentType,
  FunctionComponent,
  useEffect,
  useRef,
  useState,
} from "react";

export type CellProps = {
  children: ComponentType | string;
};

export default function Cell(props: CellProps) {
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

  useEffect(() => {
    document.addEventListener("click", onClickOutsideInputHandler);
  });
  return isEditMode ? (
    <input ref={inputRef} data-cell-id={"2"}></input>
  ) : (
    <div onClick={ChangeLabeltoInput} data-cell-id={"2"}>
      {props.children}
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
