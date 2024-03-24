import { ComponentType } from "react";
import { Column } from "../Column/Column";

export type RowProps = { children?: React.ReactNode };

export const Row = (props: RowProps) => {
  return <tr>{props?.children}</tr>;
};
