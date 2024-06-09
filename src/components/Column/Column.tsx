export type ColumnProps = { children?: React.ReactNode };

export const Column = (props: ColumnProps) => {
  return (
    <td className="min-w-24 h-6 max-w-24 border border-gray-700">
      {props?.children}
    </td>
  );
};
