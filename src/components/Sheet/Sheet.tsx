import { ComponentType } from "react";
import { Row } from "../Row/Row";
import { Column } from "../Column/Column";
import Cell, { CELL_HEIGHT, CELL_WIDTH } from "../Cell/Cell";
import { Resizer } from "../Resizer/Resizer";
import { useRecoilValue } from "recoil";
import { SheetSizeState } from "../../store/SheetSizeState";

export type SheetProps = {};

export const Sheet = (props: SheetProps) => {
  const sheetSize = useRecoilValue(SheetSizeState);

  const numberOfColumns = Math.ceil(sheetSize.width / CELL_WIDTH);
  const numberOfRows = Math.ceil(sheetSize.height / CELL_HEIGHT);
  return (
    <div className="relative inline-block">
      <table className="border-spacing-0">
        <tbody>
          {[...Array(numberOfRows)].map((row, rowIndex) => (
            <Row key={rowIndex}>
              {[...Array(numberOfColumns)].map((column, columnIndex) => (
                <Column key={columnIndex}>
                  <Cell cellId={`${rowIndex},${columnIndex}`}></Cell>
                </Column>
              ))}
            </Row>
          ))}
        </tbody>
      </table>
      <Resizer></Resizer>
    </div>
  );
};
