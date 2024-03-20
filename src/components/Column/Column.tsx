import { ComponentType } from "react";

export type ColumnProps = {};

export const Column = (props: ColumnProps) => {
  return (
    <td className="w-24 h-6 max-w-24 border border-gray-700">
      {props.children}
    </td>
  );
};
