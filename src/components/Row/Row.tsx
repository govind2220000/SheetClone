import { ComponentType } from "react";
import { Column } from "../Column/Column";

export type RowProps = {};

export const Row = (props: RowProps) => {
  return <tr>{props.children}</tr>;
};
