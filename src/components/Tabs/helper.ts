import { createContext } from "react";

export const TabsContext = createContext({
  activedIndex: 0,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setActivedIndex(index: number) { },
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onChange(index: number) { }
})
