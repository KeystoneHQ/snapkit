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
declare function TransactionInfo({ icon, iconLoading, title, label, content, amount, datetime, onClick, className, bodyClassName }: TransactionInfoProps): JSX.Element;
declare namespace TransactionInfo {
    var Skeleton: typeof TransactionInfoSkeleton;
}
declare function TransactionInfoSkeleton(args: Record<string, any>): JSX.Element;
export { TransactionInfo };
//# sourceMappingURL=index.d.ts.map