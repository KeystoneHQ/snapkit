import { ReactElement } from 'react';
import { TabProps } from './Tab';
export interface TabsProps {
    children: ReactElement<TabProps>[];
    defaultActivedIndex?: number;
    onChange: (index: number) => void;
}
export declare function Tabs({ defaultActivedIndex, children, onChange }: TabsProps): JSX.Element;
//# sourceMappingURL=index.d.ts.map