// @ts-ignore
import { Row } from "../Row/Row";
import { Column } from "../Column/Column";
import Cell, { CELL_HEIGHT, CELL_WIDTH } from "../Cell/Cell";
import { Resizer } from "../Resizer/Resizer";
import { useRecoilValue } from "recoil";
import { SheetSizeState } from "../../store/SheetSizeState";
import { AxisCell } from "../AxisCell/AxisCell";
import { numberToChar } from "../../utils/numberToChar";

export const Sheet = () => {
  const sheetSize = useRecoilValue(SheetSizeState);

  const numberOfColumns = Math.ceil(sheetSize.width / CELL_WIDTH);
  const numberOfRows = Math.ceil(sheetSize.height / CELL_HEIGHT);
  return (
    <div className="relative inline-block">
      <table className="border-spacing-0">
        <tbody>
          <Row>
            {[...Array(numberOfColumns + 1)].map((column, columnIndex) =>
              columnIndex !== 0 ? (
                <AxisCell key={columnIndex}>
                  {numberToChar(columnIndex - 1)}
                </AxisCell>
              ) : (
                <AxisCell key={columnIndex} />
              )
            )}
          </Row>
          {[...Array(numberOfRows)].map((row, rowIndex) => (
            <Row key={rowIndex}>
              <AxisCell>{rowIndex + 1}</AxisCell>
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
