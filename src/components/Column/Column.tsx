import { ComponentType } from "react";

export type ColumnProps = {};

export const Column = (props: ColumnProps) => {
  return <td>{props.children}</td>;
};
