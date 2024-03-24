export type AxisCellProps = { children?: React.ReactNode };
export const AxisCell = (props: AxisCellProps) => {
  return (
    <th className="bg-slate-300 p-1 border border-gray-800 text-center">
      {props?.children}
    </th>
  );
};
