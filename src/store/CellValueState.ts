import { atom } from "recoil";
import { memoize } from "../utils/memoize";

// export const CellValueState = (cellId: string) =>
//   memoize(cellId, () =>
//     atom({
//       key: `cell_${cellId}`,
//       default: "",
//     })
//   );

export const cellValueStates = new Map();

export const getCellValueState = (cellId: string) => {
  if (!cellValueStates.has(cellId)) {
    cellValueStates.set(
      cellId,
      atom({
        key: `cell_${cellId}`,
        default: "",
      })
    );
  }

  return cellValueStates.get(cellId);
};
