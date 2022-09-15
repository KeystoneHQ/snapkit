import { ReactElement } from 'react';
import { TabProps } from './Tab';
interface TabsOnChange {
    key?: string | number;
    index: number;
}
export interface TabsProps {
    children: ReactElement<TabProps>[];
    defaultActivedIndex?: number;
    onChange?: (props: TabsOnChange) => void;
}
export declare function Tabs({ defaultActivedIndex, children, onChange }: TabsProps): JSX.Element;
export {};
//# sourceMappingURL=index.d.ts.map