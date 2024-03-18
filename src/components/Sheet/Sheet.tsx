import { ComponentType } from "react";
import { Row } from "../Row/Row";
import { Column } from "../Column/Column";
import Cell from "../Cell/Cell";

export type SheetProps = {};

export const Sheet = (props: SheetProps) => {
  return (
    <table>
      <tbody>
        <Row>
          <Column>
            <Cell></Cell>
          </Column>
          <Column>
            <Cell></Cell>
          </Column>
        </Row>
        <Row>
          <Column>
            <Cell></Cell>
          </Column>
          <Column>
            <Cell></Cell>
          </Column>
        </Row>
      </tbody>
    </table>
  );
};
