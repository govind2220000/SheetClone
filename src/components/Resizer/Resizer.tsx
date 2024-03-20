import { useRecoilState } from "recoil";
import { SheetSizeState } from "../../store/SheetSizeState";

export type ResizerProps = {};

export const Resizer = (props: ResizerProps) => {
  const [sheetSize, setSheetSize] = useRecoilState(SheetSizeState);
  const initDrag = () => {
    document.addEventListener("mousemove", doDrag);
    document.addEventListener("mouseup", stopDrag);
  };
  const doDrag = (event: MouseEvent) => {
    const pointerX = event.pageX;
    const pointerY = event.pageY;

    setSheetSize({
      width: pointerX,
      height: pointerY,
    });
  };

  const stopDrag = () => {
    document.removeEventListener("mousemove", doDrag);
    document.removeEventListener("mouseup", stopDrag);
  };
  return (
    <div
      onMouseDown={initDrag}
      className="absolute bottom-[-2] right-0 bg-blue-600 h-2 w-2 cursor-se-resize"
    ></div>
  );
};
