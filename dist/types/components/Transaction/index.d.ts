import { FunctionComponentElement, ReactNode } from 'react';
import { IconProps } from '../icon/types';
export interface TransactionInfoProps {
    icon: FunctionComponentElement<IconProps>;
    iconLoading?: boolean;
    title: ReactNode;
    amount: ReactNode;
    label?: string;
    content?: string;
    datetime: string;
    className?: string;
    bodyClassName?: string;
    onClick?: () => void;
}
export declare function TransactionInfo({ icon, iconLoading, title, label, content, amount, datetime, onClick, className, bodyClassName }: TransactionInfoProps): JSX.Element;
//# sourceMappingURL=index.d.ts.map