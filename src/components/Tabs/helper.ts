import { createContext } from "react";

export const TabsContext = createContext({
  activedIndex: 0,
  setActivedIndex(index: number) { },
  onChange({ key, index }: { key?: number | string, index: number }) { }
})
