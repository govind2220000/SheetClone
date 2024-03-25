import { cellValueStates } from "./CellValueState";
import { selector } from "recoil";
import { memoize } from "../utils/memoize";
import { evaluate } from "mathjs";

// export const EvaluatedCellValueState = (cellId: string) =>
//   memoize(`evaluatedCell_${cellId}`, () =>
//     selector({
//       key: `evaluatedCell_${cellId}`,
//       get: ({ get }) => {
//         const value = get(cellValueStates.get(cellId)) as string;

//         if (value.startsWith("=")) {
//           try {
//             return evaluate(value.slice(1));
//           } catch {
//             return value;
//           }
//         }
//         return value;
//       },
//     })
//   );
export const evaluatedCellState = new Map();
export const EvaluatedCellValueState = (cellId: string) => {
  if (!evaluatedCellState.has(cellId)) {
    evaluatedCellState.set(
      cellId,
      selector({
        key: cellId,
        get: ({ get }) => {
          const value = get(cellValueStates.get(cellId)) as string;
          if (value.startsWith("=")) {
            try {
              return evaluate(value.slice(1));
            } catch {
              return value;
            }
          }
          return value;
        },
      })
    );
  }

  return evaluatedCellState.get(cellId);
};
